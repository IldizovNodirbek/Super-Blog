// components/NewsletterSection.jsx

import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="w-full px-6 py-24 bg-[#141629] text-white relative overflow-hidden">
      {/* Subtle animated pink/blue gradient background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, #60a5fa 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, #ec4899 0%, transparent 60%)",
        }}
        animate={{
          backgroundPosition: [
            "20% 30%, 80% 70%",
            "25% 35%, 75% 65%",
            "20% 30%, 80% 70%",
          ],
        }}
        transition={{
          duration: 14,
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
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-pink-400/20 shadow-2xl px-8 py-14 flex flex-col items-center"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide"
          >
            Subscribe for News
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-white/80 mb-8 text-center"
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
                borderColor: "#ec4899",
                boxShadow: "0 0 0 2px #ec489955",
              }}
              className="w-full sm:w-[300px] px-5 py-3 bg-white/10 border-2 border-pink-400/40 text-white placeholder:text-white/60 rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 backdrop-blur-md"
              required
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.07,
                background: "linear-gradient(90deg,#60a5fa,#ec4899,#60a5fa)",
                boxShadow: "0 0 24px 0 #ec489955",
              }}
              whileTap={{
                scale: 0.95,
                background: "linear-gradient(90deg,#ec4899,#60a5fa,#ec4899)",
                boxShadow: "0 0 32px 0 #60a5fa55",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-7 py-3 bg-gradient-to-r from-pink-400 via-blue-400 to-pink-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300 tracking-wide text-lg"
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
