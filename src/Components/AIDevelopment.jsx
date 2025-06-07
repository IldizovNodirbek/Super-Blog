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

const paragraphVariant = {
  hidden: { opacity: 0, x: -50, skew: 5 },
  visible: { opacity: 1, x: 0, skew: 0 },
};

export default function AIDevelopment() {
  const title = "AI Development";
  const paragraphs = [
    `Artificial Intelligence (AI) is revolutionizing the way we interact with technology. From automating daily tasks to powering intelligent systems in healthcare, finance, and transportation — AI is becoming the backbone of modern digital transformation.`,
    `Thanks to deep learning and neural networks, machines can now recognize patterns, process natural language, and make decisions with increasing accuracy. AI enhances productivity, reduces human error, and opens the door to new innovations we once only dreamed of.`,
    `As AI continues to evolve, ethical development, transparency, and responsible deployment become critical to ensure a balanced and beneficial impact on society. The future of AI is not only powerful — it's also promising, provided it's guided with care and purpose.`,
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 min-h-screen flex flex-col items-center">
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
        className="relative mt-10 text-[36px] sm:text-[48px] md:text-[58px] font-extrabold text-center font-[Orbitron]
          bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
          text-transparent bg-clip-text drop-shadow-[0_0_20px_#00fff7]"
      >
        <span className="absolute top-1/2 left-1/2 w-16 h-16 bg-cyan-400 blur-3xl opacity-30 rounded-full animate-ping -z-10"></span>
        {title}
      </motion.h2>

      {/* Description Paragraphs */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delayChildren: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 max-w-5xl space-y-6 text-justify"
      >
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            variants={paragraphVariant}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-300 font-['Inter'] text-base sm:text-lg leading-7 sm:leading-8"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
