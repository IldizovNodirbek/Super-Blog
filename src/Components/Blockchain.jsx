import { motion } from "framer-motion";
import BlockchainImage from "../Images/Blockchain-hero.png"; // Blockchain uchun rasm yo'li

export default function Blockchain() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-12 md:space-y-0 md:space-x-12 py-20 overflow-hidden">
      {/* Chap taraf: Textlar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center md:items-start space-y-6 max-w-xl px-4"
      >
        <h2
          className="mt-8 sm:mt-10 text-[36px] sm:text-[48px] md:text-[58px] font-extrabold text-center font-[Orbitron]
        bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
        text-transparent bg-clip-text drop-shadow-[0_0_20px_#00fff7]"
        >
          Blockchain Technology
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Blockchain - bu markazlashmagan va xavfsiz ma'lumotlar bazasi
          texnologiyasidir. U tranzaksiyalarni shaffof va o'zgarmas tarzda
          saqlaydi, moliya, sog'liqni saqlash, yetkazib berish zanjirlari va
          ko'plab sohalarda inqilob yaratmoqda.
        </p>
      </motion.div>

      {/* O'ng taraf: Rasm */}
      <motion.img
        src={BlockchainImage} // Blockchain uchun rasm yo'li
        alt="Blockchain"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="rounded-2xl shadow-2xl w-full max-w-lg h-auto object-contain"
      />
    </section>
  );
}
