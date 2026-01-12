import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";
import { cn } from "@/lib/utils";

const SubsidiariesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="filiales" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos Filiales
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
            8 expertises, une seule vision
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chacune de nos filiales apporte une expertise unique, 
            ensemble elles forment un écosystème complet au service de votre réussite.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link
                  to={`/filiale/${sub.slug}`}
                  className="block h-full"
                >
                  <div
                    className={cn(
                      "relative h-full p-8 rounded-2xl border transition-all duration-500 overflow-hidden group",
                      isHovered
                        ? "border-transparent shadow-2xl scale-[1.02]"
                        : "border-border bg-card hover:border-primary/20"
                    )}
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                        sub.gradientClass,
                        isHovered ? "opacity-100" : "opacity-0"
                      )}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
                          isHovered
                            ? "bg-white/20"
                            : "bg-gradient-to-br " + sub.gradientClass
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-7 h-7 transition-colors duration-300",
                            isHovered ? "text-white" : "text-white"
                          )}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className={cn(
                          "font-montserrat font-bold text-xl mb-3 transition-colors duration-300",
                          isHovered ? "text-white" : "text-foreground"
                        )}
                      >
                        DM+ {sub.shortName}
                      </h3>

                      {/* Description */}
                      <p
                        className={cn(
                          "text-sm mb-4 leading-relaxed transition-colors duration-300",
                          isHovered ? "text-white/80" : "text-muted-foreground"
                        )}
                      >
                        {sub.description}
                      </p>

                      {/* Services */}
                      <ul className="space-y-2 mb-6">
                        {sub.services.map((service, idx) => (
                          <li
                            key={idx}
                            className={cn(
                              "text-xs flex items-center gap-2 transition-colors duration-300",
                              isHovered ? "text-white/70" : "text-muted-foreground"
                            )}
                          >
                            <span
                              className={cn(
                                "w-1 h-1 rounded-full",
                                isHovered ? "bg-white/60" : "bg-primary"
                              )}
                            />
                            {service}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <div
                        className={cn(
                          "flex items-center gap-2 text-sm font-semibold transition-all duration-300",
                          isHovered ? "text-white" : "text-primary"
                        )}
                      >
                        Découvrir
                        <ArrowRight
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            isHovered ? "translate-x-1" : ""
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
