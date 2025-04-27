import { motion } from "framer-motion";

export default function Blockchain() {
  return (
    <section className="flex flex-col items-center text-center space-y-8 py-20 bg-gradient-to-b from-black via-gray-800 to-black">
      <motion.img
        src="/images/blockchain-network.jpg"
        alt="Blockchain"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl md:text-5xl font-bold text-yellow-400"
      >
        Blokcheyn Texnologiyasi
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-lg text-gray-300 max-w-4xl leading-relaxed"
      >
        Blokcheyn — bu markazlashtirilmagan, shaffof va xavfsiz ma'lumotlar
        bazasidir. U tranzaksiyalarni ishonchli saqlash, smart shartnomalarni
        yaratish va yangi moliyaviy ekotizimlarni rivojlantirish uchun
        ishlatiladi.
      </motion.p>
    </section>
  );
}
