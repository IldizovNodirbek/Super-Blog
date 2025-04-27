import { motion } from "framer-motion";
import IOTImage from "../Images/IOT-hero.png"; // IOT qurilmalari rasm yo'li

export default function IOT() {
  return (
    <section className="flex flex-col items-center text-center space-y-8 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.img
        src={IOTImage} // IOT qurilmalari rasm yo'li
        alt="Internet of Things"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl md:text-5xl font-bold text-green-400"
      >
        Internet of Things (IoT)
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-lg text-gray-300 max-w-4xl leading-relaxed"
      >
        Internet of Things - bu o'zaro bog'langan qurilmalar tarmog'idir. Ular
        ma'lumotlarni to'playdi, ulashadi va real vaqt rejimida ishlaydi,
        natijada sanoat, sog'liqni saqlash, transport va boshqa sohalarda
        samaradorlikni oshiradi.
      </motion.p>
    </section>
  );
}
