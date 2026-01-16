import { ArrowRight, BarChart2, Target, Users } from 'lucide-react';
import { InvestmentProps } from '@/types/investment';

export const HeroSection = ({ subsidiary }: InvestmentProps) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-investment to-investment-dark text-white">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <BarChart2 className="w-5 h-5" />
            <span className="text-sm font-medium">{subsidiary.name}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {subsidiary.slogan}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {subsidiary.longDescription}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-investment font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#expertise" 
              className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Découvrir nos services
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mission claire</h3>
            <p className="text-white/80">Rendre l'investissement accessible, stratégique et responsable</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Approche personnalisée</h3>
            <p className="text-white/80">Des solutions adaptées à chaque profil d'investisseur</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <BarChart2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise avérée</h3>
            <p className="text-white/80">Une équipe d'experts financiers à votre écoute</p>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24 text-white">
          <path d="M0 80L60 74.7C120 69 240 59 360 59C480 59 600 69 720 69C840 69 960 59 1080 49.3C1200 40 1320 30 1380 25.3L1440 20V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
