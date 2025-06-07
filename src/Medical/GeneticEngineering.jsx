import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import MedicalGroup from "../Images/Medical-group-hero.png";
import { useState } from "react";

const paragraphs = [
  "Genetic engineering is the genetic structure of organisms is a technology for creating new opportunities through change. This the field began to develop in the second half of the 20th century, production of insulin by first changing the bacteria achieved such important achievements.",
  "Genetic engineering in medicine is a revolution in the treatment of diseases causing, for example, genetic diseases (cystic fibrosis or tools such as CRISPR-Cas9 to overcome hemophilia). is being used. This technology is also blood vessels and organs helping to simplify transplantation.",
  "Genetic engineering of plants in biotechnology increasing drought resistance and yield used for lifting. For example, GM (genetic modification made) crops contributed to the food revolution in the world.",
  'In the future, genetic engineering will extend human life and individuality large in areas such as drug production is expected to bring about changes. However, this ethical aspects of technology are also discussed, e.g. the issue of "designer babies".',
];

const faqs = [
  {
    question: "What is genetic engineering?",
    answer:
      "Genetic engineering involves the manipulation of an organism's genes using biotechnology.",
  },
  {
    question: "How is genetic engineering used in medicine?",
    answer:
      "It is used to treat diseases like hemophilia and cystic fibrosis and assist in organ transplantation.",
  },
  {
    question: "Are genetically modified crops safe?",
    answer:
      "Scientific consensus holds that GMO crops are safe for human consumption when properly regulated.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function GeneticEngineering() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <motion.section
      className="flex flex-col items-center py-20 px-4 sm:px-8 bg-gradient-to-br from-sky-50 via-white to-sky-100 min-h-screen relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background & Image */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          opacity: 0.25,
          scale: 1,
          background:
            "radial-gradient(circle, rgba(33,150,243,0.22) 0%, transparent 70%)",
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="relative w-full max-w-5xl mx-auto mb-14 z-10 rounded-3xl overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.02 }}
      >
        <motion.img
          src={MedicalGroup}
          alt="Genetic Engineering"
          className="w-full h-[48vh] sm:h-[60vh] md:h-[70vh] object-cover rounded-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 glow-text text-center mb-10 z-10"
        variants={paragraphVariants}
      >
        Genetic Engineering
      </motion.h2>

      {/* Paragraphs */}
      <motion.div
        className="bg-white/80 border border-blue-200 shadow-xl rounded-2xl p-8 max-w-4xl mx-auto mb-16 backdrop-blur-sm z-10"
        variants={containerVariants}
      >
        {paragraphs.map((text, idx) => (
          <motion.p
            key={idx}
            className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-6"
            variants={paragraphVariants}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="w-full max-w-3xl z-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          Frequently Asked Questions
        </h3>
        <Accordion.Root type="multiple" className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openItems.includes(`item-${i}`);
            return (
              <motion.div
                key={i}
                variants={faqVariants}
                custom={i}
                className="overflow-hidden rounded-xl shadow-md border border-blue-200"
              >
                <Accordion.Item value={`item-${i}`}>
                  <Accordion.Header>
                    <Accordion.Trigger
                      onClick={() => toggleItem(`item-${i}`)}
                      className="flex justify-between items-center w-full px-4 py-3 bg-white text-left font-medium text-blue-900 text-lg hover:bg-blue-50 transition"
                    >
                      {item.question}
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-500" />
                      )}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 py-3 text-gray-700 bg-white">
                    {item.answer}
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            );
          })}
        </Accordion.Root>
      </motion.div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(33,150,243,0.8),
                       0 0 22px rgba(33,150,243,0.6),
                       0 0 32px rgba(33,150,243,0.4);
        }
      `}</style>
    </motion.section>
  );
}
