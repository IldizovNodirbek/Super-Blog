import { motion } from "framer-motion";
import BlockchainImage from "../Images/Blockchain-hero.png";

export default function Blockchain() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 px-6 md:px-20 overflow-hidden gap-20">
      {/* Chap taraf: Matnlar */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        {/* Title */}
        <h2
          className="text-[42px] sm:text-[58px] md:text-[64px] lg:text-[72px] font-extrabold font-[Orbitron]
          bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
          text-transparent bg-clip-text drop-shadow-[0_0_24px_#00fff7]"
        >
          Blockchain Technology
        </h2>

        {/* Paragraph */}
        <p className="mt-12 text-lg text-gray-300 leading-relaxed border-l-4 border-dashed border-indigo-500 pl-4 max-w-md">
          Blockchain is decentralized, secure and immutable technology for
          keeping in shape. It is mainly cryptocurrencies (e.g. Bitcoin) is
          known for its scope much wider than that.
          <br />
          <br />
          Transactions through Blockchain are real-time, without intermediaries
          (for example, without banks) is implemented. Each record as a "block".
          is saved and it is almost impossible to change it later. This
          technology increases transparency in the financial sector, supply
          helps to monitor chains, voting systems protects and safely stores
          patient information in medicine is used.
        </p>
      </motion.div>

      {/* O‘ng taraf: Rasm */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.05,
          rotate: [0, 1, -1, 1, 0],
          boxShadow: "0 0 40px #00fff7",
        }}
        className="rounded-2xl shadow-2xl max-w-lg overflow-hidden"
      >
        <img
          src={BlockchainImage}
          alt="Blockchain"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
