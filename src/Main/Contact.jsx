import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-8"
        >
          Biz bilan bog‘laning
        </motion.h2>

        <form className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Ism inputi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <label
              htmlFor="name"
              className="block text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
            >
              Ismingiz
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ismingizni kiriting"
              className="w-full p-4 bg-black border-2 border-transparent rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-green-400"
            />
          </motion.div>

          {/* Email inputi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
            >
              Elektron pochta
            </label>
            <input
              id="email"
              type="email"
              placeholder="Pochta manzilingizni kiriting"
              className="w-full p-4 bg-black border-2 border-transparent rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-green-400"
            />
          </motion.div>

          {/* Submit tugmasi */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full mt-4 md:mt-0 md:w-auto"
          >
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Jo‘nating
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
}
