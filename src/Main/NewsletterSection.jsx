// components/NewsletterSection.jsx

import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="w-full px-6 py-20 bg-black text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 opacity-40 animate-pulse z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg tracking-wide"
        >
          Yangiliklar uchun obuna bo‘ling
        </motion.h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-300">
          Eng so‘nggi maqolalar va texnologik yangiliklardan xabardor bo‘ling.
        </p>

        {/* Input + Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Emailingizni kiriting"
            className="w-full sm:w-[300px] px-5 py-3 bg-transparent border-2 border-cyan-400 text-white placeholder:text-gray-400 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_20px_#00ffff55]"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-[0_0_25px_#8b5cf6aa] transition-all duration-300">
            Subscribe
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
