import { motion } from "framer-motion"
import actus2  from "@/assets/invest.webp"
import actus1  from "@/assets/lancement-ali-vend-tout.jpeg"
import actus3  from "@/assets/agri.jpeg"

const Actus = () => {
    return (
        <section id="actualites" className="relative w-full overflow-hidden">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-20">
                <h2 className="text-2xl md:text-4xl font-bold relative inline-block font-montserrat text-foreground">
                    Nos actualités
                    <p className='text-sm md:text-xl font-normal py-2 max-w-2xl mx-auto'>
                    Des compétences complémentaires, structurées autour d’une même ambition : créer de la valeur durable.
                    </p>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-600 rounded-full" />
                </h2>
            </motion.div>
            <div>
                <ActusCarousel />
            </div>
        </section>
    )
}

export default Actus

import { useState, useRef } from "react";

export interface ActusItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href?: string;
}

interface CardActusProps {
  item: ActusItem;
}

export function CardActus({ item }: CardActusProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href ?? "#"}
      className="group block rounded-xl overflow-hidden bg-white shadow-md 
      hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ display: "block" }}
        />
        {/* Category badge */}
        <span
          className="absolute bottom-0 left-0 px-4 py-1 text-white text-xs font-bold uppercase tracking-widest"
          style={{ backgroundColor: "#c0192c", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
        >
          {item.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <p
          className="text-gray-400 text-sm mb-2"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          {item.date}
        </p>
        <h3
          className="font-bold text-gray-900 mb-3 leading-snug transition-colors duration-200 group-hover:text-red-700"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.15rem" }}
        >
          {item.title}
        </h3>
        <p
          className="text-gray-500 text-sm leading-relaxed line-clamp-4"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          {item.excerpt}
        </p>
      </div>
    </a>
  );
}

const MOCK_DATA: ActusItem[] = [
  {
    id: 1,
    category: "DM+ Distribution",
    date: "4/11/2025",
    title: "Lancement de Ali Vend Tout",
    excerpt:
      "DM+ Distribution renforce son activité commerciale et annonce le lancement officiel de Ali Vend Tout, sa plateforme dédiée à la distribution d’équipements électroniques, électroménagers et mobiliers. Dans le cadre de ce déploiement, une nouvelle cohorte de Trade Market (commerciaux terrain & digitaux) a été mise en place afin de renforcer la présence commerciale, accélérer la pénétration du marché et optimiser la performance des ventes. Portée par une stratégie de commercialisation digitale combinée à une force de vente structurée, Ali Vend Tout ambitionne de faciliter l’accès aux équipements modernes tout en développant un réseau de distribution agile.",
    image: actus1,
  },
  {
    id: 2,
    category: "DM+ Investment",
    date: "6/10/2025",
    title: " Développement d’un simulateur d’investissement intelligent",
    excerpt:
      "DM+ GROUP, à travers DM+ Investment et DM+ Technologies, a lancé le développement d’un simulateur d’investissement digital destiné aux particuliers et aux entreprises. Cet outil permettra aux investisseurs de : simuler différents scénarios d’investissement, analyser le rendement potentiel selon leur profil, optimiser leurs décisions financières grâce à une approche basée sur la data. Cette initiative s’inscrit dans la volonté du groupe de démocratiser l’investissement et de rendre la prise de décision financière plus accessible et structurée.",
    image: actus2,
  },
  {
    id: 3,
    category: "Fraicheur Teranga",
    date: "1/09/2025",
    title: "Relance des activités Fraîcheur Teranga",
    excerpt:
      "Une nouvelle dynamique pour la distribution agricole DM+ Distribution accélère le développement de Fraîcheur Teranga, en renforçant ses partenariats avec producteurs locaux et clients professionnels tels que restaurants, hôtels et commerces. Cette relance vise à structurer une chaîne d’approvisionnement plus courte, fiable et performante, favorisant une meilleure valorisation des producteurs et une disponibilité continue des produits frais.",
    image: actus3,
  }
];

const COLS_MOBILE = 1;
const COLS_DESKTOP = 3;

export function ActusCarousel() {
  const [page, setPage] = useState(0);
  const totalPagesMobile = Math.ceil(MOCK_DATA.length / COLS_MOBILE);
  const totalPagesDesktop = Math.ceil(MOCK_DATA.length / COLS_DESKTOP);
  const totalPages = totalPagesDesktop; // Use desktop for consistency
  
  const visibleMobile = MOCK_DATA.slice(page * COLS_MOBILE, page * COLS_MOBILE + COLS_MOBILE);
  const visibleDesktop = MOCK_DATA.slice(page * COLS_DESKTOP, page * COLS_DESKTOP + COLS_DESKTOP);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-2xl font-bold text-gray-900 uppercase tracking-widest"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          
        </h2>

        {/* Navigation buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 flex items-center justify-center 
            rounded-full border border-gray-300 text-gray-700 hover:bg-red-700 hover:text-white hover:border-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Page précédente"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-red-700 hover:text-white hover:border-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Page suivante"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid responsive */}
      {/* Mobile version - 1 actu */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-6">
          {visibleMobile.map((item) => (
            <CardActus key={item.id} item={item} />
          ))}
        </div>
      </div>
      
      {/* Desktop version - 3actus */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6">
          {visibleDesktop.map((item) => (
            <CardActus key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              i === page ? "bg-red-700" : "bg-gray-300"
            }`}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
