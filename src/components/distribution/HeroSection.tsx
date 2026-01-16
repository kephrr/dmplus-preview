import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Star, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  gradientClass: string;
  subsidiary: {
    slogan: string;
    longDescription: string;
  };
}

export const HeroSection = ({ gradientClass, subsidiary }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background avec effets */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className={cn("absolute inset-0 bg-gradient-to-br", gradientClass)} />
        
        {/* Additional pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Effets de particules */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, x: Math.random() * 100 }}
              animate={{ 
                y: "100vh",
                x: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Contenu Hero */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Badge et navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="text-sm font-medium">Retour au groupe</span>
            </Link>
            
            <div className="flex items-center gap-3">
            </div>
          </div>

          {/* Titre principal */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-white/20 to-white/10 text-white text-xs font-medium backdrop-blur-sm border border-white/20 inline-flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Filiale DM+ Group
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.1]"
            >
              <span className="block">DM+ Distribution
              </span>
            </motion.h1>
          </div>

          {/* Slogan et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <Star className="w-4 h-4 text-white/60" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light max-w-3xl leading-relaxed">
              {subsidiary.slogan}
            </p>
            
            <p className="text-white/70 mb-6 leading-relaxed max-w-2xl font-light">
              {subsidiary.longDescription}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#contact"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <button className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-white to-white/95 text-gray-900 font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="relative flex items-center gap-3">
                  <span>Démarrer un projet</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </a>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
      </motion.div>
    </section>
  );
};
