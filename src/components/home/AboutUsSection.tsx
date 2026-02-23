import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bg from "@/assets/data-center-coworkers-laughing-having-fun.jpg"
import fullLogoDM from "@/assets/LOGOTYPE [Récupéré]-02.png"

const colors = [
  "bg-rose-600",
  "bg-yellow-600", 
  "bg-blue-600",
  "bg-rose-600",
  "bg-sky-600",
  "bg-green-600",
  "bg-indigo-600"
];

const blurColors = [
  "bg-rose-600/20",
  "bg-yellow-600/20", 
  "bg-blue-600/20",
  "bg-rose-600/20",
  "bg-sky-600/20",
  "bg-green-600/20",
  "bg-indigo-600/20"
];

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="aboutus" className="py-32 min-h-[900px] bg-background relative overflow-hidden" ref={ref}>
      {/* Blur light effects */} 
      <div className="inset-0 -z-10">
        <div className={`absolute bottom-2/3 left-1/2 w-[400px] h-[400px] rounded-full bg-sky-600/20 blur-[100px]`} />
        <div className={`absolute bottom-2/3 left-1/4 w-[300px] h-[300px] rounded-full bg-sky-600/10 blur-[100px]`} />
      </div>
      <div className="container max-w-5xl px-4 lg:px-0 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold mb-4">
            Notre ADN
          </span>
          <h2 className="font-montserrat font-bold text-2xl md:text-4xl text-foreground mb-6">
            Plus qu'un groupe, un écosystème <div className={`bg-[#175e97] transition-colors duration-500 p-1.5 text-white rotate-6 max-w-fit mx-auto`}>unique</div>
              au service de votre réussite
          </h2>
          <p className="text-md text-slate-600 leading-relaxed">
           DM+ GROUP, C’est un écosystème structuré, pensé pour créer de la valeur durable, accompagner la croissance et bâtir des solutions utiles, ancrées et ambitieuses.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="flex gap-0 px-10">
          <div className="w-[600px] h-[500px] bg-top bg-cover
          rounded-l-md"
          style={{ backgroundImage: `url(${bg})` }}>

          </div>
          <div 
          className="p-6 border text-md text-foreground 
          shadow-md rounded-r-md bg-white">
                
            <strong>DM+ GROUP</strong> est un conglomérat multisectoriel structuré autour d’une vision claire : 
            créer de la valeur durable en combinant stratégie, innovation et synergie opérationnelle. <br /> <br />

            Nous rassemblons des expertises complémentaires dans les domaines de la finance, 
            de la distribution, de la formation, de la technologie, de la communication et de la data,
            afin d’offrir des solutions intégrées et performantes. <br /> <br />
            
            Notre ambition n’est pas simplement d’opérer dans plusieurs secteurs. <br />
            Notre ambition est de <strong>les connecter intelligemment</strong>
            . <br /> <br />
            
            <strong>Notre vision :</strong> <br /> <br />
            Construire un groupe structuré, discipliné et innovant, capable d’accompagner entreprises, 
            investisseurs et partenaires vers une croissance maîtrisée et stratégique.
            <div className="float-end">
              <img src={fullLogoDM} alt="DM+ Group" className="w-24 h-auto mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
