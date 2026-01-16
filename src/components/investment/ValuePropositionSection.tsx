import { Check, Shield, Target, BarChart, Home, Users, Zap, Lightbulb } from 'lucide-react';
import { InvestmentProps } from '@/types/investment';

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Indépendance",
    description: "Conseils objectifs, sans vendre de produits financiers maison"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Pédagogie",
    description: "Vulgarisation de la finance pour une compréhension claire de vos investissements"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Orientation résultats",
    description: "Chaque recommandation vise un impact concret sur vos finances personnelles"
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Impact local",
    description: "En investissant via la BRVM ou projets locaux, vous contribuez au développement de l'économie"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Proximité humaine",
    description: "Un conseiller dédié, à l'écoute et réactif à chaque étape de votre parcours"
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Transparence & éthique",
    description: "Conditions claires, échanges confidentiels, engagement total"
  }
];

export const ValuePropositionSection = ({ subsidiary }: InvestmentProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre approche
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subsidiary.name} se distingue par une approche fondée sur des valeurs solides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-investment/10 flex items-center justify-center text-investment mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-8 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <Zap className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Notre promesse</h3>
            <p className="text-xl">
              Plus qu'un conseil, un vrai + pour votre patrimoine. 
              Construisez un avenir financier plus sûr, plus responsable, plus proche de vos ambitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
