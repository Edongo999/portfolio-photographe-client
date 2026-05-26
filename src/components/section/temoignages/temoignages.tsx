import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { temoignages } from "@/components/section/temoignages/temoignagesData"; // ✅ données séparées

const Temoignages: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % temoignages.length);
      }, 6000);
    }
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % temoignages.length);
  const prev = () => setIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);

  return (
    <section className="py-12 bg-gray-900" id="temoignages">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10 px-3 py-1 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-violet-500 animate-gradient-x">
          Ce que disent mes clients
        </h2>

        <div
          className="relative flex items-center justify-center"
          onTouchStart={() => {
            stopAutoPlay();
            setShowArrows(true);
            setShowHint(false);
          }}
          onTouchEnd={() => {
            setTimeout(() => setShowArrows(false), 3000);
            startAutoPlay();
          }}
          // ✅ Ajout pour desktop
          onMouseEnter={() => {
            stopAutoPlay();
            setShowArrows(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => setShowArrows(false), 3000);
            startAutoPlay();
          }}
        >
          {/* Flèche gauche */}
          <AnimatePresence>
            {(showArrows || window.innerWidth >= 768) && (
              <motion.button
                onClick={prev}
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-2 sm:left-[-70px] z-10 p-3 rounded-full text-white shadow-lg 
                           bg-gradient-to-r from-orange-500 to-red-500 
                           hover:from-orange-600 hover:to-red-600 
                           focus:ring-2 focus:ring-orange-400 transition"
              >
                <ArrowLeft size={28} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Carte témoignage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={temoignages[index].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-gray-800 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center border border-gray-700 max-w-lg"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 w-42 h-42 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 blur-xl animate-pulse"></div>
                <div className="relative w-42 h-42 rounded-full border-4 border-orange-500 overflow-hidden shadow-lg">
                  <img
                    src={temoignages[index].image}
                    alt={temoignages[index].nom}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="italic text-gray-200 mb-6 text-lg leading-relaxed">
                “{temoignages[index].texte}”
              </p>
              <h3 className="font-semibold text-xl text-white">{temoignages[index].nom}</h3>
              <span className="text-sm text-gray-400">{temoignages[index].type}</span>
            </motion.div>
          </AnimatePresence>

          {/* Flèche droite */}
          <AnimatePresence>
            {(showArrows || window.innerWidth >= 768) && (
              <motion.button
                onClick={next}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute right-2 sm:right-[-70px] z-10 p-3 rounded-full text-white shadow-lg 
                           bg-gradient-to-r from-orange-500 to-red-500 
                           hover:from-orange-600 hover:to-red-600 
                           focus:ring-2 focus:ring-orange-400 transition"
              >
                <ArrowRight size={28} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Indicateurs + Hint */}
        <div className="flex flex-col items-center mt-6 space-y-2">
          <div className="flex justify-center space-x-3">
            {temoignages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-orange-500 scale-110" : "bg-gray-500 hover:bg-orange-400"
                }`}
              />
            ))}
          </div>

          {showHint && window.innerWidth < 768 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-400 italic mt-2"
            >
              Swipe pour naviguer →
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Temoignages;
