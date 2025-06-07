import heroImg1 from "../Images/AI-human-hero.png";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 120 },
  },
};

const paragraphs = [
  {
    title: "AI in Everyday Life",
    text: "Artificial Intelligence is seamlessly integrating into our daily routines, from smart assistants to personalized recommendations. Its presence is making technology more intuitive and accessible for everyone.",
  },
  {
    title: "Transforming Industries",
    text: "AI is revolutionizing industries like healthcare, finance, and transportation. With advanced data analysis and automation, businesses can make smarter decisions and deliver better services.",
  },
  {
    title: "Ethics & The Future",
    text: "As AI evolves, ethical considerations become crucial. Responsible development ensures AI benefits society, maintains transparency, and respects privacy and human values.",
  },
];

export default function AIDevelopment() {
  const title = "AI Development";

  return (
    <section className="relative py-20 px-2 sm:px-6 min-h-screen flex flex-col items-center">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-5xl"
      >
        <img
          src={heroImg1}
          alt={title}
          className="rounded-[20px] w-full shadow-[0_0_30px_#00fff7] border-4 border-cyan-400/50 object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative mt-10 text-[32px] sm:text-[44px] md:text-[54px] font-extrabold text-center font-[Orbitron]
          bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
          text-transparent bg-clip-text drop-shadow-[0_0_20px_#00fff7]"
      >
        <span className="absolute top-1/2 left-1/2 w-16 h-16 bg-cyan-400 blur-3xl opacity-30 rounded-full animate-ping -z-10"></span>
        {title}
      </motion.h2>

      {/* Paragraph Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delayChildren: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 max-w-5xl w-full flex flex-col gap-8 px-2 sm:px-0"
      >
        {paragraphs.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            whileHover={{ scale: 1.025, boxShadow: "0 0 32px #22d3ee55" }}
            whileTap={{ scale: 0.97, boxShadow: "0 0 40px #06b6d455" }}
            className="relative bg-[#101c24]/80 border-2 border-transparent rounded-2xl p-6 sm:p-8 shadow-lg transition-all
              before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
              before:bg-gradient-to-r before:from-cyan-400 before:via-blue-500 before:to-cyan-400 before:opacity-60
              before:blur-[6px] before:z-0
              after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none
              after:border-2 after:border-cyan-400 after:opacity-60 after:z-10"
            style={{
              boxShadow: "0 0 24px 0 #22d3ee33",
              overflow: "hidden",
            }}
          >
            <div className="relative z-20">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-300">
                {item.title}
              </h3>
              <p className="text-white/90 font-['Inter'] text-base sm:text-lg leading-7 sm:leading-8 text-left sm:text-justify">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
