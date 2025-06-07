import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import jobs from "../Data/Jobs";

// Helper to generate evenly distributed spark positions
function generateSparkPositions(count) {
  const positions = [];
  const sqrt = Math.ceil(Math.sqrt(count));
  for (let i = 0; i < count; i++) {
    // Grid-based distribution with jitter
    const row = Math.floor(i / sqrt);
    const col = i % sqrt;
    const top = (row / sqrt) * 100 + (Math.random() - 0.5) * (60 / sqrt); // jitter for natural look
    const left = (col / sqrt) * 100 + (Math.random() - 0.5) * (60 / sqrt);
    positions.push({
      top: `${Math.max(0, Math.min(100, top))}vh`,
      left: `${Math.max(0, Math.min(100, left))}vw`,
      size: 2 + Math.random() * 2,
      opacity: 0.25 + Math.random() * 0.35,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    });
  }
  return positions;
}

const SPARK_COUNT = 32;
const sparkPositions = generateSparkPositions(SPARK_COUNT);

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
    <div className="flex items-center justify-center mb-16 min-h-[80px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          className="text-4xl md:text-6xl font-bold text-center"
          style={{
            backgroundImage: gradients[currentIndex],
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            transition: "background-image 0.5s",
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
        background: "#1A1A1A",
        position: "relative",
      }}
    >
      {/* Spark/Star Animation */}
      <div
        className="fixed top-0 left-0 w-screen h-screen z-10 pointer-events-none"
        style={{ inset: 0 }}
      >
        {sparkPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              background: "white",
              opacity: pos.opacity,
              filter: "blur(0.5px)",
            }}
            animate={{
              opacity: [0, pos.opacity, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
            }}
          />
        ))}
      </div>

      {/* Animated Title */}
      <TitleAnimation />

      {/* Hero images for each job (scaled down) */}
      <div className="relative z-20 flex flex-col items-center w-full mb-12">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="mb-10 w-full max-w-md mx-auto relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.15,
            }}
          >
            <motion.div
              className="w-full rounded-2xl overflow-hidden border-4"
              style={{
                borderImage: "linear-gradient(45deg, #00f0ff, #00ff85) 1",
                boxShadow:
                  "0 0 12px #00f0ff, inset 0 0 6px rgba(0, 240, 255, 0.3)",
                padding: "8px",
                background: "linear-gradient(45deg, #181824, #232336)",
                aspectRatio: "16 / 9",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 18px #00f0ff" }}
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

      {/* Cards */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-16">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <div className="bg-[#232336] border border-white/20 rounded-2xl overflow-hidden w-full max-w-xs shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-28 sm:h-32 object-contain object-center rounded-t-2xl"
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

      {/* Paragraphs */}
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative z-20 mt-12 text-center max-w-3xl w-full px-4 sm:px-6"
        >
          <h2 className="text-white font-['Roboto'] font-bold text-2xl sm:text-3xl md:text-4xl mb-4 relative inline-block glow-text">
            {job.title}
          </h2>
          {job.paragraphs.map((paragraph, pIndex) => (
            <div key={pIndex} className="mb-4">
              <p className="text-[#ccc] font-['Roboto'] font-light text-base sm:text-lg leading-relaxed tracking-wide text-justify">
                {paragraph}
              </p>
              <div className="w-full h-px bg-gray-600/50 my-3"></div>
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
