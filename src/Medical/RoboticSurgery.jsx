import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GripVertical } from "lucide-react";
import RoboticSurgeryImage from "../Images/robotic-surgery.png";

const paragraphs = [
  {
    title: "Precision and Control",
    text: "Robotic surgery systems provide surgeons with unmatched precision through 3D visualization and articulated instruments.",
  },
  {
    title: "Minimally Invasive Techniques",
    text: "These systems enable smaller incisions, reducing recovery time and improving patient outcomes.",
  },
  {
    title: "AI Integration",
    text: "Artificial intelligence helps analyze real-time data, predict complications, and support surgeon decision-making.",
  },
  {
    title: "Telesurgery Advancements",
    text: "Remote robotic surgery allows specialists to operate on patients in distant or underserved regions.",
  },
  {
    title: "Future Innovations",
    text: "Nanorobots and augmented reality are set to redefine surgical capabilities in the coming years.",
  },
  {
    title: "Human-Machine Collaboration",
    text: "Surgeons and AI-powered systems now work together, combining intuition and machine precision for best outcomes.",
  },
];

export default function RoboticSurgery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 px-4 sm:px-8 py-12 font-['Roboto'] text-gray-100 overflow-hidden animate-bg">
      {/* Hero Image */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={RoboticSurgeryImage}
          alt="Robotic Surgery"
          className="w-full max-w-6xl h-[60vh] object-cover rounded-2xl shadow-[0_0_40px_#60a5fa]"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg text-white mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Robotic Surgery
      </motion.h1>

      {/* Main Paragraph Box */}
      <motion.div
        className="max-w-4xl mx-auto bg-blue-900/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="text-center"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.96 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <motion.h2
              className="text-xl sm:text-2xl font-semibold text-white mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {paragraphs[currentIndex].title}
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-200 leading-relaxed tracking-wide min-h-[80px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {paragraphs[currentIndex].text}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <motion.div
          className="mt-6 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            onClick={handleNext}
            className="px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Next</span>
            <motion.span
              className="absolute inset-0 bg-blue-700 opacity-20 rounded-xl"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.6,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Responsive Animated Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paragraphs.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative bg-blue-800/80 border border-blue-300/20 p-6 rounded-xl shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_35px_#60a5fa] transition duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="absolute top-3 right-3 text-blue-300">
              <GripVertical size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
