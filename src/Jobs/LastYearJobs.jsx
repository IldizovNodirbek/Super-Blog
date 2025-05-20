import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import jobs from "../Data/Jobs";

function TitleAnimation() {
  const titles = [
    "2025 Year Jobs",
    "Future Professions",
    "AI Prompt Engineer",
    "Blockchain Developer",
    "Data Scientist",
    "Green Energy Engineer",
    "Financial Analyst",
    "Cybersecurity Specialist",
  ];

  const gradients = [
    "linear-gradient(90deg, #ff4d4d, #ff8787)", // 2025 Year Jobs
    "linear-gradient(90deg, #4dff4d, #87ff87)", // Future Professions
    "linear-gradient(90deg, #4d4dff, #8787ff)", // AI Prompt Engineer
    "linear-gradient(90deg, #ffdf4d, #ffef87)", // Blockchain Developer
    "linear-gradient(90deg, #df4dff, #ef87ff)", // Data Scientist
    "linear-gradient(90deg, #4dffd4, #87ffef)", // Green Energy Engineer
    "linear-gradient(90deg, #ffd44d, #ffef87)", // Financial Analyst
    "linear-gradient(90deg, #ff4d9e, #ff87c3)", // Cybersecurity Specialist
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Har 2 soniyada o‘zgaradi

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="flex items-center justify-center mb-16">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          className="text-5xl md:text-7xl font-bold text-center"
          style={{
            backgroundImage: gradients[currentIndex],
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {titles[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default function YearJobs() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black flex flex-col items-center py-20 px-4 overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Animatsiyali sarlavha */}
      <TitleAnimation />

      {/* Har bir kasb uchun hero rasm */}
      <div className="flex flex-col items-center w-full mb-16">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="mb-12 w-[80%] relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <motion.div
              className="w-full h-[90vh] rounded-2xl overflow-hidden border-8 border-[linear-gradient(45deg, #00f0ff, #00ff85)]"
              style={{
                boxShadow:
                  "0 0 20px #00f0ff, inset 0 0 10px rgba(0, 240, 255, 0.3)",
                padding: "12px",
                background: "linear-gradient(45deg, #0a0a1a, #1a1a2a)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00f0ff" }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={job.heroImage}
                alt={`${job.title} hero image`}
                className="w-full h-full object-cover rounded-xl"
                style={{}}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Kartalar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-16">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <div className="bg-[#1e1e1e] border border-white/20 rounded-2xl overflow-hidden w-72 shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-white text-xl font-bold text-center">
                  {job.title.replace("Who is a ", "").replace("?", "")}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Paragraflar */}
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-24 text-center max-w-4xl w-full"
        >
          <h2 className="text-white font-['Roboto'] font-bold text-3xl md:text-4xl mb-6 relative inline-block glow-text">
            {job.title}
          </h2>
          {job.paragraphs.map((paragraph, pIndex) => (
            <div key={pIndex} className="mb-6">
              <p className="text-[#ccc] font-['Roboto'] font-light text-lg leading-relaxed tracking-wide text-justify px-6 md:px-0">
                {paragraph}
              </p>
              <div className="w-full h-px bg-gray-600/50 my-4"></div>
            </div>
          ))}
        </motion.div>
      ))}

      <style>{`
        .glow-text {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.9),
            0 0 15px rgba(255, 255, 255, 0.7), 0 0 25px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
