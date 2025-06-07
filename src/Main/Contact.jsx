import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-[#101c1c] via-[#1a2a2a] to-[#0f2027] text-white py-20 overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-green-400 via-green-600 to-blue-700 opacity-30 blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-blue-500 via-green-400 to-green-700 opacity-20 blur-2xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent mb-10 drop-shadow-lg"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          className="bg-black/70 rounded-2xl shadow-2xl p-8 flex flex-col gap-8 backdrop-blur-md border border-green-700/30"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Name input */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="flex flex-col"
          >
            <label
              htmlFor="name"
              className="text-lg font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 bg-gradient-to-r from-[#1a2a2a] to-[#101c1c] border border-green-500/30 rounded-lg outline-none focus:ring-2 focus:ring-green-400 text-white placeholder-gray-400 transition-all duration-300 hover:border-green-400"
            />
          </motion.div>

          {/* Email input */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="flex flex-col"
          >
            <label
              htmlFor="email"
              className="text-lg font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full p-4 bg-gradient-to-r from-[#1a2a2a] to-[#101c1c] border border-green-500/30 rounded-lg outline-none focus:ring-2 focus:ring-green-400 text-white placeholder-gray-400 transition-all duration-300 hover:border-green-400"
            />
          </motion.div>

          {/* Submit button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="w-full"
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.07,
                background:
                  "linear-gradient(90deg,#22d3ee,#22c55e,#3b82f6,#22d3ee)",
                boxShadow: "0 0 32px 0 rgba(34,197,94,0.25)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full py-4 bg-gradient-to-r from-green-400 via-blue-400 to-green-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out tracking-wide text-lg"
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
