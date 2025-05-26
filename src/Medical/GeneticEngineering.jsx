import { motion } from "framer-motion";
import MedicalGroup from "../Images/Medical-group-hero.png"; // Genetik muhandislik rasmi

export default function GeneticEngineering() {
  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { y: -50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 25px rgba(33, 150, 243, 0.6)",
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0, filter: "blur(5px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1, type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center py-16 px-4 sm:px-8 bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen relative overflow-hidden"
    >
      {/* Gradient fon animatsiyasi */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{
          opacity: 0.3,
          scale: 1,
          background: [
            "radial-gradient(circle, rgba(33, 150, 243, 0.3) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(100, 181, 246, 0.3) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(33, 150, 243, 0.3) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Hero Image */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto mb-12 z-10"
        variants={imageVariants}
        whileHover="hover"
      >
        <motion.img
          src={MedicalGroup}
          alt="Genetic Engineering"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
          style={{
            clipPath:
              "polygon(0% 5%, 5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%)",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(33, 150, 243, 0.4)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "tween",
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="flex flex-col items-center w-full max-w-4xl mx-auto space-y-8 z-10"
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h2
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 glow-text text-center"
        >
          Genetic Engineering
        </motion.h2>

        {/* Paragraphs */}
        <motion.div
          className="flex flex-col space-y-6 text-center px-4 sm:px-0"
          variants={containerVariants}
        >
          <motion.p
            variants={textVariants}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Genetic Engineering — bu organizmlarning genetik tuzilishini
            o‘zgartirish orqali yangi imkoniyatlar yaratish texnologiyasidir. Bu
            soha 20-asrning ikkinchi yarmida rivojlanishni boshlagan bo‘lib,
            dastlab bakteriyalarni o‘zgartirish orqali insulin ishlab chiqarish
            kabi muhim yutuqlarga erishdi.
          </motion.p>
          <motion.p
            variants={textVariants}
            transition={{ delay: 0.4 }}
            className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Tibbiyotda genetic engineering kasalliklarni davolashda inqilob
            keltirib, masalan, genetik kasalliklarni (sistik fibroz yoki
            hemofiliya) bartaraf etish uchun CRISPR-Cas9 kabi vositalar
            ishlatilmoqda. Bu texnologiya shuningdek, qon tomirlari va organ
            transplantatsiyasini soddalashtirishga yordam bermoqda.
          </motion.p>
          <motion.p
            variants={textVariants}
            transition={{ delay: 0.5 }}
            className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Biotexnologiyada esa genetic engineering o‘simliklarning
            qurg‘oqchilikka chidamliligini oshirish va mahsulot unumini
            ko‘tarish uchun qo‘llanilmoqda. Masalan, GM (genetik modifikatsiya
            qilingan) ekinlar dunyoda oziq-ovqat inqilobiga hissa qo‘shdi.
          </motion.p>
          <motion.p
            variants={textVariants}
            transition={{ delay: 0.6 }}
            className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Kelajakda genetic engineering inson umrini uzaytirish va individual
            dori-darmonlarni ishlab chiqarish kabi sohalarda katta
            o‘zgarishlarni keltirib chiqarishi kutilmoqda. Biroq, bu
            texnologiyaning axloqiy jihatlari ham muhokama qilinmoqda, masalan,
            “designer babies” masalasi.
          </motion.p>
        </motion.div>
      </motion.div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 8px rgba(33, 150, 243, 0.9),
            0 0 15px rgba(33, 150, 243, 0.7),
            0 0 25px rgba(33, 150, 243, 0.5);
        }
      `}</style>
    </motion.section>
  );
}
