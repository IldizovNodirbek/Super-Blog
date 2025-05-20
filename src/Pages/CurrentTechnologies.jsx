import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AIDevelopment from "../Components/AIDevelopment"; 
import KvantComputers from "../Components/KvantComputers";
import FiveG from "../Components/FiveG";
import Blockchain from "../Components/Blockchain";
import IOT from "../Components/IOT";

const sections = [
  "AI rivoji",
  "Kvant kompyuterlar",
  "IOT",
  "5G tarmoqlar",
  "Blockchain",
];

export default function CurrentTechnologies() {
  const [selected, setSelected] = useState("AI rivoji");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderSectionContent = () => {
    switch (selected) {
      case "AI rivoji":
        return <AIDevelopment />;
      case "Kvant kompyuterlar":
        return <KvantComputers />;
      case "IOT":
        return <IOT />;
      case "5G tarmoqlar":
        return <FiveG />;
      case "Blockchain":
        return <Blockchain />;
      default:
        return <AIDevelopment />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0e153a] via-[#1c1f4a] to-[#020314] text-white font-orbitron relative">
      {/* Hamburger Button */}
      <div className="md:hidden fixed top-4 right-4 z-40">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-10 h-10 flex flex-col justify-center items-center group"
        >
          {/* Top line */}
          <motion.span
            initial={false}
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
            }}
            className="block w-8 h-1 bg-cyan-400 rounded-md mb-1 origin-center transition-all duration-300"
          />
          {/* Middle line */}
          <motion.span
            initial={false}
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            className="block w-8 h-1 bg-cyan-400 rounded-md mb-1 transition-all duration-300"
          />
          {/* Bottom line */}
          <motion.span
            initial={false}
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0,
            }}
            className="block w-8 h-1 bg-cyan-400 rounded-md transition-all duration-300"
          />
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isMenuOpen || window.innerWidth >= 768) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-72 p-6 bg-[#0e153a]/80 backdrop-blur-md shadow-2xl border-r-4 border-cyan-500 
            fixed top-0 left-0 h-full overflow-y-auto z-30"
          >
            <h2 className="text-2xl font-bold mb-10 text-cyan-400 tracking-wider text-center drop-shadow-[0_0_10px_#00fff7]">
              Bo'limlar
            </h2>
            <ul className="space-y-6">
              {sections.map((section) => (
                <li
                  key={section}
                  onClick={() => {
                    setSelected(section);
                    if (window.innerWidth < 768) setIsMenuOpen(false);
                  }}
                  className={`cursor-pointer px-6 py-3 rounded-lg text-lg transition-all duration-300
                    ${
                      selected === section
                        ? "bg-cyan-600 text-black font-extrabold shadow-[0_0_20px_#00fff7]"
                        : "text-cyan-300 hover:bg-cyan-700/30 hover:scale-105"
                    }`}
                >
                  {section}
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-10 space-y-10">
        {renderSectionContent()}
      </main>
    </div>
  );
}
