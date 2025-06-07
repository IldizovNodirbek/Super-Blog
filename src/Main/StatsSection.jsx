import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Articles", value: 120, suffix: "+" },
  { label: "Subscribers", value: 8000, suffix: "+" },
  { label: "Notes", value: 2500, suffix: "+" },
  { label: "Years", value: 5, suffix: "+" },
];

function Counter({ target, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 10;
    const step = (end / (duration * 1000)) * incrementTime;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
        setDone(true);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <motion.span
      className="text-5xl font-extrabold text-white drop-shadow-lg"
      animate={done ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.5, type: "tween" }}
    >
      {count.toLocaleString() + suffix}
    </motion.span>
  );
}

const cardGradients = [
  "from-pink-500 via-purple-500 to-indigo-500",
  "from-yellow-400 via-pink-500 to-red-500",
  "from-green-400 via-blue-400 to-purple-400",
  "from-cyan-400 via-blue-500 to-purple-500",
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-[#181824] overflow-hidden">
      {/* Animated background gradient */}
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
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 mb-16 drop-shadow-xl"
        >
          Our Statistics
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 32px 0 rgba(236,72,153,0.25)",
                borderColor: "#fff",
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className={`relative group bg-gradient-to-br ${cardGradients[index % cardGradients.length]} p-[2px] rounded-2xl shadow-xl`}
            >
              <div className="bg-[#181824] rounded-2xl h-full w-full p-8 flex flex-col items-center justify-center relative z-10 overflow-hidden">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-lg font-semibold text-white/80 tracking-wide uppercase">
                  {stat.label}
                </p>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-60 transition duration-500 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
