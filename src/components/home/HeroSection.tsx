import React from 'react';
import { ArrowUpRight, Map, Sun, Wind, Thermometer, MessageSquareCode } from 'lucide-react';
import bg from '@/assets/new-york-city.jpg';
import { TypingText } from '../ui/typing-text';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-sky-400 text-white">
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
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center space-y-8 max-w-xl">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-medium leading-[1.1] tracking-tight ">
              Un groupe, <br /> Une équipe,
              <br /> 
              <TypingText
                        words={[
                            "Une vision.", "Un projet.","Un pari."
                        ]}
                        typingSpeed={70}       // vitesse de frappe
                        deletingSpeed={40}     // vitesse d'effacement
                        pauseBeforeDelete={3000}       // ⏱️ pause de 3 secondes avant effacement
                        pauseBeforeType={30}  // temps après effacement avant le mot suivant
                                 // (si tu veux que ça s'arrête après le mot)
                        cursor
                        className="text-7xl md:text-8xl leading-[1.1] tracking-tight ugaz-one-regular"
                        />
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-md leading-relaxed">
              02. Journey where the crisp mountain air meets the thrill of the descent. 
              Alpine Adventure is your gateway to the enchanting world of skiing, 
              where every turn is a new discovery and every slope tells a story.
            </p>
          </div>

          <button className="group flex items-center justify-between bg-zinc-900 text-white px-6 py-4 rounded-full w-48 transition-all hover:bg-black">
            <span className="font-medium">Nous découvrir</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Right Side: Glassmorphism Card */}
        <div className="relative flex items-end lg:items-center justify-center lg:justify-end pb-20 lg:pb-0">
          
          {/* Main Glass Card */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-8 flex flex-col overflow-hidden">
            
            {/* Inner Glass Nav */}
            <div className="flex items-center justify-between text-xs font-medium mb-12">
              <div className="flex flex-col gap-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 bg-white/60"></div>
              </div>
              <div className="flex gap-6">
                <span className="cursor-pointer hover:text-white/70">Sign in</span>
                <span className="cursor-pointer hover:text-white/70">Open Account</span>
                <span className="cursor-pointer hover:text-white/70">Download</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">02 Tell us about yourself</span>
              <h2 className="text-4xl font-light">Une expérience multisectorielle</h2>
              <p className="text-xs text-white/60 mt-2">World's most breathtaking ski resorts</p>
            </div>

            {/* Floating Stats White Card */}
            <div className="mt-auto bg-white rounded-3xl p-6 text-zinc-900 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                   <div className="w-12 h-12 rounded-full border-2 border-blue-500 p-0.5">
                      <img 
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=100" 
                        alt="resort" 
                        className="w-full h-full object-cover rounded-full"
                      />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg leading-tight">435, Alps</h3>
                     <p className="text-[10px] text-gray-400 uppercase font-bold">Mountain</p>
                   </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Alps, South-Central Europe, FR
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-5xl font-bold tracking-tighter">4.8</div>
                  <div className="mt-2">
                    <p className="text-xs font-bold">★ 29k Rates</p>
                    <p className="text-[10px] text-gray-400">Out of 3 countries</p>
                  </div>
                </div>

                <div className="space-y-2 text-[10px] text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-3 h-3 text-blue-400" />
                    <span>H/L: - 17° / 02°</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-3 h-3 text-blue-400" />
                    <span>AQI: 28</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-3 h-3 text-orange-400" />
                    <span>UV index: 3 of 10</span>
                  </div>
                </div>

                <button className="bg-zinc-900 text-white p-3 rounded-2xl flex items-center gap-2 text-xs">
                  <Map className="w-4 h-4" />
                  Map
                </button>
              </div>
            </div>
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