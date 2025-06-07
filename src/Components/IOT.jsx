import { motion } from "framer-motion";
import IOTImage from "../Images/IOT-hero.png";

export default function IOT() {
  return (
    <section className="flex flex-col items-center text-center md:text-left space-y-12 py-20 overflow-hidden">
      {/* Rasm animatsiyasi */}
      <motion.div
        whileHover={{
          rotate: [0, 2, -2, 2, -2, 0],
          scale: 1.03,
          boxShadow: "0 0 30px #00fff7",
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
      >
        <img
          src={IOTImage}
          alt="Internet of Things"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Sarlavha */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-[36px] sm:text-[48px] md:text-[58px] font-extrabold font-[Orbitron]
        bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
        text-transparent bg-clip-text drop-shadow-[0_0_20px_#00fff7]"
      >
        Internet of Things
      </motion.h2>

      {/* Paragraf qismi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-3xl px-4 md:px-0"
      >
        <div className="border-l-4 border-dashed border-cyan-400 pl-6 text-gray-300 text-lg leading-relaxed">
          Internet of Things (IoT) means that physical devices connect to each
          other via the Internet, exchange information and operate
          automatically. Smart watches, home appliances, cars, sensors are all
          part of the IoT system. With the help of IoT, we automate our way of
          life: for example, thermostats control the temperature of the house
          independently, a smart refrigerator indicates when products have run
          out. And in the industrial sector, IoT optimizes production, detects
          faults and improves safety. With IoT, the world is becoming
          increasingly "smart" — everything is connected and creating a digital
          ecosystem.
        </div>
      </motion.div>
    </section>
  );
}
