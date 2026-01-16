'use client';

import { User, Briefcase, Home, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { InvestmentProps } from '@/types/investment';
import { useRef, useState, useEffect } from 'react';
import { getTargetAudienceImage } from '@/utils/imageUtils';

interface AudienceItem {
  icon: JSX.Element;
  title: string;
  description: string;
  type: string;
}

const defaultTargetAudience = [
  {
    icon: <User className="w-5 h-5" />,
    title: "Particuliers",
    description: "Valorisez votre épargne, préparez votre retraite ou financez un projet de vie",
    type: 'particuliers'
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Professionnels & entrepreneurs",
    description: "Placez votre trésorerie disponible de manière intelligente et stratégique",
    type: 'entrepreneurs'
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Investisseurs débutants",
    description: "Bénéficiez d'un accompagnement pédagogique et structuré pour vos premiers pas",
    type: 'debutants'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Diaspora africaine",
    description: "Investissez dans des actifs fiables, transparents et ancrés dans votre région d'origine",
    type: 'diaspora'
  }
];

export const TargetAudienceSection = ({ subsidiary }: InvestmentProps) => {
  const targetAudience = (subsidiary as any).targetAudience || defaultTargetAudience;
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollInterval = useRef<NodeJS.Timeout>();
  
  // Dupliquer les éléments pour un défilement infini fluide
  const duplicatedAudience = [...targetAudience, ...targetAudience.slice(0, 2)];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainer.current) return;
    
    const container = scrollContainer.current;
    const itemWidth = 320; // Largeur d'un élément du carrousel
    const scrollAmount = direction === 'right' ? itemWidth : -itemWidth;
    const newScrollLeft = container.scrollLeft + scrollAmount;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Si on dépasse la fin, revenir au début
    if (newScrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: 'instant' });
      // Petit délai pour s'assurer que le scroll est revenu au début
      setTimeout(() => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }, 50);
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    // Mettre à jour l'état pour afficher/masquer les flèches
    setIsScrolled(container.scrollLeft > 10);
  };

  // Effet pour le défilement automatique
  useEffect(() => {
    if (isPaused) return;
    
    scrollInterval.current = setInterval(() => {
      scroll('right');
    }, 3000); // Défile toutes les 3 secondes

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isPaused]);

  const handleScroll = () => {
    if (!scrollContainer.current) return;
    setIsScrolled(scrollContainer.current.scrollLeft > 10);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Effet de dégradé en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-investment/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {`À qui s'adresse ${subsidiary.shortName || subsidiary.name} ?`}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subsidiary.slogan || "Découvrez comment nous pouvons vous accompagner."}
          </p>
        </div>

        <div 
          className="relative px-6 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Flèche gauche */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm flex items-center justify-center text-investment hover:bg-investment hover:text-white transition-all duration-300 transform -translate-x-6 ${isHovered ? 'opacity-100 translate-x-1' : 'opacity-0'} hover:scale-105 active:scale-95 border border-gray-100`}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Conteneur du carrousel */}
          <div 
            ref={scrollContainer}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            className="flex overflow-x-hidden pb-8 mx-4 scrollbar-hide snap-x snap-mandatory"
          >
            <div className="flex space-x-4 px-4">
              {duplicatedAudience.map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[240px] md:w-[260px] snap-center"
                >
                  <div className="bg-white rounded-xl shadow-md h-full flex flex-col overflow-hidden border border-gray-100">
                    <div className="relative h-48 w-full overflow-hidden group">
                      <img
                        src={getTargetAudienceImage(item.type)}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading={index < 2 ? 'eager' : 'lazy'}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = getTargetAudienceImage('default');
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col relative">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="lucide lucide-trending-up w-8 h-8 text-white"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèche droite */}
          <button 
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm flex items-center justify-center text-investment hover:bg-investment hover:text-white transition-all duration-300 transform translate-x-6 ${isHovered ? 'opacity-100 -translate-x-1' : 'opacity-0'} hover:scale-105 active:scale-95 border border-gray-100`}
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
        .overflow-x-hidden {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default TargetAudienceSection;
