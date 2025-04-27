import { useState } from "react";
import { motion } from "framer-motion";

// Bo'limlar Componentlarini import qilamiz
import AIDevelopment from "../Components/AIDevelopment";
import KvantComputers from "../Components/KvantComputers";
// import FiveG from "../Components/FiveG";
// import Blockchain from "../Components/Blockchain";
// import IOT from "../Components/IOT";
// import Blockchain from "../Components/Blockchain";

const sections = [
  "AI rivoji",
  "Kvant kompyuterlar",
  "IOT",
  "5G tarmoqlar",
  "Blockchain",
];

export default function CurrentTechnologies() {
  const [selected, setSelected] = useState("AI rivoji");

  // Selected bo'limga qarab qaysi component ko'rsatilishini aniqlaymiz
  const renderSectionContent = () => {
    switch (selected) {
      case "AI Development":
        return <AIDevelopment />;
      case "Kvant computers":
        return <KvantComputers />;
      case "IOT":
        return <IOT />;
      case "5G nrtworks":
        return <FiveG />;
      case "Blockchain":
        return <Blockchain />;
      default:
        return <AIDevelopment />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0e153a] via-[#1c1f4a] to-[#020314] text-white font-orbitron">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r border-cyan-400 bg-[#0e153a] shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-cyan-400 tracking-widest">
          Bo'limlar
        </h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => setSelected(section)}
              className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 hover:bg-cyan-800 hover:text-white ${
                selected === section
                  ? "bg-cyan-600 text-black font-bold"
                  : "text-cyan-300"
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-300 mb-4 drop-shadow-[0_0_10px_#00fff7]"
        >
          {selected}
        </motion.h1>

        {/* Har bir bo‘limning o'z componenti */}
        {renderSectionContent()}
      </main>
    </div>
  );
}
