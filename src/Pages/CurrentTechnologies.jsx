import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AIDevelopment = lazy(() => import("../Components/AIDevelopment"));
const KvantComputers = lazy(() => import("../Components/KvantComputers"));
const FiveG = lazy(() => import("../Components/FiveG"));
const Blockchain = lazy(() => import("../Components/Blockchain"));
const IOT = lazy(() => import("../Components/IOT"));

const sections = [
  "AI development",
  "Quantum computers",
  "IOT",
  "5G networks",
  "Blockchain",
];

export default function CurrentTechnologies() {
  const [selected, setSelected] = useState("AI development");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSectionContent = () => {
    switch (selected) {
      case "AI development":
        return <AIDevelopment />;
      case "Quantum computers":
        return <KvantComputers />;
      case "IOT":
        return <IOT />;
      case "5G networks":
        return <FiveG />;
      case "Blockchain":
        return <Blockchain />;
      default:
        return <AIDevelopment />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0e153a] via-[#1c1f4a] to-[#020314] text-white font-orbitron relative">
      {/* Hamburger */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-40">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-10 h-10 flex flex-col justify-center items-center group"
          >
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-8 h-1 bg-cyan-400 rounded-md mb-1"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="block w-8 h-1 bg-cyan-400 rounded-md mb-1"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-8 h-1 bg-cyan-400 rounded-md"
            />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {(!isMobile || isMenuOpen) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-72 p-6 bg-[#0e153a]/80 backdrop-blur-md shadow-2xl border-r-4 border-cyan-500 fixed top-0 left-0 h-full overflow-y-auto z-30"
          >
            <h2 className="text-2xl font-bold mb-10 text-cyan-400 tracking-wider text-center drop-shadow-[0_0_10px_#00fff7]">
              Sections
            </h2>
            <ul className="space-y-6">
              {sections.map((section) => (
                <li
                  key={section}
                  onClick={() => {
                    setSelected(section);
                    if (isMobile) setIsMenuOpen(false);
                  }}
                  className={`cursor-pointer px-6 py-3 rounded-lg text-lg transition-all duration-300 ${
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
        <Suspense fallback={<div className="text-cyan-300">Loading...</div>}>
          {renderSectionContent()}
        </Suspense>
      </main>
    </div>
  );
}
