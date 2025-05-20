import { motion } from "framer-motion";
import IOTImage from "../Images/IOT-hero.png"; // IOT qurilmalari rasm yo'li

export default function IOT() {
  return (
    <section className="flex flex-col items-center text-center space-y-8 py-20 overflow-hidden">
      <motion.img
        src={IOTImage}
        alt="Internet of Things"
        initial={{ scale: 0.4, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="rounded-2xl shadow-2xl w-full max-w-4xl h-auto object-contain"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 sm:mt-10 text-[36px] sm:text-[48px] md:text-[58px] font-extrabold text-center font-[Orbitron]
        bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
        text-transparent bg-clip-text drop-shadow-[0_0_20px_#00fff7]"
      >
        Internet of Things
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-lg text-gray-300 max-w-3xl leading-relaxed px-4 md:px-0"
      >
        Internet of Things — bu o‘zaro bog‘langan qurilmalar tarmog‘i. Ular
        ma’lumotlarni yig‘adi, ulashadi va real vaqt rejimida ishlaydi, natijada
        sanoat, sog‘liqni saqlash, transport va boshqa sohalarda samaradorlikni
        oshiradi.
      </motion.p>
    </section>
  );
}
