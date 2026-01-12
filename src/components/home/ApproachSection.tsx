import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Cog, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyse & Diagnostic",
    description: "Nous commençons par une analyse approfondie de vos besoins, défis et opportunités pour établir un diagnostic précis."
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Stratégie Sur-Mesure",
    description: "Nos experts élaborent une stratégie personnalisée en mobilisant les compétences transversales de nos filiales."
  },
  {
    icon: Cog,
    step: "03",
    title: "Implémentation",
    description: "Exécution rigoureuse avec une gestion de projet agile et des points de contrôle réguliers."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Déploiement",
    description: "Mise en production maîtrisée avec formation des équipes et accompagnement au changement."
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Optimisation Continue",
    description: "Suivi des KPIs, ajustements et amélioration continue pour maximiser les résultats."
  }
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approche" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Notre Approche
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
            Une méthodologie éprouvée pour des résultats concrets
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Notre approche combine expertise sectorielle, méthodologies agiles et 
            technologies de pointe pour délivrer des solutions à fort impact.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative group"
                >
                  <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 h-full">
                    {/* Step Number Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Step Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>

                    <h3 className="font-montserrat font-bold text-lg text-foreground text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-primary-foreground font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Discutons de votre projet
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
