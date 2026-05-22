// src/components/section/projects/MediaViewer.tsx
import React, { useEffect, useRef, useState } from "react";
import NavArrow from "./NavArrow";
import { useTranslation } from "react-i18next";

type Media = { type: "video" | "image"; src: string };
type Project = { title: string; medias: Media[] };

export default function MediaViewer({
  project,
  index,
  startMuted = true,
}: {
  project: Project;
  index: number;
  startMuted?: boolean;
}) {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(index);
  const [isMuted, setIsMuted] = useState<boolean>(startMuted);
  const [isZoomed, setIsZoomed] = useState(false);
  const [slideshow, setSlideshow] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const media = project.medias[currentIndex];

  // Gestion vidéo
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [currentIndex, isMuted]);

  // Diaporama automatique
  useEffect(() => {
    if (!slideshow) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % project.medias.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideshow, project.medias.length]);

  const toggleMute = () => setIsMuted((m) => !m);
  const toggleZoom = () => setIsZoomed((z) => !z);
  const toggleSlideshow = () => setSlideshow((s) => !s);

  return (
    <div className="relative w-full max-w-[1200px] flex flex-col items-center justify-between p-4 space-y-4">
      {/* Flèches navigation */}
      {project.medias.length > 1 && (
        <>
          <NavArrow
            side="left"
            onClick={() =>
              setCurrentIndex((i) => (i - 1 + project.medias.length) % project.medias.length)
            }
            ariaLabel={t("media.prev")}
          />
          <NavArrow
            side="right"
            onClick={() =>
              setCurrentIndex((i) => (i + 1) % project.medias.length)
            }
            ariaLabel={t("media.next")}
          />
        </>
      )}

    {/* Media principal */}
<div className="relative w-full flex justify-center items-center max-h-[60vh] overflow-hidden rounded-lg">
  {media.type === "video" ? (
    <>
      <video
        ref={videoRef}
        src={media.src}
        controls
        playsInline
        className="w-auto max-w-[90%] max-h-[60vh] rounded-lg object-contain"
      />
      <button
        onClick={toggleMute}
        className="absolute right-4 top-4 bg-black/60 text-white px-3 py-2 rounded-full"
      >
        {isMuted ? t("media.unmute") : t("media.mute")}
      </button>
    </>
  ) : (
    <>
      {/* Image normale */}
      <img
  src={media.src}
  alt={project.title}
  onClick={toggleZoom}
  className={`w-auto max-w-[90%] max-h-[60vh] rounded-lg object-contain transition-transform duration-500 cursor-zoom-in
    ${isZoomed ? "scale-150 z-50 absolute" : "scale-100 relative"}
    brightness-110 contrast-110`}
 />

    

    {/* Image zoomée en overlay */}
{isZoomed && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    onClick={toggleZoom}
  >
    <img
      src={media.src}
      alt={project.title}
      className="max-w-[90%] max-h-[90%] rounded-lg object-contain cursor-zoom-out transition-transform duration-300
                 brightness-110 contrast-110"
    />
  </div>
)}

    </>
  )}
</div>

      {/* Miniatures */}
      <div className="w-full flex gap-3 overflow-x-auto justify-center bg-black/30 p-3 rounded-lg relative z-10">
        {project.medias.map((m, idx) => (
          <img
            key={idx}
            src={m.src}
            alt={`${project.title} ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded cursor-pointer border transition 
              ${idx === currentIndex ? "border-yellow-400" : "border-transparent"}`}
          />
        ))}
      </div>

      {/* Bouton slideshow */}
      {project.medias.length > 1 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleSlideshow}
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition"
          >
            {slideshow ? t("media.pause") : t("media.play")}
          </button>
        </div>
      )}
    </div>
  );
}
