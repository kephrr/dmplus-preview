import { Briefcase, BarChart2, Target, Users, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import { InvestmentProps } from '@/types/investment';

const expertiseItems = [
  {
    icon: <BarChart2 className="w-8 h-8 text-investment" />,
    title: "Investissement boursier (BRVM & autres marchés)",
    items: [
      "Analyse des titres cotés : actions, obligations, OPCVM",
      "Veille active sur les opportunités de marché",
      "Recommandations personnalisées",
      "Appui à l'ouverture de comptes titres via nos partenaires agréés",
      "Suivi des portefeuilles et ajustements stratégiques"
    ]
  },
  {
    icon: <Briefcase className="w-8 h-8 text-investment" />,
    title: "Placements alternatifs & diversification",
    items: [
      "Études de projets immobiliers (locatif, résidentiel, tertiaire)",
      "Accompagnement sur les obligations d'État, bons de trésor, placements sécurisés",
      "Analyse de produits structurés ou participatifs selon votre profil de risque"
    ]
  },
  {
    icon: <Target className="w-8 h-8 text-investment" />,
    title: "Conseil patrimonial personnalisé",
    items: [
      "Profilage investisseur : objectifs, horizon, tolérance au risque",
      "Construction de portefeuilles diversifiés et adaptés",
      "Stratégies d'optimisation à moyen et long terme : retraite, éducation, succession"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-investment" />,
    title: "Suivi et accompagnement continu",
    items: [
      "Diagnostic initial offert",
      "Stratégie d'investissement sur mesure",
      "Suivi via tableaux de bord personnalisés",
      "Revue régulière des performances et ajustements",
      "Contenus pédagogiques pour renforcer la compréhension client"
    ]
  }
];

export const ExpertiseSection = ({ subsidiary }: InvestmentProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos domaines d'expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-investment/10 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
              <ul className="space-y-2">
                {item.items.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-investment mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
