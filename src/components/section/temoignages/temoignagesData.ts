// src/components/section/temoignages/temoignagesData.ts
export interface Temoignage {
  id: number;
  nom: string;
  texte: string;
  type: string;
  image: string;
}

export const temoignages: Temoignage[] = [
  {
    id: 1,
    nom: "Louann & Julien",
    texte: "Les photos de notre mariage sont sublimes. Tu as su capturer chaque émotion et chaque détail, nous revivons cette journée à travers ton travail.",
    type: "Mariage",
    image: "/images/temoignages/temoignage6.webp",
  },
  {
    id: 2,
    nom: "Florence & Frédéric",
    texte: "Nous avons été bluffés par ton professionnalisme et ta discrétion. Les clichés sont naturels et pleins de vie, exactement ce que nous voulions.",
    type: "Mariage",
    image: "/images/temoignages/temoignage4.webp",
  },
  {
    id: 3,
    nom: "Ghislain",
    texte: "Un shooting portrait incroyable. Je me suis senti à l’aise dès le début et le résultat est au‑delà de mes attentes. Les photos reflètent parfaitement ma personnalité.",
    type: "Portrait",
    image: "/images/temoignages/temoignage3.webp",
  },
  {
    id: 4,
    nom: "Sophie",
    texte: "Merci pour les magnifiques photos de mon anniversaire. Tu as su immortaliser les moments forts et les sourires de mes proches. Un souvenir précieux.",
    type: "Anniversaire",
    image: "/images/temoignages/temoignage5.webp",
  },
  {
    id: 5,
    nom: "Entreprise E-Technology",
    texte: "Les photos de notre conférence ont donné une image moderne et professionnelle de notre société. Tes clichés sont devenus un vrai atout pour notre communication.",
    type: "Événement",
    image: "/images/temoignages/temoignage1.webp",
  },
  {
    id: 6,
    nom: "Nicola",
    texte: "Ton approche artistique est unique. Les photos de mon shooting sont originales et pleines de créativité. Je suis ravie du résultat.",
    type: "Artistique",
    image: "/images/temoignages/temoignage2.webp",
  },
];
