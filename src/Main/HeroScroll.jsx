import { motion } from "framer-motion";

const texts = [
  { text: "With my blog…", color: "from-cyan-400 to-blue-600" },
  {
    text: "New style and in tune with the future...",
    color: "from-pink-400 to-purple-600",
  },
  {
    text: "Enjoy the brilliant combination of brilliant emotions!",
    color: "from-yellow-300 to-red-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function HeroScroll() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center gap-10 px-4 sm:px-8">
      <h1
        className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-10 drop-shadow-[0_5px_15px_rgba(0,255,255,0.5)]"
        aria-label="Super Blog"
      >
        Super Blog
      </h1>

      <motion.div
        className="flex flex-col items-center gap-10 sm:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {texts.map((item, i) => (
          <motion.h2
            key={i}
            variants={textVariants}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} drop-shadow-[0_5px_15px_rgba(255,255,255,0.3)] text-center`}
          >
            {item.text}
          </motion.h2>
        ))}
      </motion.div>
    </section>
  );
}
