import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ArticleSection() {
  const cards = [
    {
      title: "Future Technologies",
      text: "Latest articles on artificial intelligence and robotics.",
      path: "/current-technologies", // Route qo‘shamiz
    },
    {
      title: "Medical Revolution",
      text: "Articles on new technologies and innovations in medicine.",
      path: "medical-revolution"
    },
    {
      title: "Future Jobs",
      text: "Articles on the most in-demand professions and their development in 2025 and in the future.",
      path: "2025-year-jobs"
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Eng So'nggi Maqolalar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -35, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border-2 border-purple-500 shadow-purple-500/40 shadow-xl hover:shadow-purple-500/60 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                {card.title}
              </h3>
              <p className="text-gray-300 mb-6">{card.text}</p>
              {card.path ? (
                <Link to={card.path}>
                  <button className="px-5 py-2 rounded-lg font-medium bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-orange-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/30">
                    Read More
                  </button>
                </Link>
              ) : (
                <button className="px-5 py-2 rounded-lg font-medium bg-gradient-to-r from-pink-500 to-red-500 text-white cursor-not-allowed opacity-50">
                  Coming Soon
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
