import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Search, Zap, PenTool, Code, ShieldCheck, Rocket, Star } from 'lucide-react';

const steps = [
  { title: "Audit & Analyse", desc: "Nous analysons vos besoins et votre marché pour définir les fondations.", icon: Search },
  { title: "Stratégie", desc: "Définition de la roadmap, des KPIs et des objectifs clés.", icon: Zap },
  { title: "Conception UI/UX", desc: "Création d'interfaces intuitives centrées sur l'utilisateur.", icon: PenTool },
  { title: "Développement", desc: "Codage robuste avec les technologies les plus modernes.", icon: Code },
  { title: "Tests QA", desc: "Vérification rigoureuse pour garantir un produit sans bug.", icon: ShieldCheck },
  { title: "Lancement", desc: "Mise en ligne stratégique et déploiement de la solution.", icon: Rocket },
  { title: "Suivi & Évolution", desc: "Accompagnement continu pour faire grandir votre projet.", icon: Star },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-white py-24 px-4 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Notre Approche
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Un parcours structuré en 7 étapes pour transformer vos concepts en succès digitaux.
          </p>
        </div>

        <div className="relative">
          {/* Ligne centrale (Fond) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />
          
          {/* Ligne centrale (Animée) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600 -translate-x-1/2 z-10 hidden md:block"
          />

          <div className="flex flex-col gap-12 md:gap-0">
            {steps.map((step, index) => (
              <StepItem 
                key={index} 
                step={step} 
                index={index} 
                globalProgress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ step, index, globalProgress }: { step: any, index: number, globalProgress: any }) => {
  const isEven = index % 2 === 0;
  const Icon = step.icon;
  
  // Seuil pour l'activation visuelle (0 à 1)
  const threshold = index / (steps.length - 1);
  const [active, setActive] = React.useState(false);

  const isActive = useTransform(globalProgress, (v: number) => v >= threshold);
  
  React.useEffect(() => {
    return isActive.on("change", (v) => setActive(v));
  }, [isActive]);

  return (
    <div className={`relative flex items-center justify-between md:mb-24 last:mb-0 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Contenu de la Carte */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-[42%] bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative z-20"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-2xl ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'} transition-colors duration-500`}>
            <Icon size={24} />
          </div>
          <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">Étape 0{index + 1}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {step.desc}
        </p>
      </motion.div>

      {/* Point central sur le fil */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:block">
        <motion.div
          animate={{ 
            scale: active ? 1.2 : 1,
            backgroundColor: active ? "#2563eb" : "#f1f5f9",
            borderColor: active ? "#dbeafe" : "#e2e8f0"
          }}
          className="w-6 h-6 rounded-full border-4 transition-colors duration-500"
        />
      </div>

      {/* Espace vide pour l'autre côté (Desktop) */}
      <div className="hidden md:block md:w-[42%]" />
    </div>
  );
};

export default ProcessSection;