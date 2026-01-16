import { motion } from "framer-motion";
import { Truck, Package, ShoppingCart, Leaf, CheckCircle, Clock, BarChart2, Users as UsersIcon, Target, Globe, Box, ShieldCheck, RefreshCw, ArrowRight, Play, ArrowLeft, Sparkles, ChevronRight, Star, Award, TrendingUp, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroSection } from "./distribution/HeroSection";

interface DistributionPageProps {
  className?: string;
  gradientClass: string;
  colorClass: string;
  subsidiary: {
    id: string;
    name: string;
    shortName: string;
    slug: string;
    description: string;
    longDescription: string;
    services: string[];
    icon: React.ComponentType<{ className?: string }>;
    theme: string;
    slogan: string;
  };
}

export const DistributionPage = ({
  className,
  gradientClass,
  colorClass,
  subsidiary,
}: DistributionPageProps) => {
  if (!subsidiary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-t-transparent border-primary/30 rounded-full animate-spin mx-auto mb-4"></div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Chargement en cours...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  const advantages = [
    {
      title: "Livraison flexible",
      description: "Adaptée à votre volume, secteur et calendrier",
      icon: <Truck className="w-6 h-6" />,
      statLabel: ""
    },
    {
      title: "Service personnalisé",
      description: "Un interlocuteur dédié et réactif",
      icon: <UsersIcon className="w-6 h-6" />,
      statLabel: ""
    },
    {
      title: "Respect de la qualité",
      description: "Normes d'hygiène, traçabilité, test produit",
      icon: <Shield className="w-6 h-6" />,
      statLabel: ""
    },
    {
      title: "Approche 360°",
      description: "De la production à la commercialisation",
      icon: <Globe className="w-6 h-6" />,
      statLabel: ""
    },
    {
      title: "Soutien aux producteurs",
      description: "Engagement dans les circuits courts",
      icon: <Leaf className="w-6 h-6" />,
      statLabel: ""
    },
    {
      title: "Synergie DM+",
      description: "Accès à d'autres services du groupe",
      icon: <Box className="w-6 h-6" />,
      statLabel: ""
    },
  ];

  const supplyChain = [
    {
      step: 1,
      title: "Sélection rigoureuse",
      description: "Partenariat direct avec producteurs, choix de variétés adaptées, approvisionnement local et ciblé.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: 2,
      title: "Contrôle qualité",
      description: "Vérification systématique à l'arrivée : aspect, poids, maturité, respect des normes sanitaires.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: 3,
      title: "Conditionnement",
      description: "Emballage adapté à la livraison professionnelle, maîtrise de la chaîne du froid, étiquetage clair.",
      icon: <Package className="w-6 h-6" />,
      color: "from-violet-500 to-purple-600"
    },
    {
      step: 4,
      title: "Livraison rapide",
      description: "Tournées programmées, livraison avant service, dans les 24-48h après commande.",
      icon: <Truck className="w-6 h-6" />,
      color: "from-orange-500 to-amber-600"
    },
    {
      step: 5,
      title: "Suivi & reporting",
      description: "Bon de livraison détaillé, facturation claire, retours traités sous 24h.",
      icon: <BarChart2 className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-600"
    },
  ];

  return (
    <div className={cn("min-h-screen bg-white overflow-hidden", className)}>
      <HeroSection gradientClass={gradientClass} subsidiary={subsidiary} />

      {/* Main Content */}
      <div className="space-y-10 py-20">
        {/* Notre Vision Section - Design Amélioré */}
        <section id="vision" className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Background decorations */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-bl from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white to-gray-50/80 p-8 md:p-12 lg:p-16 rounded-3xl border border-gray-100 shadow-xl  backdrop-blur-sm overflow-hidden">
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}
                />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 right-8 md:top-12 md:right-12"
                >
                  <div className={cn(
                    "w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white relative",
                    gradientClass
                  )}>
                    <Target className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="absolute -inset-3 bg-gradient-to-r from-current to-transparent opacity-30 blur-lg" />
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header with title and badge */}
                  <div className="mb-10 md:mb-12">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex flex-col items-start gap-4"
                    >                  
                      {/* Main Title */}
                      <h2 className="font-montserrat font-bold text-2xl md:text-4xl lg:text-5xl text-gray-900 max-w-2xl">
                        Notre{' '}
                        <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradientClass)}>
                          Vision
                        </span>
                      </h2>
                    </motion.div>
                  </div>
                  
                  {/* Description with decorative elements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Decorative divider */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-transparent" />
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-300" />
                    </div>
                    
                    {/* Vision statement */}
                    <div className="relative">
                      {/* Quote marks */}
                      <div className="absolute -top-4 -left-2 text-6xl md:text-7xl font-serif text-gray-200 select-none">
                        "
                      </div>
                      
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed pl-8 md:pl-12 max-w-4xl">
                            Créer une chaîne de valeur distributive intégrée, plus agile, plus transparente et plus proche des réalités du terrain, tout en valorisant les acteurs locaux.
                      </p>
                    </div>
                                    
                    {/* Call to action */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="pt-8 md:pt-10">
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section - Enhanced Design */}
        <section id="services" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-r from-green-50/80 to-emerald-50/80 -z-10" />
          
          <div className="container mx-auto px-4 lg:px-6 relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >              
              <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-gray-900 mb-6 leading-tight">
                Des services sur mesure pour <br />
                <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradientClass)}>
                  votre entreprise
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez comment nous optimisons votre chaîne d'approvisionnement
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[{
                title: "Approvisionnement en produits frais",
                subtitle: "Fraîcheur Teranga",
                icon: <Leaf className="w-6 h-6" />,
                features: [
                  "Livraison de fruits & légumes frais triés, lavés, conditionnés",
                  "Commandes régulières ou ponctuelles avec planification flexible",
                  "Traçabilité totale & respect strict de la chaîne de froid",
                  "Sélection premium de produits locaux et importés"
                ],
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50"
              }, {
                title: "Logistique & Distribution",
                subtitle: "Pour producteurs & distributeurs",
                icon: <Truck className="w-6 h-6" />,
                features: [
                  "Stockage temporaire sécurisé avec contrôle climatique",
                  "Structuration complète de l'offre commerciale",
                  "Distribution multi-canaux (physique + digitale)",
                  "Packaging sur mesure & identité de marque"
                ],
                gradient: "from-emerald-500 to-green-600",
                bgGradient: "from-emerald-50 to-green-50"
              }].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative"
                >
                  {/* Animated Background Blob */}
                  <div className={`absolute -z-10 -inset-1 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    {/* Icon with gradient background */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-${service.gradient.split(' ')[0]}/20`}>
                      {service.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-montserrat font-bold text-2xl text-gray-900">
                          {service.title}
                        </h3>
                        <p className={`text-sm font-semibold mt-1 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.subtitle}
                        </p>
                      </div>
                      
                      <ul className="space-y-3.5 mt-6">
                        {service.features.map((feature, fIdx) => (
                          <motion.li 
                            key={fIdx} 
                            className="flex items-start gap-3 group/feature"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2.5 flex-shrink-0`} />
                            <span className="text-gray-700 leading-relaxed">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <button 
                        className={`mt-6 px-6 py-2.5 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium text-sm hover:shadow-lg hover:shadow-${service.gradient.split(' ')[0]}/30 transition-all duration-300 transform hover:scale-[1.02]`}
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section - Redesign */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-montserrat font-bold text-2xl md:text-4xl text-gray-900 mb-4"
              >
                Pourquoi travailler avec <br /> <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradientClass)}>
                DM+ Distribution ?
                </span>
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
                    <div className="absolute top-4 right-4">
                      <div className="text-xs text-gray-500">{advantage.statLabel}</div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClass} bg-opacity-10`}>
                        <div className={cn(colorClass)}>
                          {advantage.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">
                          {advantage.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supply Chain Section - Professional Design */}
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Chaine d'approvisionnement
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-100 via-blue-100 to-emerald-100 h-full hidden lg:block" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {supplyChain.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-emerald-400 rounded-full z-10 hidden lg:flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-125">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:bg-white transition-colors" />
                    </div>
                    
                    <div className="h-full pt-10">
                      <div className="bg-white p-6 rounded-xl border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                            {step.icon}
                          </div>
                        </div>
                        
                        <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Redesign */}
        <section className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900" />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"
            />
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-6"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
                  Prêt à transformer votre logistique ?
                </h2>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Rejoignez plus de 500 entreprises qui nous font confiance pour optimiser 
                  leur chaîne d'approvisionnement.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="group px-8 py-6 rounded-xl bg-gradient-to-r from-white to-white/95 text-gray-900 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      <span>Démarrer maintenant</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-6 rounded-xl border-2 border-white/30 text-gray-900 hover:bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Voir la démo
                    </span>
                  </Button>
                </div>
                
                <p className="text-white/50 text-sm mt-6">
                  Réponse sous 24h • Premier audit gratuit • Sans engagement
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default DistributionPage;