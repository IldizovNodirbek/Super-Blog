import { motion } from "framer-motion";
import StemCell from "../Images/regenerative-hero-1.png";
import Bioprint from "../Images/regenerative-hero-2.png";
import Tissue from "../Images/regenerative-hero-3.png";

export default function RegenerativeMedicine() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e3f2fd] via-white to-[#bbdefb] text-gray-800 px-6 py-12">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#1e88e5] drop-shadow-[0_2px_5px_#90caf9] mb-12"
      >
        Regenerative Medicine
      </motion.h1>

      {/* Hero Images Section with whileTap and hawrang shadow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {[
          { src: StemCell, title: "Stem Cell Therapy" },
          { src: Tissue, title: "Tissue Engineering" },
          { src: Bioprint, title: "3D Bioprinting" },
        ].map(({ src, title }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileTap={{
              scale: 0.96,
              boxShadow: "0 0 32px 0 #1976d2, 0 0 0 4px #90caf9",
            }}
            className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 border-t-4 border-[#64b5f6] transition-all duration-200"
          >
            <img
              src={src}
              alt={title}
              className="rounded-xl w-full h-60 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
            />
            <h2 className="text-center mt-4 text-xl font-bold text-[#1976d2]">
              {title}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Informative Animated Paragraphs with neon airy gradient shadow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/90 backdrop-blur-md p-4 sm:p-8 rounded-xl shadow-xl border-l-4 border-[#66bb6a] space-y-4 sm:space-y-6 overflow-hidden"
      >
        {/* Neon airy linear-gradient shadow */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(100deg,rgba(102,187,106,0.18) 0%,rgba(66,165,245,0.18) 100%)",
            filter: "blur(18px)",
            opacity: 0.7,
          }}
        />
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#388e3c] drop-shadow-[0_0_5px_#a5d6a7]">
            Life-changing healing techniques
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed break-words">
            Regenerative medicine is the restoration of the human body itself
            cells, tissues and organs using the ability is an advanced medical
            approach focused on re-creation.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Stem Cell Therapy:</strong> External or internal factors
              renewal of damaged tissues.
            </li>
            <li>
              <strong>Tissue Engineering:</strong> Grown in the laboratory
              transplanting artificial tissues to the patient.
            </li>
            <li>
              <strong>3D Bioprinting:</strong> To the patient through a special
              bioprinter creating a suitable tissue structure.
            </li>
          </ul>
          <div className="bg-[#e8f5e9] p-3 sm:p-4 rounded-lg border-l-4 border-[#66bb6a] text-[#2e7d32] font-semibold text-sm sm:text-base">
            The future of medicine is to create a body that can heal itself
            starts with the opportunity.
          </div>
        </div>
      </motion.div>

      {/* Inspirational Paragraphs with neon airy gradient shadow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/90 backdrop-blur-md p-4 sm:p-8 rounded-xl shadow-xl border-l-4 border-[#42a5f5] space-y-4 sm:space-y-6 mt-10 sm:mt-16 overflow-hidden"
      >
        {/* Neon airy linear-gradient shadow */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(100deg,rgba(66,165,245,0.18) 0%,rgba(144,202,249,0.18) 100%)",
            filter: "blur(18px)",
            opacity: 0.7,
          }}
        />
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1976d2] drop-shadow-[0_0_5px_#90caf9]">
            Rebuilding Hope: Every Cell Matters
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed break-words">
            Each cell is the beginning of vital energy in our body point.
            Regenerative medicine reactivates these cells through injury,
            disease or aging aimed at restoring opportunities.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-[#1976d2] drop-shadow-[0_0_5px_#90caf9]">
            Harmony of technology and nature
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed break-words">
            Medical innovations, especially technologies such as 3D Bioprinting,
            to the patient's body, perfectly repeating the patterns of
            biological structures creates tailored treatment options. This is
            technology and it is the most perfect example of nature
            complementing each other.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-[#1976d2] drop-shadow-[0_0_5px_#90caf9]">
            An individual solution for each patient
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed break-words">
            Regenerative medicine is not generic, but individual genetics offers
            a solution based on the structure. This approach is for each patient
            individual attention and high results in health restoration allows
            to achieve.
          </p>

          <div className="bg-[#e3f2fd] p-3 sm:p-4 rounded-lg border-l-4 border-[#42a5f5] text-[#1565c0] font-semibold text-sm sm:text-base">
            Future-oriented medicine is not only about treating the disease, but
            also about it means prevention, recovery and building a stronger
            body.
          </div>
        </div>
      </motion.div>

      {/* Technology Details Section (unchanged) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {/* Stem Cell Therapy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 border-t-4 border-[#64b5f6]"
        >
          <h2 className="text-2xl font-bold text-[#1976d2] drop-shadow-[0_2px_4px_#90caf9] mb-4">
            Stem Cell Therapy
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Stem cells are the building blocks of life. This therapy uses the
            body’s natural healing capabilities by regenerating damaged tissues
            and organs through the use of pluripotent or adult stem cells. It
            has shown promising results in treating spinal cord injuries,
            diabetes, and even heart failure.
          </p>
          <div className="bg-[#e3f2fd] mt-4 p-3 rounded-lg border-l-4 border-[#42a5f5] text-[#1565c0] font-semibold">
            Healing from within — a revolution powered by your own cells.
          </div>
        </motion.div>

        {/* Tissue Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 border-t-4 border-[#64b5f6]"
        >
          <h2 className="text-2xl font-bold text-[#1976d2] drop-shadow-[0_2px_4px_#90caf9] mb-4">
            Tissue Engineering
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            By combining cells, engineering methods, and biochemical cues,
            tissue engineering creates lab-grown organs or tissues that can
            replace or support damaged biological structures. It brings hope to
            patients waiting for organ transplants or suffering from chronic
            tissue loss.
          </p>
          <div className="bg-[#e3f2fd] mt-4 p-3 rounded-lg border-l-4 border-[#42a5f5] text-[#1565c0] font-semibold">
            Lab-grown life — precision meets biology for personalized healing.
          </div>
        </motion.div>

        {/* 3D Bioprinting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 border-t-4 border-[#64b5f6]"
        >
          <h2 className="text-2xl font-bold text-[#1976d2] drop-shadow-[0_2px_4px_#90caf9] mb-4">
            3D Bioprinting
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Imagine printing living tissues layer by layer using a specialized
            bioprinter. 3D bioprinting allows for the creation of
            patient-specific tissues, potentially eliminating rejection risks
            and accelerating the healing process. This technology is shaping the
            future of customized healthcare.
          </p>
          <div className="bg-[#e3f2fd] mt-4 p-3 rounded-lg border-l-4 border-[#42a5f5] text-[#1565c0] font-semibold">
            Printed to heal — shaping tissues as unique as you.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
