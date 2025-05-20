import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Tezkorlik",
    desc: "Sayt yuklanishi chaqqon va animatsiyalar optimallashtirilgan.",
    icon: <Sparkles className="text-pink-500 w-8 h-8" />,
  },
  {
    title: "Moslashuvchan dizayn",
    desc: "Har qanday qurilma uchun uyg‘unlashgan layout.",
    icon: <Sparkles className="text-purple-500 w-8 h-8" />,
  },
  {
    title: "Zamonaviy UI",
    desc: "Futuristik dizayn va yengil foydalanish tajribasi.",
    icon: <Sparkles className="text-cyan-400 w-8 h-8" />,
  },
];

const FeatureCard = ({ title, desc, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-[#0e0e0e] border border-white/10 hover:border-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition p-6 rounded-2xl shadow-xl hover:shadow-pink-700/30 hover:scale-105 duration-500"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-10"
        >
          Sayt Xususiyatlari
        </motion.h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {features.map((item, i) => (
            <FeatureCard key={i} delay={i * 0.3} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
