import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Accès à 8 expertises complémentaires",
  "Solutions intégrées et cohérentes",
  "Accompagnement personnalisé",
  "Méthodologies éprouvées",
  "Résultats mesurables",
  "Innovation continue"
];

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl animate-float animation-delay-400" />

      <div className="container max-w-6xl lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Rejoignez les entreprises qui font confiance à DM+ Group pour accélérer 
              leur croissance et atteindre l'excellence.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <CheckCircle2 className="w-5 h-5 text-white/60 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20"
          >
            <h3 className="font-montserrat font-bold text-2xl text-white mb-8">
              Nos résultats parlent d'eux-mêmes
            </h3>

            <div className="space-y-6">
              {[
                { label: "Satisfaction client", value: "98%", bar: 98 },
                { label: "Projets livrés à temps", value: "95%", bar: 95 },
                { label: "Croissance des clients", value: "+45%", bar: 45 },
                { label: "Taux de rétention", value: "92%", bar: 92 },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between text-white mb-2">
                    <span className="text-white/80">{stat.label}</span>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${stat.bar}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
