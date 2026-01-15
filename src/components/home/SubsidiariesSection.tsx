import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";
import { cn } from "@/lib/utils";
import profileIcon from "@/assets/person-icon.png"
import background from "@/assets/trust-in-government.webp"

const SubsidiariesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="filiales" className="py-12 lg:py-20 relative min-h-[1000px]" ref={ref}
    style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}>
      <div className="absolute z-0 inset-0 bg-black/25">

      </div>
      <div className="container inset-0 absolute z-10 max-w-6xl px-4 my-20 lg:px-8">
        <div className="mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-montserrat font-bold text-white">
              Nos domaines d'expertise
            </h2>
        </div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex mb-16 gap-6"
        >
          <img src={profileIcon} alt="Profile" className="w-16 h-16 mb-4 rounded-full" />
          <div className="">
            <h2 className="font-montserrat font-bold text-lg text-white">
              GBANE Almamy
            </h2>
            <p className="text-md text-white">
              DG et co-fondateur de Digital Mind+ Group
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subsidiaries.map((sub, index) => {
            const Icon = sub.icon;
            const isHovered = hoveredId === sub.id;

            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                onMouseEnter={() => setHoveredId(sub.id)}
                onMouseLeave={() => setHoveredId(null)}>

                <Link
                  to={`/filiale/${sub.slug}`}
                  className="block h-full">

                  <div
                    className={cn(
                      "relative h-full p-4 rounded-xl border transition-all duration-100 overflow-hidden group",
                      isHovered
                        ? "border-transparent scale-[1.01]"
                        : "border-white/20 bg-black/25 text-white backdrop-blur-xl"
                    )}
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br transition-opacity duration-100",
                        sub.gradientClass,
                        isHovered ? "opacity-100" : "opacity-0"
                      )}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-100 bg-white/20"
                      >
                        <Icon
                          className="w-7 h-7 transition-colors duration-100 text-white" 
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="font-montserrat font-bold text-md mb-3 transition-colors duration-100 text-white"
                      >
                        DM+ {sub.shortName}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs mb-4 leading-relaxed transition-colors duration-100 text-white/80"
                      >
                        {sub.description}
                      </p>

                      {/* Services */}
                      <ul className="space-y-2 mb-6">
                        {sub.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="text-xs flex items-center gap-2 transition-colors duration-100 text-white/70"
                          >
                            <span
                              className="w-1 h-1 rounded-full bg-white/60"
                            />
                            {service}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <div
                        className="flex items-center gap-2 text-sm font-semibold transition-all duration-100 text-white"
                      >
                        Découvrir
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-100 translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * 8 }}
                onMouseEnter={() => setHoveredId("contact")}
                onMouseLeave={() => setHoveredId(null)}>

                <Link
                  to="/contact"
                  className="block h-full">
                  <div
                    className="h-full p-4 rounded-xl border transition-all duration-100 overflow-hidden group
                    bg-gradient-to-br from-sky-600 to-sky-900 border-transparent scale-[1.01] flex flex-col justify-between"
                    
                  >
                      <h3
                        className="font-montserrat font-bold text-md mb-3 transition-colors
                         duration-100 text-white">
                        Vous souhaitez concrétisez vous projets ?
                      </h3>
                      {/* Link */}
                      <div
                        className="flex items-center gap-2 text-sm font-semibold transition-all duration-100 
                        px-4 py-2 rounded-sm text-sky-900 bg-white"
                      >
                        Nous contacter
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-100 translate-x-1"
                        />
                      </div>
                  </div>
                </Link>
              </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
