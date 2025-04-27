import { motion } from "framer-motion";

export default function FiveG() {
  return (
    <section className="flex flex-col items-center text-center space-y-8">
      <img
        src="/images/5g-network.jpg"
        alt="5G tarmoqlar"
        className="rounded-2xl shadow-lg w-full max-w-5xl object-cover"
      />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-cyan-400"
      >
        5G: Yangi Avlod Tarmoqlari
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg text-gray-300 max-w-4xl leading-relaxed"
      >
        5G texnologiyasi — tezlik, ishonchlilik va past kechikish darajasi bilan
        internet ulanishini yangi bosqichga olib chiqdi. U avtomatlashtirilgan
        transport tizimlari, telemeditsina va virtual haqiqat kabi sohalarda
        inqilob yasaydi. 5G yordamida qurilmalar bir-biri bilan yanada tez va
        samarali aloqada bo'ladi.
      </motion.p>
    </section>
  );
}
