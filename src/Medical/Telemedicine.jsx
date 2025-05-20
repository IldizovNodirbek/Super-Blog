import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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

export default function Telemedicine() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="font-[Lato] bg-white min-h-screen py-10 px-4 relative overflow-hidden">
      {/* Typewriter Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">
          <span>
            {
              useTypewriter({
                words: ["Telemedicine"],
                loop: false,
                typeSpeed: 100,
                deleteSpeed: 50,
              })[0]
            }
            <Cursor />
          </span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Bridging the gap between healthcare and technology, offering
          convenient access to medical care remotely.
        </p>
      </div>

      {/* Fan-style Hero Images */}
      <div className="relative mb-20" style={{ height: "420px" }}>
        {images.map((img, i) => {
          const rotate = (i - 1) * 15;
          const translateX = (i - 1) * 160;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${rotate}deg) translateX(${translateX}px)`,
                transformOrigin: "center center",
                zIndex: selectedImg === i ? 30 : 10,
              }}
            >
              <motion.img
                src={img}
                onClick={() => setSelectedImg(i)}
                className="w-64 cursor-pointer rounded-2xl border-4 border-white shadow-[0_0_50px_rgba(59,130,246,0.7)]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          );
        })}
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
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <div className="bg-blue-100 rounded-3xl p-6 md:p-10 shadow-xl">
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
      </div>
    </div>
  );
}
