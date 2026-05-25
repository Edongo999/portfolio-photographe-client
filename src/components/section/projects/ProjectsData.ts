// src/components/section/projects/ProjectsData.ts
import { Project } from "@/components/ui/ProjectCard";
import { useTranslation } from "react-i18next";

export const useProjectsData = (): Project[] => {
  const { t } = useTranslation();

  return [
    // cartes pour les mariages (inchangées)
    {
      title: t("projects.items.mariage1.title"),
      description: t("projects.items.mariage1.description"),
      results: t("projects.items.mariage1.results"),
      medias: [
        { type: "image", src: "/images/Mariage1/mariage10.webp" },
        { type: "image", src: "/images/Mariage1/mariage11.webp" },
        { type: "image", src: "/images/Mariage1/mariage12.webp" },
        { type: "image", src: "/images/Mariage1/mariage13.webp" },
        { type: "image", src: "/images/Mariage1/mariage14.webp" },
        { type: "image", src: "/images/Mariage1/mariage15.webp" },
        { type: "image", src: "/images/Mariage1/mariage16.webp" },
        { type: "image", src: "/images/Mariage1/mariage17.webp" },
        { type: "image", src: "/images/Mariage1/mariage18.webp" },
        { type: "image", src: "/images/Mariage1/mariage19.webp" },
        { type: "image", src: "/images/Mariage1/mariage101.webp" },
        { type: "image", src: "/images/Mariage1/mariage102.webp" },
        { type: "image", src: "/images/Mariage1/mariage103.webp" },
        { type: "image", src: "/images/Mariage1/mariage104.webp" },
        { type: "image", src: "/images/Mariage1/mariage105.webp" },
        { type: "image", src: "/images/Mariage1/mariage106.webp" },
        { type: "image", src: "/images/Mariage1/mariage107.webp" },
        { type: "image", src: "/images/Mariage1/mariage108.webp" },
        { type: "image", src: "/images/Mariage1/mariage109.webp" },
        { type: "image", src: "/images/Mariage1/mariage1010.webp" },
        { type: "image", src: "/images/Mariage1/mariage1011.webp" },
        { type: "image", src: "/images/Mariage1/mariage1012.webp" }
      ],
      category: "Mariage",
      cardId: "mariage-0"
    },
    {
      title: t("projects.items.mariage2.title"),
      description: t("projects.items.mariage2.description"),
      results: t("projects.items.mariage2.results"),
      medias: [
        { type: "image", src: "/images/Mariage2/mariage2.webp" },
        { type: "image", src: "/images/Mariage2/mariage21.webp" },
        { type: "image", src: "/images/Mariage2/mariage22.webp" },
        { type: "image", src: "/images/Mariage2/mariage23.webp" },
        { type: "image", src: "/images/Mariage2/mariage24.webp" },
        { type: "image", src: "/images/Mariage2/mariage25.webp" }
      ],
      category: "Mariage",
      cardId: "mariage-1"
    },
    {
      title: t("projects.items.mariage3.title"),
      description: t("projects.items.mariage3.description"),
      results: t("projects.items.mariage3.results"),
      medias: [
        { type: "image", src: "/images/Mariage3/mariage30.webp" },
        { type: "image", src: "/images/Mariage3/mariage31.webp" },
        { type: "image", src: "/images/Mariage3/mariage32.webp" },
        { type: "image", src: "/images/Mariage3/mariage33.webp" },
        { type: "image", src: "/images/Mariage3/mariage34.webp" },
        { type: "image", src: "/images/Mariage3/mariage35.webp" },
        { type: "image", src: "/images/Mariage3/mariage36.webp" },
        { type: "image", src: "/images/Mariage3/mariage37.webp" },
        { type: "image", src: "/images/Mariage3/mariage38.webp" },
        { type: "image", src: "/images/Mariage3/mariage39.webp" },
        { type: "image", src: "/images/Mariage3/mariage301.webp" },
        { type: "image", src: "/images/Mariage3/mariage302.webp" },
        { type: "image", src: "/images/Mariage3/mariage304.webp" },
        { type: "image", src: "/images/Mariage3/mariage305.webp" },
        { type: "image", src: "/images/Mariage3/mariage306.webp" },
        { type: "image", src: "/images/Mariage3/mariage308.webp" },
        { type: "image", src: "/images/Mariage3/mariage309.webp" },
        { type: "image", src: "/images/Mariage3/mariage310.webp" },
        { type: "image", src: "/images/Mariage3/mariage311.webp" },
        { type: "image", src: "/images/Mariage3/mariage312.webp" }
      ],
      category: "Mariage",
      cardId: "mariage-3"
    },
    {
      title: t("projects.items.mariage4.title"),
      description: t("projects.items.mariage4.description"),
      results: t("projects.items.mariage4.results"),
      medias: [
        { type: "image", src: "/images/Mariage4/mariage40.webp" },
        { type: "image", src: "/images/Mariage4/mariage41.webp" },
        { type: "image", src: "/images/Mariage4/mariage42.webp" },
        { type: "image", src: "/images/Mariage4/mariage43.webp" },
        { type: "video", src: "/images/Mariage4/mariage44.webp" },
        { type: "image", src: "/images/Mariage4/mariage45.webp" },
        { type: "image", src: "/images/Mariage4/mariage46.webp" },
        { type: "image", src: "/images/Mariage4/mariage47.webp" },
        { type: "image", src: "/images/Mariage4/mariage48.webp" },
        { type: "image", src: "/images/Mariage4/mariage49.webp" },
        { type: "image", src: "/images/Mariage4/mariage401.webp" }
      ],
      category: "Mariage",
      cardId: "mariage-4"
    },
    {
      title: t("projects.items.mariage5.title"),
      description: t("projects.items.mariage5.description"),
      results: t("projects.items.mariage5.results"),
      medias: [
        { type: "image", src: "/images/Mariage5/image5.webp" },
        { type: "image", src: "/images/Mariage5/image51.webp" },
        { type: "image", src: "/images/Mariage5/image52.webp" },
        { type: "image", src: "/images/Mariage5/image53.webp" },
        { type: "image", src: "/images/Mariage5/image54.webp" },
        { type: "image", src: "/images/Mariage5/image55.webp" },
        { type: "image", src: "/images/Mariage5/image56.webp" },
        { type: "image", src: "/images/Mariage5/image57.webp" },
        { type: "image", src: "/images/Mariage5/image58.webp" },
        { type: "image", src: "/images/Mariage5/image59.webp" }
      ],
      category: "Mariage",
      cardId: "mariage-5"
    },
    {
      title: t("projects.items.mariage6.title"),
      description: t("projects.items.mariage6.description"),
      results: t("projects.items.mariage6.results"),
      medias: [
        { type: "image", src: "/images/Mariage6/images60.webp" },
        { type: "image", src: "/images/Mariage6/images61.webp" },
        { type: "image", src: "/images/Mariage6/images62.webp" },
        { type: "image", src: "/images/Mariage6/images63.webp" },
        { type: "image", src: "/images/Mariage6/images64.webp" },
        { type: "image", src: "/images/Mariage6/images65.webp" },
        { type: "image", src: "/images/Mariage6/images60.webp" },
        { type: "image", src: "/images/Mariage6/images67.webp" },
        { type: "image", src: "/images/Mariage6/images68.webp" },
        { type: "image", src: "/images/Mariage6/images69.webp" },
        { type: "image", src: "/images/Mariage6/images601.webp" },
        { type: "image", src: "/images/Mariage6/images602.webp" },
        { type: "image", src: "/images/Mariage6/images603.webp" },
        { type: "image", src: "/images/Mariage6/images604.webp" }
      ],
      category: "Mariage",
      cardId: "mariage-6"
    },

    // cartes pour les portraits (clés renommées portrait1, portrait2, portrait3)
    {
      title: t("projects.items.portrait1.title"),
      description: t("projects.items.portrait1.description"),
      results: t("projects.items.portrait1.results"),
      medias: [
        { type: "image", src: "/images/Portrait1/portrait10.webp" },
        { type: "image", src: "/images/Portrait1/portrait11.webp" },
        { type: "image", src: "/images/Portrait1/portrait12.webp" },
        { type: "image", src: "/images/Portrait1/portrait13.webp" },
        { type: "image", src: "/images/Portrait1/portrait14.webp" },
        { type: "image", src: "/images/Portrait1/portrait15.webp" },
        { type: "image", src: "/images/Portrait1/portrait16.webp" },
        { type: "image", src: "/images/Portrait1/portrait17.webp" },
        { type: "image", src: "/images/Portrait1/portrait18.webp" },
        { type: "image", src: "/images/Portrait1/portrait19.webp" },
        { type: "image", src: "/images/Portrait1/portrait101.webp" },
        { type: "image", src: "/images/Portrait1/portrait102.webp" },
        { type: "image", src: "/images/Portrait1/portrait103.webp" },
        { type: "image", src: "/images/Portrait1/portrait104.webp" },
        { type: "image", src: "/images/Portrait1/portrait105.webp" },
        { type: "image", src: "/images/Portrait1/portrait106.webp" },
        { type: "image", src: "/images/Portrait1/portrait107.webp" }

      ],
      category: "Portrait",
      cardId: "portrait-0"
    },
    {
      title: t("projects.items.portrait2.title"),
      description: t("projects.items.portrait2.description"),
      results: t("projects.items.portrait2.results"),
      medias: [
        { type: "image", src: "/images/Portrait2/portrait20.webp" },
        { type: "image", src: "/images/Portrait2/portrait21.webp" },
        { type: "image", src: "/images/Portrait2/portrait22.webp" },
        { type: "image", src: "/images/Portrait2/portrait23.webp" },
        { type: "image", src: "/images/Portrait2/portrait24.webp" },
        { type: "image", src: "/images/Portrait2/portrait25.webp" }

      ],
      category: "Portrait",
      cardId: "portrait-1"
    },
    {
      title: t("projects.items.portrait3.title"),
      description: t("projects.items.portrait3.description"),
      results: t("projects.items.portrait3.results"),
      medias: [
        { type: "image", src: "/images/Portrait3/portrait30.webp" },
        { type: "image", src: "/images/Portrait3/portrait31.webp" },  
        { type: "image", src: "/images/Portrait3/portrait32.webp" },
        { type: "image", src: "/images/Portrait3/portrait33.webp" },
        { type: "image", src: "/images/Portrait3/portrait34.webp" },
        { type: "image", src: "/images/Portrait3/portrait35.webp" }
      ],
      category: "Portrait",
      cardId: "portrait-2"
    },

    // cartes pour Artistique (clés renommées artistique1, artistique2)
    {
      title: t("projects.items.artistique1.title"),
      description: t("projects.items.artistique1.description"),
      results: t("projects.items.artistique1.results"),
      medias: [
        { type: "image", src: "/images/Artistique1/artistique10.webp" },
        { type: "image", src: "/images/Artistique1/artistique11.webp" },
        { type: "image", src: "/images/Artistique1/artistique12.webp" },
        { type: "image", src: "/images/Artistique1/artistique13.webp" },
        { type: "image", src: "/images/Artistique1/artistique14.webp" },
        { type: "image", src: "/images/Artistique1/artistique15.webp" },
        { type: "image", src: "/images/Artistique1/artistique16.webp" }
      ],
      category: "Artistique",
      cardId: "artistique-0"
    },
    {
      title: t("projects.items.artistique2.title"),
      description: t("projects.items.artistique2.description"),
      results: t("projects.items.artistique2.results"),
      medias: [
       { type: "image", src: "/images/Artistique2/artistique20.webp" },
        { type: "image", src: "/images/Artistique2/artistique21.webp" },
        { type: "image", src: "/images/Artistique2/artistique23.webp" },
        { type: "image", src: "/images/Artistique2/artistique24.webp" },
        { type: "image", src: "/images/Artistique2/artistique25.webp" },
        { type: "image", src: "/images/Artistique2/artistique26.webp" }
      ],
      category: "Artistique",
      cardId: "artistique-1"
    },
        {
      title: t("projects.items.artistique3.title"),
      description: t("projects.items.artistique3.description"),
      results: t("projects.items.artistique3.results"),
      medias: [
        { type: "image", src: "/images/Artistique3/artistique30.webp" },
        { type: "image", src: "/images/Artistique3/artistique31.webp" },
        { type: "image", src: "/images/Artistique3/artistique32.webp" },
        { type: "image", src: "/images/Artistique3/artistique33.webp" },
        { type: "image", src: "/images/Artistique3/artistique34.webp" },
        { type: "image", src: "/images/Artistique3/artistique35.webp" },
        { type: "image", src: "/images/Artistique3/artistique36.webp" }
      ],
      category: "Artistique",
      cardId: "artistique-2"
    },

    // cartes pour Anniversaire (clés renommées anniversaire1, anniversaire2)
    {
      title: t("projects.items.anniversaire1.title"),
      description: t("projects.items.anniversaire1.description"),
      results: t("projects.items.anniversaire1.results"),
      medias: [{ type: "image", src: "/images/Anniversaire1/anniv10.webp" }],
      category: "Anniversaire",
      cardId: "anniversaire-0"
    },
    {
      title: t("projects.items.anniversaire2.title"),
      description: t("projects.items.anniversaire2.description"),
      results: t("projects.items.anniversaire2.results"),
      medias: [{ type: "image", src: "/images/Anniversaire2/anniv2.webp" }],
      category: "Anniversaire",
      cardId: "anniversaire-1"
    },
      {
      title: t("projects.items.anniversaire3.title"),
      description: t("projects.items.anniversaire3.description"),
      results: t("projects.items.anniversaire3.results"),
      medias: [{ type: "image", src: "/images/Anniversaire3/anniv3.webp" }],
      category: "Anniversaire",
      cardId: "anniversaire-2"
    },

    // cartes pour Événement (clés renommées evenement1, evenement2, evenement3)
    {
      title: t("projects.items.evenement1.title"),
      description: t("projects.items.evenement1.description"),
      results: t("projects.items.evenement1.results"),
      medias: [
        { type: "image", src: "/images/Evenement3/even30.webp" },
        { type: "image", src: "/images/Evenement3/even31.webp" },
        { type: "image", src: "/images/Evenement3/even32.webp" },
        { type: "image", src: "/images/Evenement3/even33.webp" },
        { type: "image", src: "/images/Evenement3/even34.webp" },
        { type: "image", src: "/images/Evenement3/even35.webp" },
        { type: "image", src: "/images/Evenement3/even36.webp" },
 
      ],
      category: "Événement",
      cardId: "evenement-0"
    },
    {
      title: t("projects.items.evenement2.title"),
      description: t("projects.items.evenement2.description"),
      results: t("projects.items.evenement2.results"),
      medias: [
         { type: "image", src: "/images/Evenement2/even20.webp" },
          { type: "image", src: "/images/Evenement2/even21.webp" },
          { type: "image", src: "/images/Evenement2/even22.webp" },
          { type: "image", src: "/images/Evenement2/even23.webp" },
          { type: "image", src: "/images/Evenement2/even24.webp" },
          { type: "image", src: "/images/Evenement2/even25.webp" }

        
        ]
        ,
      category: "Événement",
      cardId: "evenement-1"
    },
    {
      title: t("projects.items.evenement3.title"),
      description: t("projects.items.evenement3.description"),
      results: t("projects.items.evenement3.results"),
      medias: [
         { type: "image", src: "/images/Evenement1/even10.webp" },
        { type: "image", src: "/images/Evenement1/even11.webp" },
        { type: "image", src: "/images/Evenement1/even12.webp" },
        { type: "image", src: "/images/Evenement1/even13.webp" },
        { type: "image", src: "/images/Evenement1/even14.webp" },
        { type: "image", src: "/images/Evenement1/even15.webp" },
        { type: "image", src: "/images/Evenement1/even16.webp" },
        { type: "image", src: "/images/Evenement1/even17.webp" },
        { type: "image", src: "/images/Evenement1/even18.webp" },
        { type: "image", src: "/images/Evenement1/even19.webp" }
         
      ],
      category: "Événement",
      cardId: "evenement-2"
    }
  ];
};
