import { motion } from "framer-motion";

const texts = [
  { text: "Mening blogim bilan...", color: "from-cyan-400 to-blue-600" },
  {
    text: "Yangicha uslub va kelajakka hamohang bo‘lib...",
    color: "from-pink-400 to-purple-600",
  },
  {
    text: "Yorqinlikka to‘la, ajoyib hissiyot uyg‘unligidan zavq oling!",
    color: "from-yellow-300 to-red-500",
  },
];

export default function HeroScroll() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center gap-10 px-4">
      <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-10 drop-shadow-[0_5px_15px_rgba(0,255,255,0.5)]">
        Super Blog
      </h1>

      <div className="flex flex-col items-center gap-16">
        {texts.map((item, i) => (
          <motion.h2
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 3, duration: 3 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} drop-shadow-[0_5px_15px_rgba(255,255,255,0.3)] text-center`}
          >
            {item.text}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}
