import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import bgImage from "@/assets/dmplus-tech.webp";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    gradient: string;
    textColor: string;
    link?: string;
    bgImage?: string;
  }[] = [
    {
      id: "main",
      title: "DM+ Group",
      subtitle: "L'Excellence multisectorielle",
      description: "Un groupe, une ambition, un écosystème structuré, pensé pour créer de la valeur durable, accompagner la croissance et bâtir des solutions utiles, ancrées et ambitieuses.",
      gradient: "from-primary to-primary-light",
      textColor: "text-white",
      bgImage: bgImage,
    },
    ...subsidiaries.map((sub) => ({
      id: sub.id,
      title: `DM+ ${sub.shortName}`,
      subtitle: sub.slogan,
      description: sub.description,
      gradient: sub.gradientClass,
      textColor: "text-white",
      link: `/filiale/${sub.slug}`,
      bgImage: sub.bgImage,
    })),
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Img */}
      <div className={cn(
        "absolute inset-0 -z-10 transition-all duration-1000"
      )}
      style={{
        backgroundImage: `url(${slides[currentSlide].bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
      >
        
      </div>

      {/* Background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br transition-all duration-1000 opacity-90",
        slides[currentSlide].gradient
      )} />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white blur-3xl animate-float animation-delay-400" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className=" md:px-12 max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10
               backdrop-blur-sm text-white/90 text-xs font-medium mb-4"
            >
              {currentSlide === 0 ? "Bienvenue chez" : "Découvrez"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={cn(
                "font-montserrat font-bold text-2xl md:text-4xl lg:text-5xl mb-6",
                slides[currentSlide].textColor
              )}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={cn(
                "font-montserrat font-semibold text-2xl md:text-3xl mb-4",
                slides[currentSlide].textColor,
                "opacity-90"
              )}
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={cn(
                "text-lg md:text-md max-w-2xl mb-8",
                slides[currentSlide].textColor,
                "opacity-80"
              )}
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {slides[currentSlide].link ? (
                <Link
                  to={slides[currentSlide].link}
                  className="px-4 py-2 text-sm rounded-3xl border-white border
                  text-white font-semibold bg-white/10 backdrop-blur-md
                  hover:bg-white/20 transition-all duration-300"
                >
                  En savoir plus
                </Link>
              ) : (
                <>
                  <a
                    href="#filiales"
                    className="px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Découvrir nos filiales
                  </a>
                  <a
                    href="#groupe"
                    className="px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
                  >
                    En savoir plus
                  </a>
                </>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 left-4 lg:left-8 transform translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="absolute bottom-1/2 right-4 lg:right-8 transform translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentSlide === index
                ? "w-12 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
      </motion.div>
    </section>
  );
};

export default HeroSlider;
