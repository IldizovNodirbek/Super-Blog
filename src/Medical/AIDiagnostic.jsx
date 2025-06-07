import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../Images/diagnostic-ai-hero.png";
import diagnostic1 from "../Images/diagnostic-1.png";
import diagnostic2 from "../Images/diagnostic-2.png";
import diagnostic3 from "../Images/diagnostic-3.png";
import diagnostic4 from "../Images/diagnostic-4.png";

const cardData = [
  {
    img: diagnostic1,
    title: "Real time analysis",
    desc: "Track your health data accurately with advanced monitors and algorithms.",
  },
  {
    img: diagnostic2,
    title: "Visual diagnostics",
    desc: "Experience the spirit of knowledge and collaboration through brain visualization and X-ray imaging.",
  },
  {
    img: diagnostic3,
    title: "Artificial Intelligence Diagnostics",
    desc: "Ensure speed and accuracy with automated analysis and digital interfaces.",
  },
  {
    img: diagnostic4,
    title: "Future Medicine",
    desc: "Take health care to a new level with holographic systems and advanced technology.",
  },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < breakpoint
  );
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const AIDiagnostic = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]); // Scrollga qarab scale
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]); // Scrollga qarab opacity

  // Sarlavha uchun animatsiya
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Paragraf uchun so'z bo'yicha animatsiya
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Hero rasm uchun animatsiya
  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Card uchun flip animatsiya
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const isMobile = useIsMobile();
  const [flipped, setFlipped] = useState(Array(cardData.length).fill(false));

  // For desktop: flip on hover, for mobile: flip on tap
  const handleFlip = (idx, value) => {
    setFlipped((prev) => {
      const copy = [...prev];
      copy[idx] = value !== undefined ? value : !copy[idx];
      return copy;
    });
  };

  return (
    <motion.div
      className="w-full min-h-screen text-gray-900 py-16 px-6 lg:px-24 font-lato"
      initial={{ background: "linear-gradient(135deg, #e0f2fe, #bae6fd)" }}
      animate={{ background: "linear-gradient(135deg, #bae6fd, #e0f2fe)" }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-center text-blue-600"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          AI Diagnostics
        </motion.h1>

        {/* Paragraf */}
        <motion.p
          className="text-lg md:text-xl text-center text-gray-700 leading-relaxed tracking-wide max-w-4xl mx-auto mb-14"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          {"The modern stage of diagnostics is taking clinical decision-making to a new level with the help of artificial intelligence. High-precision AI systems enable early detection of diseases through real-time analysis, deeply learned neural network models, and advanced image analysis."
            .split(" ")
            .map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}{" "}
              </motion.span>
            ))}
        </motion.p>

        {/* Hero Rasm */}
        <motion.div
          className="mb-14 shadow-xl rounded-xl overflow-hidden"
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          style={{ scale, opacity }}
          whileHover={{ scale: 1.02, rotate: 1 }}
        >
          <img
            src={heroImage}
            alt="AI Diagnostic Hero"
            className="w-full h-auto object-cover"
            loading="lazy"
            draggable={false}
          />
        </motion.div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => {
            const isCardFlipped = flipped[index];
            return (
              <motion.div
                key={index}
                className="relative w-full h-[300px] rounded-xl overflow-hidden"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
                      }
                    : {}
                }
                onClick={() => isMobile && handleFlip(index)}
                onMouseEnter={() => !isMobile && handleFlip(index, true)}
                onMouseLeave={() => !isMobile && handleFlip(index, false)}
                style={{
                  perspective: 1000,
                  cursor: isMobile ? "pointer" : "default",
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="absolute w-full h-full"
                  animate={{ rotateY: isCardFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </motion.div>

                {/* Back Side */}
                <motion.div
                  className="absolute w-full h-full bg-blue-100 flex flex-col justify-center items-center text-center p-4"
                  animate={{ rotateY: isCardFlipped ? 0 : -180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="font-bold text-xl mb-2 text-blue-600">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700">{card.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default AIDiagnostic;
