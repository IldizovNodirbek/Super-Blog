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
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 bilan boshida bo‘sh

  // Sarlavha uchun typewriter
  const [title] = useTypewriter({
    words: ["Robotic Surgery"],
    loop: false,
    typeSpeed: 90,
    delaySpeed: 1500,
  });

  // Paragraf uchun typewriter
  const [paragraphText, { isDone }] = useTypewriter({
    words: currentIndex >= 0 ? [paragraphs[currentIndex].text] : [""],
    loop: false,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 500,
    key: currentIndex, // currentIndex o‘zgarganda typewriter qayta ishga tushadi
  });

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev < paragraphs.length - 1) {
        return prev + 1;
      } else {
        return 0; // Oxirgi bo‘limdan boshiga qaytish
      }
    });
  };

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", type: "tween" },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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

  return (
    <motion.div
      className="relative min-h-screen px-4 sm:px-8 py-12 font-['Roboto'] text-gray-800 overflow-hidden"
      initial={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
      animate={{ background: "linear-gradient(135deg, #3b82f6, #1e3a8a)" }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* Hero Rasm */}
      <motion.div
        className="flex justify-center mb-12"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <img
          src={RoboticSurgeryImage}
          alt="Robotic Surgery Hero"
          className="w-full max-w-6xl h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-2xl shadow-[0_0_40px_#3B82F6] object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Sarlavha */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-wide drop-shadow-lg text-center"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {title}
        <Cursor cursorStyle="_" cursorColor="#ffffff" />
      </motion.h1>

      {/* Kontent Qutisi */}
      <motion.div
        className="max-w-4xl mx-auto bg-blue-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.8)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {currentIndex >= 0 && (
            <motion.div
              key={currentIndex}
              className="text-center"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {paragraphs[currentIndex].title}
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed tracking-wide">
                {paragraphText}
                {isDone && <Cursor cursorStyle="_" cursorColor="#ffffff" />}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tugmalar */}
        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md"
            onClick={handleNext}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={isDone === false} // Yozish tugamaguncha tugma ishlamaydi
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
