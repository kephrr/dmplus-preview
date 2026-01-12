import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play, Users, Award, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getSubsidiaryBySlug, subsidiaries } from "@/data/subsidiaries";
import { cn } from "@/lib/utils";

const SubsidiaryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const subsidiary = getSubsidiaryBySlug(slug || "");

  if (!subsidiary) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Filiale non trouvée</h1>
            <Link to="/" className="text-primary hover:underline">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = subsidiary.icon;
  const currentIndex = subsidiaries.findIndex(s => s.id === subsidiary.id);
  const nextSubsidiary = subsidiaries[(currentIndex + 1) % subsidiaries.length];
  const prevSubsidiary = subsidiaries[(currentIndex - 1 + subsidiaries.length) % subsidiaries.length];

  // Sample team members
  const teamMembers = [
    { name: "Jean Dupont", role: "Directeur", image: null },
    { name: "Marie Martin", role: "Directrice Adjointe", image: null },
    { name: "Pierre Durand", role: "Chef de Projet", image: null },
    { name: "Sophie Bernard", role: "Responsable Marketing", image: null },
  ];

  // Sample achievements
  const achievements = [
    { title: "Projet Alpha", client: "Entreprise A", description: "Transformation digitale complète" },
    { title: "Projet Beta", client: "Entreprise B", description: "Stratégie de croissance" },
    { title: "Projet Gamma", client: "Entreprise C", description: "Optimisation des processus" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className={cn("relative min-h-[70vh] flex items-center overflow-hidden")}>
        <div className={cn("absolute inset-0 bg-gradient-to-br", subsidiary.gradientClass)} />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Video Play Button (Placeholder) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30">
            <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32">
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
                <Icon className="w-8 h-8 text-white" />
              </div>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                Filiale DM+ Group
              </span>
            </div>

            <h1 className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              {subsidiary.name}
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-4">
              {subsidiary.slogan}
            </p>

            <p className="text-lg text-white/70 max-w-2xl mb-8">
              {subsidiary.longDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-white text-foreground font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Nous contacter
              </a>
              <a
                href="#realisations"
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
              >
                Voir nos réalisations
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className={cn("inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r text-white", subsidiary.gradientClass)}>
              Nos Services
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
              Ce que nous vous offrons
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {subsidiary.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br", subsidiary.gradientClass)}>
                  <span className="text-white font-bold text-lg">0{index + 1}</span>
                </div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                  {service}
                </h3>
                <p className="text-muted-foreground">
                  Solutions sur mesure pour répondre à vos besoins spécifiques dans ce domaine.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="realisations" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className={cn("inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r text-white", subsidiary.gradientClass)}>
              Réalisations
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
              Nos projets phares
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 group"
              >
                <div className={cn("h-48 rounded-xl mb-6 bg-gradient-to-br opacity-20", subsidiary.gradientClass)} />
                <span className="text-sm text-muted-foreground">{achievement.client}</span>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className={cn("inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r text-white", subsidiary.gradientClass)}>
              L'Équipe
            </span>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
              Nos experts
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className={cn("w-32 h-32 mx-auto rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-br group-hover:scale-105 transition-transform duration-300", subsidiary.gradientClass)}>
                  <Users className="w-12 h-12 text-white/60" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className={cn("py-24 bg-gradient-to-br relative overflow-hidden", subsidiary.gradientClass)}>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Briefcase className="w-16 h-16 text-white/60 mx-auto mb-6" />
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
              Rejoignez notre équipe
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Nous recherchons des talents passionnés pour renforcer nos équipes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-foreground font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Voir les offres
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation to Other Subsidiaries */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to={`/filiale/${prevSubsidiary.slug}`}
              className="flex items-center gap-3 group"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <span className="text-sm text-muted-foreground">Précédent</span>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  DM+ {prevSubsidiary.shortName}
                </div>
              </div>
            </Link>

            <Link
              to={`/filiale/${nextSubsidiary.slug}`}
              className="flex items-center gap-3 text-right group"
            >
              <div>
                <span className="text-sm text-muted-foreground">Suivant</span>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  DM+ {nextSubsidiary.shortName}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubsidiaryPage;
