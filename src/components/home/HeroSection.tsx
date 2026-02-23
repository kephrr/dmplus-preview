import React from 'react';
import { ArrowUpRight, Map, Sun, Wind, Thermometer, MessageSquareCode } from 'lucide-react';
import bg from '@/assets/new-york-city.jpg';
import headLogoWhite from '@/assets/dmplusFichier 3.png'
import LogoDM from "@/assets/head dmplus.png";
import { TypingText } from '../ui/typing-text';
import { orbitingEntities } from '@/data/animation';
import { SolarSystem } from './solar-system-anim';


const HeroSection = () => {
  return (
    <section id='groupe' className="relative w-full md:h-screen h-[550px] md:min-h-[600px] overflow-hidden bg-sky-400 text-white">
      {/* Background Image Placeholder - Replace with actual URL */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('${bg}')`,
          filter: 'brightness(0.9)' 
        }}
      >
        {/* Overlay to match the blue tint if needed */}
        <div className="absolute inset-0 bg-blue-500/40"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full 
      max-w-6xl mx-auto px-6 md:pt-10 md:pb-12">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight ">
              7 expertises,
              <br /> 
              <TypingText
                        words={[
                          "Un groupe. ",
                          "Une vision.",
                          "Un accompagnement."
                        ]}
                        typingSpeed={70}       // vitesse de frappe
                        deletingSpeed={40}     // vitesse d'effacement
                        pauseBeforeDelete={3000}       // ⏱️ pause de 3 secondes avant effacement
                        pauseBeforeType={30}  // temps après effacement avant le mot suivant
                                 // (si tu veux que ça s'arrête après le mot)
                        cursor
                        className="text-4xl md:text-5xl leading-[1.1] tracking-tight ugaz-one-regular"
                        />
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-md leading-relaxed">
              Nous accompagnons entreprises, entrepreneurs et investisseurs à travers un écosystème de pôles spécialisés, pilotés par une vision groupe claire
            </p>
          </div>

          <button className="group flex items-center justify-between bg-gradient-to-tr 
          from-primary to-primary-light 
           text-white px-6 py-4 rounded-full w-48 transition-all">
            <span className="font-medium">Nous découvrir</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Right Side: Glassmorphism Card */}
        <div className="hidden md:flex items-center justify-center 
        lg:justify-end pb-20 lg:pb-0">
          
          {/* Main Glass Card */}
            
          <div className="relative w-full max-w-md  rounded-[40px] border border-white/20 bg-white/10
           backdrop-blur-2xl shadow-2xl p-8 flex overflow-hidden">
            
          

            
            <img src={headLogoWhite} alt="DM+ Group" className="w-auto h-32 my-auto mx-4" />
            <div className="mb-6">
              <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              Nos objectifs</span>
              <h2 className="text-2xl font-light">Structurer, 
                développer et faire grandir vos projets</h2>
            </div>

            

            {/* Floating Stats White Card 
            <div className="mt-auto bg-white rounded-3xl p-6 text-zinc-900 shadow-xl">


              <div className="flex items-end justify-between">
                <div>
                  <div className="text-5xl font-bold tracking-tighter">7</div>
                  <div className="mt-2">
                    <p className="text-xs font-bold">Domaines</p>
                    <p className="text-[10px] text-gray-400">D'expertise</p>
                  </div>
                </div>
<div>
                  <div className="text-5xl font-bold tracking-tighter">10</div>
                  <div className="mt-2">
                    <p className="text-xs font-bold">années</p>
                    <p className="text-[10px] text-gray-400">D'experience</p>
                  </div>
                </div>
                <button className="bg-zinc-900 text-white p-3 rounded-2xl flex items-center gap-2 text-xs">
                  <Map className="w-4 h-4" />
                  Map
                </button>
              </div>
            </div>
            */}
            
          </div>
            
        </div>
      </div>

      {/* Bottom Interface Elements */}
      <div className="absolute bottom-10 left-6 right-6 flex justify-between items-center z-20">
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium opacity-80">Digital Mind Plus Group</span>
          <div className="w-32 h-[1px] bg-white/30 relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-white"></div>
          </div>
        </div>

        <button className="bg-zinc-900 p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform">
          <MessageSquareCode className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;