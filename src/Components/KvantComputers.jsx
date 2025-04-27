import { motion } from "framer-motion";

export default function KvantComputerlar() {
  return (
    <section className="flex flex-col items-center text-center space-y-8">
      <img
        src="/images/quantum-computers.jpg" // Rasm yo'li (keyin to'g'ri folderga qo'yasan)
        alt="Kvant Kompyuterlar"
        className="rounded-2xl shadow-lg w-full max-w-5xl object-cover"
      />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-cyan-400"
      >
        Kvant Kompyuterlarning Inqilobi
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
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
