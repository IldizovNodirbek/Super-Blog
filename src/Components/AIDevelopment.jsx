import { sections } from "../Data/SectionData";
import { motion } from "framer-motion";

export default function AIDevelopment() {
  const aiSection = sections.find((section) => section.id === "ai");

  return (
    <section className="py-20 px-4 sm:px-6 bg-transparent min-h-screen flex flex-col items-center">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        <img
          src={aiSection.image}
          alt={aiSection.title}
          className="rounded-[20px] w-full shadow-[0_0_30px_#00fff7] border-4 border-cyan-400/50 object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 sm:mt-10 text-[36px] sm:text-[48px] md:text-[58px] font-extrabold text-center font-[Orbitron]
        bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
        text-transparent bg-clip-text drop-shadow-[0_0_20px_#00fff7]"
      >
        {aiSection.title}
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 font-['Inter'] max-w-5xl text-justify"
      >
        {aiSection.description}
        <br />
        <br />
        Sun'iy intellekt (AI) — bu zamonaviy texnologiyalarning eng muhim
        yo‘nalishlaridan biri bo‘lib, u mashinalarga, tizimlarga va dasturlarga
        inson aqliga xos xatti-harakatlarni o‘rgatishga xizmat qiladi. AI
        bugungi kunda tibbiyot, avtomobilsozlik, moliya, ta’lim va ko‘plab
        boshqa sohalarda keng qo‘llanmoqda.
        <br />
        <br />
        AI yordamida avtonom avtomobillar yo‘l harakatini mustaqil boshqaradi,
        tibbiy dasturlar kasalliklarni aniqlaydi va moliyaviy tizimlar
        tavsiyalar beradi.
        <br />
        <br />
        Kelajakda AI texnologiyalari yanada rivojlanib, inson hayotini tubdan
        o‘zgartirishi kutilmoqda — nafaqat oddiy ishlarni avtomatlashtirish,
        balki mustaqil fikrlaydigan tizimlar, kuchli sun'iy ong loyihalari ham
        yaratilmoqda.
      </motion.p>
    </section>
  );
}
