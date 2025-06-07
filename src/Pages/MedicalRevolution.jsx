import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GeneticEngineering from "../Medical/GeneticEngineering";
import RoboticSurgery from "../Medical/RoboticSurgery";
import RegenerativeMedicine from "../Medical/RegenerativeMedicine";
import AIDiagnostic from "../Medical/AIDiagnostic";
import Telemedicine from "../Medical/Telemedicine";

const sections = [
  "Genetic Engineering",
  "Robotic Surgery",
  "Regenerative Medicine",
  "AI Diagnostic",
  "Telemedicine",
];

export default function MedicalRevolution() {
  const [selected, setSelected] = useState("Genetic Engineering");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // Ekran o‘lchamini kuzatamiz (responsivlik uchun)
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSectionContent = () => {
    switch (selected) {
      case "Genetic Engineering":
        return <GeneticEngineering />;
      case "Robotic Surgery":
        return <RoboticSurgery />;
      case "Regenerative Medicine":
        return <RegenerativeMedicine />;
      case "AI Diagnostic":
        return <AIDiagnostic />;
      case "Telemedicine":
        return <Telemedicine />;
      default:
        return <GeneticEngineering />;
    }
  };

  const isDesktop = screenWidth >= 768;

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#e3f2fd] via-[#ffffff] to-[#bbdefb] text-gray-800 font-semibold relative">
      {/* Hamburger Button (only mobile) */}
      {!isDesktop && (
        <div className="fixed top-4 right-4 z-40">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-10 h-10 flex flex-col justify-center items-center group"
          >
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              className="block w-8 h-1 bg-[#64b5f6] rounded-md mb-1 transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="block w-8 h-1 bg-[#64b5f6] rounded-md mb-1 transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className="block w-8 h-1 bg-[#64b5f6] rounded-md transition-all duration-300"
            />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {(isMenuOpen || isDesktop) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-72 p-6 bg-[#e3f2fd]/90 backdrop-blur-md shadow-2xl border-r-4 border-[#64b5f6] fixed top-0 left-0 h-full overflow-y-auto z-30"
          >
            <h2 className="text-2xl font-bold mb-10 text-[#1976d2] tracking-wide text-center drop-shadow-[0_0_8px_#90caf9]">
              Sections
            </h2>
            <ul className="space-y-6">
              {sections.map((section) => (
                <li
                  key={section}
                  onClick={() => {
                    setSelected(section);
                    if (!isDesktop) setIsMenuOpen(false);
                  }}
                  className={`cursor-pointer px-6 py-3 rounded-lg text-lg transition-all duration-300 
                    ${
                      selected === section
                        ? "bg-[#42a5f5] text-white font-bold shadow-md"
                        : "text-[#1976d2] hover:bg-[#bbdefb] hover:scale-105"
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
      <main className={`flex-1 p-10 space-y-10 ${isDesktop ? "md:ml-72" : ""}`}>
        {renderSectionContent()}
      </main>
    </div>
  );
}
