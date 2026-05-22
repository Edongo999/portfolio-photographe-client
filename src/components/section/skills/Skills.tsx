import React from "react";
import { motion, Variants } from "framer-motion";
import { Camera, Image, Aperture, Film } from "lucide-react";
import { useTranslation } from "react-i18next";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0.5 : 0.25,
      delayChildren: isMobile ? 0.3 : 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: isMobile ? 60 : 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: isMobile ? 1 : 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } },
};

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: Camera,
      title: t("skills.photography.title"),
      items: [
        t("skills.photography.item1"),
        t("skills.photography.item2"),
        t("skills.photography.item3"),
      ],
    },
    {
      icon: Image,
      title: t("skills.editing.title"),
      items: [
        t("skills.editing.item1"),
        t("skills.editing.item2"),
        t("skills.editing.item3"),
      ],
    },
    {
      icon: Aperture,
      title: t("skills.technique.title"),
      items: [
        t("skills.technique.item1"),
        t("skills.technique.item2"),
        t("skills.technique.item3"),
      ],
    },
    {
      icon: Film,
      title: t("skills.storytelling.title"),
      items: [
        t("skills.storytelling.item1"),
        t("skills.storytelling.item2"),
        t("skills.storytelling.item3"),
      ],
    },
  ];

  const cardClassBase =
    "group rounded-xl p-8 min-h-[280px] flex flex-col items-center justify-start text-center bg-black/40 backdrop-blur-md border border-white/10 shadow-lg transition duration-300";
  const cardHoverClasses =
    "cursor-pointer hover:scale-[1.05] hover:shadow-xl hover:bg-black/60";

  return (
    <section id="skills" className="min-h-screen bg-gray-800 text-white px-6 sm:px-8 pt-12 pb-16">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* TITLE */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex justify-center"
        >
          <h2 className="text-2xl sm:text-4xl font-bold px-6 py-2 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-violet-500 animate-gradient-x">
            {t("skills.title")}
          </h2>
        </motion.div>

        {/* INTRO */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-gray-100 text-lg md:text-xl leading-relaxed text-left md:text-justify"
        >
          {t("skills.intro")}
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${cardClassBase} ${cardHoverClasses}`}
              >
                {/* Rond orange avec icône blanche */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 shadow-md mb-4">
                  <Icon size={28} className="text-white" />
                </div>

                {/* Titre en orange */}
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  {block.title}
                </h3>
              {/* Liste avec puces alignées */}
              <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-3 text-left">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
