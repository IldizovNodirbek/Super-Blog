import { motion } from "framer-motion";

export default function IOT() {
  return (
    <section className="flex flex-col items-center text-center space-y-8">
      <img
        src="/images/iot-devices.jpg"
        alt="Internet of Things"
        className="rounded-2xl shadow-lg w-full max-w-5xl object-cover"
      />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-cyan-400"
      >
        Internet of Things: Hammasi Ulanmoqda
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg text-gray-300 max-w-4xl leading-relaxed"
      >
        IoT yoki "Buyumlar Interneti" texnologiyasi milliardlab qurilmalarning
        internet orqali o'zaro aloqa qilishini ta'minlaydi. Uy jihozlaridan
        tortib sanoat tizimlarigacha hamma narsa o'zaro bog'lanib, hayotimizni
        qulayroq va aqlli qilishga xizmat qiladi. Kelajakda IoT yordamida butun
        shaharlar aqlli boshqariladigan va energiya tejamkor tizimlarga
        aylanadi.
      </motion.p>
    </section>
  );
}
