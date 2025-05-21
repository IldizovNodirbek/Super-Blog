import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import jobs from "../Data/Jobs";

// Import background image
import backgroundImage from "../Images/yearjob-main-background.png"; // Rasm yo‘lini moslashtiring

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
    "linear-gradient(90deg, #ff4d4d, #ff8787)",
    "linear-gradient(90deg, #4dff4d, #87ff87)",
    "linear-gradient(90deg, #4d4dff, #8787ff)",
    "linear-gradient(90deg, #ffdf4d, #ffef87)",
    "linear-gradient(90deg, #df4dff, #ef87ff)",
    "linear-gradient(90deg, #4dffd4, #87ffef)",
    "linear-gradient(90deg, #ffd44d, #ffef87)",
    "linear-gradient(90deg, #ff4d9e, #ff87c3)",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

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
      className="relative min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundColor: "#000", // Qora fon
        position: "relative",
      }}
    >
      {/* Fon rasmi qatlami */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.85, // Xiralikni kamaytirish
          filter: "contrast(1.2) brightness(1.1)", // Fonni aniqroq qilish
        }}
      />

      {/* Miltillovchi yulduzlar effekti */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              opacity: 0.7,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animatsiyali sarlavha */}
      <TitleAnimation />

      {/* Har bir kasb uchun hero rasm */}
      <div className="relative z-20 flex flex-col items-center w-full mb-16">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="mb-12 w-full max-w-[80%] sm:max-w-[90%] mx-auto relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <motion.div
              className="w-full rounded-2xl overflow-hidden border-8 border-[linear-gradient(45deg, #00f0ff, #00ff85)]"
              style={{
                boxShadow:
                  "0 0 20px #00f0ff, inset 0 0 10px rgba(0, 240, 255, 0.3)",
                padding: "12px",
                background: "linear-gradient(45deg, #0a0a1a, #1a1a2a)",
                aspectRatio: "16 / 9", // Proportsiyani saqlash
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00f0ff" }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={job.heroImage}
                alt={`${job.title} hero image`}
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Kartalar */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-16">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <div className="bg-[#1e1e1e] border border-white/20 rounded-2xl overflow-hidden w-full max-w-xs shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-32 sm:h-40 object-contain object-center rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-white text-lg sm:text-xl font-bold text-center">
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
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative z-20 mt-16 text-center max-w-4xl w-full px-4 sm:px-6"
        >
          <h2 className="text-white font-['Roboto'] font-bold text-2xl sm:text-3xl md:text-4xl mb-6 relative inline-block glow-text">
            {job.title}
          </h2>
          {job.paragraphs.map((paragraph, pIndex) => (
            <div key={pIndex} className="mb-6">
              <p className="text-[#ccc] font-['Roboto'] font-light text-base sm:text-lg leading-relaxed tracking-wide text-justify">
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
