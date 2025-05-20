import { motion } from "framer-motion";
import KvantHero from "../Images/Kvant-techno-hero.png";

export default function KvantComputerlar() {
  return (
    <section className="flex flex-col items-center text-center space-y-8">
      <motion.img
        src={KvantHero} // Hero kvant laptop rasm yo'li
        alt="Kvant Kompyuter"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover"
      />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 sm:mt-10 text-[36px] sm:text-[48px] md:text-[58px] font-extrabold text-center font-[Orbitron]
        bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
        text-transparent bg-clip-text drop-shadow-[0_0_20px_#00fff7]"
      >
        Kvant Kompyuterlarning Inqilobi
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-lg text-gray-300 max-w-4xl leading-relaxed"
      >
        Kvant kompyuterlar, an'anaviy kompyuterlarning imkoniyatlarini keskin
        oshiruvchi inqilobiy qurilmalardir. Ular kvant bitlar, ya'ni kubitlar
        asosida ishlaydi va klassik kompyuterlarga qaraganda ko'plab vazifalarni
        millionlab marta tezroq bajarishi mumkin. Kelajakda ular yangi dori
        vositalarini ishlab chiqish, murakkab molekulalarni modellashtirish va
        hatto yangi materiallar yaratishda asosiy rol o'ynashi kutilmoqda.
      </motion.p>
    </section>
  );
}
