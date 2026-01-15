import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, TrendingUp, Shield, Globe } from "lucide-react";
import vrHeadset from "@/assets/vr-headset.webp";

const values = [
  {
    icon: Target,
    title: "Excellence Opérationnelle",
    description: "Nous visons l'excellence dans chaque projet, chaque interaction et chaque solution que nous proposons."
  },
  {
    icon: Users,
    title: "Éthique, transparence & pédagogie",
    description: "Nos 8 filiales travaillent en synergie pour offrir des solutions intégrées et cohérentes."
  },
  {
    icon: Lightbulb,
    title: "Vision long terme & impact local",
    description: "Devenir un acteur stratégique de référence en Afrique francophone, capable de créer des ponts durables entre compétences, capitaux et solutions digitales, au service de la croissance locale et régionale."
  },
  {
    icon: TrendingUp,
    title: "Innovation utile et contextualisée",
    description: "Nous accompagnons nos clients vers une croissance durable et mesurable."
  },
  {
    icon: Shield,
    title: "Approche humaine & collaborative",
    description: "La confiance est le fondement de toutes nos relations. Transparence et intégrité guident nos actions."
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
    <section id="groupe" className="py-24 lg:py-32 min-h-[1000px] bg-background relative overflow-hidden" ref={ref}>
      {/* Blur light effects */} 
      <div className="inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] rounded-full bg-sky-600/20 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[100px]" />
      </div>
      <div className="container max-w-6xl px-4 lg:px-0 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Notre ADN
          </span>
          <h2 className="font-montserrat font-bold text-2xl md:text-4xl text-foreground mb-6">
            Un écosystème unique au service de votre réussite
          </h2>
          <p className="text-md text-foreground leading-relaxed">
            DM+ Group est un groupe multisectoriel dédié à la transformation économique 
            et sociale par l'innovation, la finance et la technologie.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isLargeItem = index === 2; // Third item will be larger
            
            return (isLargeItem ? 
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`group p-4 rounded-2xl backdrop-blur-sm border border-border 
                transition-all duration-500 row-span-2 overflow-hidden`}
                style={{
                  backgroundImage: `url(${vrHeadset})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              >
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-black/20
                opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-600/80 to-green-600/10
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex flex-col 
                items-start justify-between p-4 z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center 
                  justify-center mb-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-md text-background mb-3">
                    {value.title}
                    </h3>
                    <p className="text-white leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                
              </motion.div> : 
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`group p-4 rounded-2xl bg-white/70 hover:bg-white backdrop-blur-sm border border-border 
                transition-all duration-500`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center 
                justify-center mb-6 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary transition-colors" />
                </div>
                <h3 className="font-montserrat font-bold text-md text-foreground mb-3">
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
