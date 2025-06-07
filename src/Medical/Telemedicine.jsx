import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImg1 from "../Images/telemedicine-hero-1.png";
import heroImg2 from "../Images/telemedicine-hero-2.png";
import heroImg3 from "../Images/telemedicine-hero-3.png";

const images = [heroImg1, heroImg2, heroImg3];

const faqs = [
  {
    title: "What is Telemedicine?",
    content:
      "Telemedicine allows healthcare professionals to evaluate, diagnose, and treat patients at a distance using telecommunications technology.",
  },
  {
    title: "Is Telemedicine secure?",
    content:
      "Yes, modern Telemedicine solutions are encrypted and comply with healthcare privacy regulations like HIPAA.",
  },
  {
    title: "How to book a Telemedicine appointment?",
    content:
      "You can book appointments via hospital apps, websites, or calling the healthcare provider.",
  },
  {
    title: "Can prescriptions be given via Telemedicine?",
    content:
      "Yes, doctors can provide digital prescriptions after your online consultation.",
  },
  {
    title: "Does insurance cover Telemedicine?",
    content:
      "Many insurance providers now cover Telemedicine consultations, depending on your plan.",
  },
  {
    title: "Which devices support Telemedicine?",
    content:
      "Any smartphone, tablet, or computer with camera and internet can be used.",
  },
];

// Responsive hook for fan layout
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

export default function Telemedicine() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const isMobile = useIsMobile();

  // Typewriter for title
  const [title] = useTypewriter({
    words: ["Telemedicine"],
    loop: false,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Animation variants for fan images
  const fanVariants = {
    initial: (i) => ({
      opacity: 0,
      scale: 0.7,
      y: 60,
      rotate: isMobile ? 0 : (i - 1) * 18,
      x: isMobile ? 0 : (i - 1) * 140,
      zIndex: 10 + i,
    }),
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: isMobile ? 0 : (i - 1) * 18,
      x: isMobile ? 0 : (i - 1) * 140,
      zIndex: 10 + i,
      transition: { type: "spring", stiffness: 120, delay: i * 0.13 },
    }),
    hover: {
      scale: 1.12,
      boxShadow: "0 8px 40px 0 rgba(59,130,246,0.25)",
      zIndex: 30,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: {
      scale: 0.97,
      boxShadow: "0 2px 24px 0 rgba(59,130,246,0.35)",
    },
  };

  return (
    <div className=" min-h-screen py-10 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.5)] mb-4 animate-pulse select-none break-words"
          style={{ wordBreak: "break-word" }}
        >
          <span>{title}</span>
          <span className="pointer-events-none select-none align-middle">
            <Cursor />
          </span>
        </h1>

        {/* Main descriptive paragraph */}
        <motion.p
          className="mt-6 text-gray-700 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Discover a revolutionary way to access healthcare—
          <span className="text-blue-600 font-semibold">anywhere</span>,{" "}
          <span className="text-blue-600 font-semibold">anytime</span>. With
          Telemedicine, expert consultations, real-time diagnosis, and
          prescriptions are now just a click away.
        </motion.p>
      </motion.div>

      {/* Fan-style Hero Images */}
      <div
        className="relative mb-20 w-full max-w-4xl"
        style={{
          height: isMobile ? `${images.length * 220}px` : "540px",
        }}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="absolute"
            custom={i}
            variants={fanVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            onClick={() => setSelectedImg(i)}
            style={{
              top: isMobile ? `${i * 180 + 20}px` : "50%",
              left: "50%",
              transform: isMobile
                ? "translate(-50%, 0)"
                : "translate(-50%, -50%)",
              cursor: "pointer",
              zIndex: selectedImg === i ? 40 : 10 + i,
              transition: "z-index 0.2s",
            }}
          >
            <motion.img
              src={img}
              alt={`Telemedicine hero ${i + 1}`}
              className="w-80 rounded-2xl border-4 border-white shadow-[0_0_50px_rgba(59,130,246,0.7)] bg-white"
              draggable={false}
              whileHover={{ scale: 1.13 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal Image Viewer */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={images[selectedImg]}
              className="w-[90%] sm:w-[70%] md:w-[50%] rounded-xl shadow-2xl border-4 border-blue-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              alt="Telemedicine enlarged"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <motion.div
        className="bg-blue-100 rounded-3xl p-6 md:p-10 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-800 mb-8">
          Learn More About Telemedicine
        </h2>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-5 border-b-2 border-blue-300 pb-3">
            <div
              onClick={() => toggleAccordion(i)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                {faq.title}
              </h3>
              <motion.div
                animate={{ rotate: expanded === i ? 180 : 0 }}
                className="text-blue-800 text-2xl"
              >
                ▼
              </motion.div>
            </div>
            <AnimatePresence>
              {expanded === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed"
                >
                  {faq.content}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
