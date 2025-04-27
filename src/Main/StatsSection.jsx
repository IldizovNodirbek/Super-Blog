import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Maqolalar", value: 120, suffix: "+" },
  { label: "Obunachilar", value: 8000, suffix: "+" },
  { label: "Izohlar", value: 2500, suffix: "+" },
  { label: "Yillar", value: 5, suffix: "+" },
];

function Counter({ target, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);

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
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className="text-4xl font-extrabold text-white">
      {count.toLocaleString() + suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 drop-shadow-xl"
        >
          Bizning Statistikamiz
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl shadow-lg bg-black/20 backdrop-blur border border-purple-500 animate-pulse hover:scale-105 transform transition duration-500"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-lg font-medium text-purple-200">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
