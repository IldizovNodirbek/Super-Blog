// components/NewsletterSection.jsx

import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="w-full px-6 py-24 bg-[#0f1021] text-white relative overflow-hidden">
      {/* Animated, moving gradient background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, #06b6d4 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, #a21caf 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, #f59e42 0%, transparent 70%)",
        }}
        animate={{
          backgroundPosition: [
            "20% 30%, 80% 70%, 50% 50%",
            "25% 35%, 75% 65%, 55% 55%",
            "20% 30%, 80% 70%, 50% 50%",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-cyan-400/20 shadow-2xl px-8 py-14 flex flex-col items-center"
        >
          {/* Title Animation */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg tracking-wide mb-4"
          >
            Subscribe for News
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-gray-200 mb-8 text-center"
          >
            Stay up to date with the latest articles and tech news.
          </motion.p>

          {/* Input + Button */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              whileFocus={{
                borderColor: "#06b6d4",
                boxShadow: "0 0 0 3px #06b6d455",
              }}
              className="w-full sm:w-[300px] px-5 py-3 bg-white/10 border-2 border-cyan-400/60 text-white placeholder:text-gray-400 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_20px_#06b6d455]"
              required
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.07,
                background:
                  "linear-gradient(90deg,#06b6d4,#a21caf,#f59e42,#06b6d4)",
                boxShadow: "0 0 32px 0 #a21caf55",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-7 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 tracking-wide text-lg"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
