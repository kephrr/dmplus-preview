import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users2, MapPin, Coins } from 'lucide-react';

const stats = [
  {
    icon: <Coins className="w-10 h-10" />,
    value: "8.4",
    suffix: "",
    prefix: "FCFA",
    label: "millions de chiffre d'affaires",
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    value: "38",
    label: "pays d'Afrique, 6 départements et collectivités d'Outre-Mer",
  },
  {
    icon: <Globe2 className="w-10 h-10" />,
    value: "45",
    label: "marchés du continent",
  },
  {
    icon: <Users2 className="w-10 h-10" />,
    value: "22100",
    label: "collaborateurs",
  },
];

const KeyFigures = () => {
  return (
    <section className="bg-[#002B5B] py-20 px-6 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl md:text-5xl font-bold mb-20 tracking-tight"
        >
          Nos chiffres clés <span className="text-blue-400 font-medium ugaz-one-regular">2024</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                {React.cloneElement(stat.icon as React.ReactElement, { className: "text-blue-300 group-hover:text-blue-100 transition-colors" })}
              </div>
              
              <div className="flex items-baseline gap-1 mb-3">
                {stat.prefix && <span className="text-2xl font-light text-blue-300">{stat.prefix}</span>}
                <span className="text-5xl font-extrabold tracking-tighter">
                  {stat.value}
                </span>
                {stat.suffix && <span className="text-xl font-medium ml-1 text-blue-200">{stat.suffix}</span>}
              </div>
              
              <p className="text-sm leading-relaxed text-blue-100/70 max-w-[200px] font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;