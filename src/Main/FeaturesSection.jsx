import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Speed",
    desc: "The site loads faster and the animations are optimized.",
    iconColor: "text-pink-500",
    glow: "from-pink-500 to-purple-500",
  },
  {
    title: "Flexible design",
    desc: "Compatible layout for any device.",
    iconColor: "text-purple-500",
    glow: "from-purple-500 to-cyan-400",
  },
  {
    title: "Modern UI",
    desc: "Futuristic design and easy-to-use experience.",
    iconColor: "text-cyan-400",
    glow: "from-cyan-400 to-pink-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.18,
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: 8,
    transition: { type: "spring", stiffness: 300 },
  },
};

const FeatureCard = ({ title, desc, iconColor, glow, i }) => (
  <motion.div
    custom={i}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover="hover"
    className={`relative group bg-gradient-to-br ${glow} p-[2px] rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105`}
  >
    {/* Card inner background */}
    <div className="bg-[#15151a] rounded-2xl h-full w-full p-7 flex flex-col items-center relative z-10 overflow-hidden">
      {/* Animated icon */}
      <motion.div
        variants={iconVariants}
        className={`mb-5 ${iconColor} drop-shadow-[0_0_18px_rgba(236,72,153,0.25)]`}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>
      <h3 className="text-2xl font-bold text-white mb-2 text-center drop-shadow">
        {title}
      </h3>
      <p className="text-white/70 text-base leading-relaxed text-center">
        {desc}
      </p>
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-60 transition duration-500 bg-gradient-to-br ${glow} blur-xl`}
      />
    </div>
  </motion.div>
);

export default function FeaturesSection() {
  return (
    <section className="relative py-24 px-4 md:px-12 bg-[#101014] overflow-hidden">
      {/* Optional: animated background gradient */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 10%, rgba(236,72,153,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(34,211,238,0.08) 0%, transparent 60%)",
        }}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-14 drop-shadow-lg"
        >
          Sayt Xususiyatlari
        </motion.h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {features.map((item, i) => (
            <FeatureCard key={i} i={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
