import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gray-900 text-gray-300 border-t border-gray-700">
      {/* Ligne subtile animée */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 animate-gradient-x"></div>

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* 🔹 Liens de navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-gray-100 transition">{t("footer.nav.home")}</a>
          <a href="#about" className="hover:text-gray-100 transition">{t("footer.nav.about")}</a>
          <a href="#projects" className="hover:text-gray-100 transition">{t("footer.nav.projects")}</a>
          <a href="#experiences" className="hover:text-gray-100 transition">{t("footer.nav.experiences")}</a>
          <a href="#contact" className="hover:text-gray-100 transition">{t("footer.nav.contact")}</a>
        </nav>

        {/* 🔹 Texte droit */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-sm text-gray-400">
            {t("footer.portfolio")}{" "}
            <span className="font-semibold text-gray-100">HG FRANCK STUDIO </span>
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
              {t("footer.company")}
            </span>. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
