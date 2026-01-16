import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { TargetAudienceSection } from "@/components/investment/TargetAudienceSection";
import { ExpertiseSection } from "@/components/investment/ExpertiseSection";
import { ValuePropositionSection } from "@/components/investment/ValuePropositionSection";

interface InvestmentPageProps {
  subsidiary: any;
}

const InvestmentPage: React.FC<InvestmentPageProps> = ({ subsidiary }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with original style */}
      <section className={cn("relative min-h-[70vh] flex items-center overflow-hidden")}>
        <div className={cn("absolute inset-0 bg-gradient-to-br", subsidiary.gradientClass)} />
        
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

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au groupe
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                {React.createElement(subsidiary.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                Filiale DM+ Group
              </span>
            </div>

            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.1]">
              {subsidiary.name}
            </h1>

            <p className="text-white/70 mb-6 leading-relaxed max-w-2xl font-light">
              {subsidiary.longDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {subsidiary.services.map((service: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-white/10 text-white rounded-full text-sm">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the investment sections */}
      <TargetAudienceSection subsidiary={subsidiary} />
      <ExpertiseSection subsidiary={subsidiary} />
      <ValuePropositionSection subsidiary={subsidiary} />
    </div>
  );
};

export default InvestmentPage;
