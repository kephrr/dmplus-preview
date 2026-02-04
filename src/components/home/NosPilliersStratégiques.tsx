import React from 'react';
import { motion } from 'framer-motion';
import { Map, Link2, Handshake, ShieldCheck } from 'lucide-react';

const strategies = [
  {
    icon: <Map className="w-8 h-8" />,
    text: "Un portefeuille d'activités diversifiées et complémentaires, soutenu par une large présence panafricaine",
  },
  {
    icon: <Link2 className="w-8 h-8" />,
    text: "Une intégration verticale de la chaîne de valeur, de la production jusqu'à la distribution au client final",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    text: "Des partenariats stratégiques avec des marques fortes et leaders mondiaux",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    text: "Une chaîne d'approvisionnement maîtrisée et sécurisée garantissant l'accès à des produits de qualité",
  },
];

const StrategySection = () => {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] relative inline-block">
            Notre stratégie pour une croissance durable
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <p className="text-[#334155] text-sm md:text-base leading-relaxed font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;