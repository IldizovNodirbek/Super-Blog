import { motion } from "framer-motion";
import FiveGImage from "../Images/FiveG-hero.png";

export default function FiveG() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 px-6 md:px-20 overflow-hidden gap-20">
      {/* Chap taraf: Matnlar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        {/* Title */}
        <h2
          className="text-[42px] sm:text-[58px] md:text-[64px] lg:text-[72px] font-extrabold font-[Orbitron]
          bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
          text-transparent bg-clip-text drop-shadow-[0_0_24px_#00fff7]"
        >
          5G Network
        </h2>

        {/* Paragraph */}
        <p className="mt-12 text-lg text-gray-300 leading-relaxed border-l-4 border-dashed border-cyan-400 pl-4 max-w-md">
          5G is the fifth generation of mobile communication technology, which
          is the Internet brings its speed to an unprecedented level. This
          technology not just for fast downloads or video streams, but industry
          robots, medical operations, autonomous vehicles, virtual is the basic
          infrastructure for both reality and IoT devices.
          <br />
          <br />
          5G connects users to the network in seconds, the lag is almost
          imperceptible. Remotely with millisecond responses standing operations
          are also performed. This network is densely populated works stably
          even in residential areas and thousands of devices can connect at the
          same time.
        </p>
      </motion.div>

      {/* O‘ng taraf: Rasm */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{
          rotate: [0, 1, -1, 1, 0],
          scale: 1.03,
          boxShadow: "0 0 40px #00fff7",
        }}
        className="rounded-2xl shadow-2xl max-w-lg overflow-hidden"
      >
        <img
          src={FiveGImage}
          alt="5G Network"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
