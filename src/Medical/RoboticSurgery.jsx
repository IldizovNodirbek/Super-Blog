import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import RoboticSurgeryImage from "../Images/robotic-surgery.png";

const paragraphs = [
  {
    title: "Precision and Control",
    text: "Robotic surgery systems, like the da Vinci Surgical System, provide surgeons with enhanced precision through 3D visualization and articulated instruments, allowing for complex procedures with minimal invasiveness.",
  },
  {
    title: "Minimally Invasive Techniques",
    text: "These systems enable smaller incisions, reducing blood loss, scarring, and recovery time compared to traditional open surgeries, transforming patient outcomes.",
  },
  {
    title: "AI Integration",
    text: "Artificial intelligence enhances robotic surgery by analyzing real-time data, predicting complications, and assisting surgeons in decision-making during operations.",
  },
  {
    title: "Telesurgery Advancements",
    text: "Surgeons can now perform procedures remotely using robotic systems, enabling access to specialized care in underserved regions across the globe.",
  },
  {
    title: "Future Innovations",
    text: "Emerging technologies, such as nanorobots and augmented reality, promise to further revolutionize robotic surgery, making it more precise and accessible.",
  },
];

export default function RoboticSurgery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showStatic, setShowStatic] = useState(true);
  const [title] = useTypewriter({
    words: ["Robotic Surgery"],
    loop: false,
    typeSpeed: 90,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  // Typewriter faqat o'tish jarayonida ishlaydi
  const [paragraphText] = useTypewriter({
    words: [paragraphs[currentIndex].text],
    loop: false,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 500,
    onType: () => setIsTyping(true),
    onDone: () => {
      setIsTyping(false);
      setShowStatic(true);
    },
  });

  const handleNext = () => {
    setShowStatic(false);
    setIsTyping(true);
    setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
  };

  const handlePrevious = () => {
    setShowStatic(false);
    setIsTyping(true);
    setCurrentIndex(0);
  };

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)" },
    tap: { scale: 0.95 },
  };

  const previousButtonVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(249, 115, 22, 0.7)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="relative min-h-screen px-4 md:px-8 py-12 font-['Roboto'] text-gray-800 overflow-hidden"
      initial={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
      animate={{ background: "linear-gradient(135deg, #3b82f6, #1e3a8a)" }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* Sarlavha */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg text-center"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {title}
        <Cursor />
      </motion.h1>

      {/* Kontent Qutisi */}
      <motion.div
        className="max-w-4xl mx-auto bg-blue-900/90 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.8)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="text-center"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {paragraphs[currentIndex].title}
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed tracking-wide">
              {showStatic && !isTyping
                ? paragraphs[currentIndex].text
                : paragraphText}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Tugmalar */}
        <div className="mt-6 flex justify-center gap-4">
          {currentIndex < paragraphs.length - 1 ? (
            <motion.button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md"
              onClick={handleNext}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={isTyping}
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md"
              onClick={handlePrevious}
              variants={previousButtonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={isTyping}
            >
              Previous
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Hero Rasm */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={RoboticSurgeryImage}
          alt="Robotic Surgery Hero"
          className="w-full max-w-6xl rounded-2xl shadow-[0_0_80px_#3B82F6]"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}
