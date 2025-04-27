import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const gradientClasses = [
  "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  "bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400",
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
];

const FloatingSuperBlog = () => {
  const [currentGradient, setCurrentGradient] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentGradient((prev) => (prev + 1) % gradientClasses.length);
        setVisible(true);
      }, 500); // animate out, then in
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-1/4 left-0 z-50 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.h2
            key={currentGradient}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={clsx(
              "text-5xl font-serif font-bold text-transparent bg-clip-text drop-shadow-lg animate-pulse",
              gradientClasses[currentGradient]
            )}
          >
            SUPER BLOG
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingSuperBlog;
