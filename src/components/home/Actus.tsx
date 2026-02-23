import { motion } from "framer-motion"
import actus1  from "@/assets/G2BJ54cXgAAWQYH.jfif"
import actus2  from "@/assets/Entreprise-africaine-julief514-iStock.jpg"
import actus3  from "@/assets/images (2).jpeg"

const Actus = () => {
    return (
        <section id="actualites" className="relative w-full overflow-hidden">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-20">
                <h2 className="text-3xl md:text-4xl font-bold relative inline-block font-montserrat text-foreground">
                    Nos actualités
                    <p className='text-xl font-normal py-2 max-w-2xl mx-auto'>
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
      className="group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
    category: "Finance",
    date: "4/11/2025",
    title: "KYCC RegCompass – Octobre 2025",
    excerpt:
      "KYCC RegCompass - Octobre 2025 : Finance, régulation et innovation : les dynamiques s'accélèrent à travers l'Asie-Pacifique. De Singapour à Hong Kong, du Vietnam à l'Australie, les autorités redéfinissent les standards de conformité, de transparence et d'innovation…",
    image: actus1,
  },
  {
    id: 2,
    category: "Finance",
    date: "6/10/2025",
    title: "KYCC RegWatch – Septembre 2025",
    excerpt:
      "KYCC RegWatch - Septembre 2025 : Révolution des Services Financiers en Asie-Pacifique. Dans ce numéro, nos experts nous parlent : des services bancaires, des marchés de capitaux & investissements, de l'assurance & la gestion des risques, des paiements…",
    image: actus2,
  },
  {
    id: 3,
    category: "Finance",
    date: "1/09/2025",
    title: "KYCC RegWatch – Août 2025",
    excerpt:
      "KYCC RegWatch - Août 2025 : Anticipez les changements, restez conformes. Dans ce numéro, nos experts décryptent les dernières évolutions réglementaires en Asie-Pacifique : Régulation des stablecoins à Hong Kong, Actions de mise en application LBC/FT à Singapour…",
    image: actus3,
  },
  {
    id: 4,
    category: "Finance",
    date: "1/08/2025",
    title: "KYCC RegWatch – Juillet 2025",
    excerpt:
      "KYCC RegWatch - Juillet 2025 : Nouvelles règlementations financières en Asie. Ce numéro explore les impacts pour les acteurs régionaux, avec un focus sur la conformité digitale et la gestion des données personnelles…",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
];

const COLS = 3;

export function ActusCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(MOCK_DATA.length / COLS);
  const visible = MOCK_DATA.slice(page * COLS, page * COLS + COLS);

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
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-red-700 hover:text-white hover:border-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
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

      {/* Grid 3 colonnes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((item) => (
          <CardActus key={item.id} item={item} />
        ))}
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
