import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, TrendingUp, Shield, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, chaque interaction et chaque solution que nous proposons."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "L'innovation est au cœur de notre ADN. Nous anticipons les tendances pour offrir des solutions avant-gardistes."
  },
  {
    icon: Users,
    title: "Cohésion",
    description: "Nos 8 filiales travaillent en synergie pour offrir des solutions intégrées et cohérentes."
  },
  {
    icon: TrendingUp,
    title: "Croissance",
    description: "Nous accompagnons nos clients vers une croissance durable et mesurable."
  },
  {
    icon: Shield,
    title: "Confiance",
    description: "La confiance est le fondement de toutes nos relations. Transparence et intégrité guident nos actions."
  },
  {
    icon: Globe,
    title: "Ambition Globale",
    description: "Une vision mondiale avec une expertise locale pour répondre aux défis de demain."
  }
];

const stats = [
  { value: "8", label: "Filiales spécialisées" },
  { value: "500+", label: "Experts dédiés" },
  { value: "15", label: "Pays d'implantation" },
  { value: "1000+", label: "Projets réalisés" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="groupe" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Le Groupe
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
            Un écosystème unique au service de votre réussite
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DM+ Group est un conglomérat innovant qui fédère 8 entités spécialisées, 
            offrant des solutions complètes, intégrées et adaptées aux défis de la nouvelle ère.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-center text-white"
            >
              <div className="font-montserrat font-bold text-4xl md:text-5xl mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
