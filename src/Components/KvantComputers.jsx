import { motion } from "framer-motion";
import KvantHero from "../Images/Kvant-techno-hero.png";

const paragraphVariant = {
  hidden: { opacity: 0, y: 30, skewY: 5 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function KvantComputers() {
  const paragraphs = [
    "Quantum computers are a technology that goes beyond the limits of classical computers.",
    "Traditional computers rely on the numbers 0 and 1, while quantum computers can represent multiple states at once through quantum bits (qubits).",
    "This technology makes it possible to perform even the most complex calculations in a few seconds.",
    "Quantum supremacy will revolutionize cryptography, new drug development, meteorological modeling, financial market analysis, and more.",
    "However, for now, this technology is very complex, sensitive and requires working under special conditions. Nevertheless, scientists are making consistent efforts to popularize it and bring it into everyday life.",
  ];

  return (
    <section className="flex flex-col items-center text-center space-y-10 px-2 sm:px-4 py-10 sm:py-16 w-full">
      {/* Image with futuristic glow + float */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        whileHover={{ scale: 1.03, rotate: 0.3 }}
        className="relative shadow-[0_0_40px_#00fff766] rounded-2xl w-full max-w-2xl mx-auto"
      >
        <img
          src={KvantHero}
          alt="Kvant Kompyuter"
          className="rounded-2xl w-full object-cover border border-cyan-400/10"
        />
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/20 animate-pulse blur-[2px] pointer-events-none"></div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
        className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold font-[Orbitron]
          bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400
          text-transparent bg-clip-text drop-shadow-[0_0_25px_#00fff7] max-w-2xl mx-auto"
      >
       The Quantum Computer Revolution
      </motion.h2>

      {/* Paragraphs with animation */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 w-full max-w-2xl mx-auto"
      >
        {paragraphs.map((text, i) => (
          <motion.div
            key={i}
            variants={paragraphVariant}
            className="flex items-start gap-3 sm:gap-4 text-left text-gray-300 text-base sm:text-lg font-light leading-relaxed font-['Inter']"
          >
            {/* Neon dot decoration */}
            <span className="mt-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#00fff7] animate-pulse border border-cyan-300/40 flex-shrink-0"></span>
            <span className="block">{text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
