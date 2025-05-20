import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../Images/diagnostic-ai-hero.png";
import diagnostic1 from "../Images/diagnostic-1.png";
import diagnostic2 from "../Images/diagnostic-2.png";
import diagnostic3 from "../Images/diagnostic-3.png";

const cardData = [
  {
    img: diagnostic1,
    title: "Real Vaqtli Tahlil",
    desc: "Ilg‘or monitor va algoritmlar yordamida sog‘liq ma’lumotlarini aniqlik bilan kuzatib boring.",
  },
  {
    img: diagnostic2,
    title: "Ko‘rgazmali Diagnostika",
    desc: "Miya vizualizatsiyasi va rentgen tasvirlari orqali bilim va hamkorlik ruhini his eting.",
  },
  {
    img: diagnostic3,
    title: "Sun’iy Intellekt Diagnostikasi",
    desc: "Avtomatlashtirilgan tahlil va raqamli interfeyslar bilan tezkor va aniqlikni ta’minlang.",
  },
  {
    img: "https://via.placeholder.com/300",
    title: "Kelajak Tibbiyoti",
    desc: "Holografik tizimlar va ilg‘or texnologiyalar bilan sog‘liqni yangi darajada boshqaring.",
  },
];

const AIDiagnostic = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]); // Scrollga qarab scale
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]); // Scrollga qarab opacity

  // Sarlavha uchun animatsiya
  const titleVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  // Paragraf uchun so'z bo'yicha animatsiya
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Hero rasm uchun animatsiya
  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  // Card uchun flip animatsiya
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="w-full min-h-screen text-gray-900 py-16 px-6 lg:px-24 font-lato"
      initial={{ background: "linear-gradient(135deg, #e0f2fe, #bae6fd)" }}
      animate={{ background: "linear-gradient(135deg, #bae6fd, #e0f2fe)" }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-center text-blue-600 overflow-hidden"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          AI Diagnostika
        </motion.h1>

        {/* Paragraf */}
        <motion.p
          className="text-lg md:text-xl text-center text-gray-700 leading-relaxed tracking-wide max-w-4xl mx-auto mb-14"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          {"Diagnostikaning zamonaviy bosqichi sun’iy intellekt yordamida klinik qarorlar qabul qilishni yangi bosqichga olib chiqmoqda. Yuqori aniqlikka ega AI tizimlari real vaqtli tahlillar, chuqur o‘rganilgan neyrotarmoq modellari, va ilg‘or tasvir tahlili orqali kasalliklarni oldindan aniqlash imkonini beradi."
            .split(" ")
            .map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}{" "}
              </motion.span>
            ))}
        </motion.p>

        {/* Hero Rasm */}
        <motion.div
          className="mb-14 shadow-xl rounded-xl overflow-hidden"
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          style={{ scale, opacity }}
          whileHover={{ scale: 1.02, rotate: 1 }}
        >
          <img
            src={heroImage}
            alt="AI Diagnostic Hero"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[300px] rounded-xl overflow-hidden"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
              }}
            >
              {/* Front Side */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </motion.div>

              {/* Back Side */}
              <motion.div
                className="absolute w-full h-full bg-blue-100 flex flex-col justify-center items-center text-center p-4"
                animate={{ rotateY: -180 }}
                whileHover={{ rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="font-bold text-xl mb-2 text-blue-600">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700">{card.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AIDiagnostic;
