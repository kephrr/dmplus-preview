import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';
import pattern from "@/assets/wavy-pattern.jpg"
import bigPattern from "@/assets/big-wavy-pattern.jpg"

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence opérationnelle",
    text: "La rigueur au service de la performance. Nous maîtrisons chaque détail pour transformer vos projets en réussites, avec fiabilité et efficacité à chaque étape.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Ethique, transparence pédagogique",
    text: "La confiance par la clarté. Nous nous engageons à expliquer nos méthodes simplement et honnêtement, pour que vous restiez acteur éclairé de vos décisions.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation utile et contextualisée",
    text: "Des solutions sur-mesure, pas des gadgets. Nous concevons des innovations pragmatiques, adaptées à votre réalité pour répondre précisément à vos besoins.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Approche humaine & collaborative",
    text: "La performance naît des synergies humaines. Nous cultivons l'écoute et la co-construction pour créer ensemble une dynamique qui dépasse la somme des talents.",
  },
];

const OurValues = () => {
  return (
    <section id="ourvalues" className="bg-slate-50 py-12 md:py-24 px-6 relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${bigPattern})`,
        }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-bold relative inline-block font-montserrat text-foreground">
            Nos valeurs
            <p className='text-sm md:text-lg font-normal py-2'>Plus qu’une culture d’entreprise, une mentalité de bâtisseurs au service de la performance.</p>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm border 
              border-slate-100 flex md:flex-col  gap-2 md:gap-0
              items-start hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 md:bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600
               mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h2 className="text-md font-bold text-[#002B5B] text-start py-2">
                  {item.title}
                </h2>
                
                <p className="text-[#334155] text-xs leading-relaxed text-start">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues 
;