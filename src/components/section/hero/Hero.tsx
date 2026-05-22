import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

const TikTokIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M200.6 96.1c-6.6 0-13-.9-19-2.6v68.6c0 28.6-23.2 51.8-51.8 51.8-28.6 0-51.8-23.2-51.8-51.8s23.2-51.8 51.8-51.8c6.9 0 13.5 1.4 19.6 3.9V84.9c-6.6-2.1-13.6-3.3-20.8-3.3-44.2 0-80.1 35.9-80.1 80.1s35.9 80.1 80.1 80.1 80.1-35.9 80.1-80.1V96.1z" />
    <path d="M200.6 64.2h-24.9c-1.1 0-2 .9-2 2v0.1c0 1.1.9 2 2 2h14.9v24.9c0 1.1.9 2 2 2h0.1c1.1 0 2-.9 2-2V68.2c0-1.1-.9-2-2-2z" />
  </svg>
);

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const names = [t("hero.name1"), t("hero.name2"), t("hero.name3")];
  const [displayedName, setDisplayedName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [nameChar, setNameChar] = useState(0);

  // tooltip state for touch devices / keyboard
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // typing effect
  useEffect(() => {
    const currentName = names[nameIndex] || "";
    const timeout = setTimeout(() => {
      if (nameChar < currentName.length) {
        setDisplayedName(currentName.slice(0, nameChar + 1));
        setNameChar((c) => c + 1);
      } else {
        const nextNameIndex = (nameIndex + 1) % names.length;
        setTimeout(() => {
          setNameIndex(nextNameIndex);
          setNameChar(0);
          setDisplayedName("");
        }, 800);
      }
    }, 220);
    return () => clearTimeout(timeout);
  }, [nameChar, nameIndex, names]);

  const cascadeVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1.6, ease: "easeOut" }
    })
  };

  return (
    <section
      id="hero"
      className="h-auto flex flex-col md:flex-row justify-between items-end px-8 pt-40 pb-10 bg-black text-white"
    >
      {/* 🔹 Bloc texte */}
      <div className="md:w-1/2 space-y-6 self-start">
        <motion.h1
          className="font-bold mb-4 whitespace-nowrap text-[clamp(1.2rem,4vw,2.5rem)]"
          variants={cascadeVariant}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="text-white">{t("hero.greeting")} </span>
          <span className="text-orange-600">{displayedName}</span>
        </motion.h1>

        {/* 🔹 Description */}
        <motion.p
          className="text-gray-400 text-justify text-xl leading-relaxed max-w-xl"
          variants={cascadeVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {t("hero.description")}
        </motion.p>

        {/* 🔹 Boutons */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 relative"
          variants={cascadeVariant}
          initial="hidden"
          animate="visible"
          custom={2}
        >
         <a href="#projects" className="w-full md:w-auto">
            <Button
              text={t("hero.btnPhotos")}
              variant="primary"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
            />
          </a>

          <a href="#contact" className="w-full md:w-auto">
            <Button
              text={t("hero.btnContact")}
              variant="secondary"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            />
          </a>

          {/* 🔹 Réseaux sociaux */}
          <div className="flex justify-center space-x-3 mt-6 mb-8">
            {/* Facebook */}
            <div
              className="group relative flex justify-center"
              onTouchStart={() => setShowTooltip("facebook")}
              onTouchEnd={() => setShowTooltip(null)}
              onTouchCancel={() => setShowTooltip(null)}
              onFocus={() => setShowTooltip("facebook")}
              onBlur={() => setShowTooltip(null)}
            >
              <a
                href="https://www.facebook.com/photographe-exemple"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.facebookTooltip")}
                className="flex items-center justify-center w-11 h-11 rounded-full 
                           bg-gray-900 hover:bg-orange-50 
                           transition-colors shadow-md hover:shadow-lg"
              >
                <Facebook className="text-orange-400 w-6 h-6" />
              </a>
              <span
                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 
                            px-3 py-1 rounded-md text-xs md:text-sm font-medium 
                            bg-black text-white whitespace-nowrap 
                            transition-all duration-300 transform -translate-y-1
                            ${showTooltip === "facebook" ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"} 
                            ${showTooltip === "facebook" ? "block" : "hidden md:block"}`}
              >
                {t("hero.facebookTooltip")}
              </span>
            </div>

            {/* Instagram */}
            <div
              className="group relative flex justify-center"
              onTouchStart={() => setShowTooltip("instagram")}
              onTouchEnd={() => setShowTooltip(null)}
              onTouchCancel={() => setShowTooltip(null)}
              onFocus={() => setShowTooltip("instagram")}
              onBlur={() => setShowTooltip(null)}
            >
              <a
                href="https://www.instagram.com/photographe-exemple"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.instagramTooltip")}
                className="flex items-center justify-center w-11 h-11 rounded-full 
                           bg-gray-900 hover:bg-orange-50 
                           transition-colors shadow-md hover:shadow-lg"
              >
                <Instagram className="text-orange-400 w-6 h-6" />
              </a>
              <span
                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 
                            px-3 py-1 rounded-md text-xs md:text-sm font-medium 
                            bg-black text-white whitespace-nowrap 
                            transition-all duration-300 transform -translate-y-1
                            ${showTooltip === "instagram" ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"} 
                            ${showTooltip === "instagram" ? "block" : "hidden md:block"}`}
              >
                {t("hero.instagramTooltip")}
              </span>
            </div>

            {/* TikTok */}
            <div
              className="group relative flex justify-center"
              onTouchStart={() => setShowTooltip("tiktok")}
              onTouchEnd={() => setShowTooltip(null)}
              onTouchCancel={() => setShowTooltip(null)}
              onFocus={() => setShowTooltip("tiktok")}
              onBlur={() => setShowTooltip(null)}
            >
              <a
                href="https://www.tiktok.com/@photographe-exemple"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.tiktokTooltip")}
                className="flex items-center justify-center w-11 h-11 rounded-full 
                           bg-gray-900 hover:bg-orange-50 
                           transition-colors shadow-md hover:shadow-lg"
              >
                <TikTokIcon className="text-orange-400 w-6 h-6" />
              </a>
              <span
                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 
                            px-3 py-1 rounded-md text-xs md:text-sm font-medium 
                            bg-black text-white whitespace-nowrap 
                            transition-all duration-300 transform -translate-y-1
                            ${showTooltip === "tiktok" ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"} 
                            ${showTooltip === "tiktok" ? "block" : "hidden md:block"}`}
              >
                {t("hero.tiktokTooltip")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🔹 Bloc image */}
      <motion.div
        className="flex justify-center relative mt-0 md:mt-[-140px] md:translate-x-[30px] flex-1"
        variants={cascadeVariant}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <div className="relative">
          {/* Image responsive on mobile, unchanged desktop layout */}
          <img
            src="/images/photographe1.webp"
            alt={t("hero.imageAlt")}
            className="relative w-full max-w-[29rem] md:max-w-[30rem] h-auto rounded-2xl shadow-2xl object-cover brightness-115 contrast-115 ring-8 ring-white/40 animate-pulse"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
