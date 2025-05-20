// src/Medical/GeneticEngineering.jsx
import { motion } from "framer-motion";
import MedicalGroup from "../Images/Medical-group-hero.png"; // Genetik muhandislik rasmi

export default function GeneticEngineering() {
  return (
    <section className="flex flex-col items-center md:flex-row md:items-start gap-10 py-16 px-8 bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
      {/* Image */}
      <motion.img
        src={MedicalGroup}
        alt="Genetic Engineering"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="rounded-2xl shadow-xl w-full md:w-1/2 object-cover"
      />

      {/* Text Content */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-center md:text-left">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold text-blue-700"
        >
          Genetic Engineering
        </motion.h2>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
        >
          Genetic Engineering — bu organizmlarning genetik tuzilishini
          o'zgartirish orqali yangi imkoniyatlar yaratish texnologiyasidir. Bu
          tibbiyotda kasalliklarni davolash, organ transplantatsiyasi va
          zamonaviy biotexnologiyada inqilobiy o'zgarishlarni olib kelmoqda.
        </motion.p>
      </div>
    </section>
  );
}
