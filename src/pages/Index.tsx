import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ApproachSection from "@/components/home/ApproachSection";
import SubsidiariesSection from "@/components/home/SubsidiariesSection";
import CTASection from "@/components/home/CTASection";
import ProcessSection from "@/components/home/ProcessusSteps";
import CarouselDomain from "@/components/home/CarouselDomain";
import { subsidiaries } from "@/data/subsidiaries";
import { SubsidiaySlide } from "@/types/subsidiaries";

export const subsidiarySlides: SubsidiaySlide[] = [
  {
    id: subsidiaries[0].id,
    bigTitle: "Nos domaines d’expertise",
    title: subsidiaries[0].name,
    description: subsidiaries[0].description,
    longDescription: subsidiaries[0].longDescription,
    services: subsidiaries[0].services,
    icon: subsidiaries[0].icon,
    bgImage: subsidiaries[0].bgImage,
    slogan: [
      "Stratégies digitales et ","créatives"," pour amplifier votre marque"
    ],
    colorClass: subsidiaries[0].colorClass,
    bgClass: "bg-gradient-to-r from-red-400 to-red-600"
  },
  {
    id: subsidiaries[1].id,
    bigTitle: "Nos domaines d’expertise",
    title: subsidiaries[1].name,
    description: subsidiaries[1].description,
    longDescription: subsidiaries[1].longDescription,
    services: subsidiaries[1].services,
    icon: subsidiaries[1].icon,
    bgImage: subsidiaries[1].bgImage,
    slogan: [
      "Solutions financières pour ", "maximiser"," vos rendements"
    ],
    colorClass: subsidiaries[1].colorClass,
    bgClass: "bg-gradient-to-r from-yellow-400 to-yellow-600"
  },
  {
    id: subsidiaries[2].id,
    bigTitle: "Nos domaines d’expertise",
    title: subsidiaries[2].name,
    description: subsidiaries[2].description,
    longDescription: subsidiaries[2].longDescription,
    services: subsidiaries[2].services,
    icon: subsidiaries[2].icon,
    bgImage: subsidiaries[2].bgImage,
    slogan: [
      "","Innovation", "technologique et transformation digitale sur mesure"
    ],
    colorClass: subsidiaries[2].colorClass,
    bgClass: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  {
    id: subsidiaries[3].id,
    bigTitle: "Nos domaines d’expertise",
    title: subsidiaries[3].name,
    description: subsidiaries[3].description,
    longDescription: subsidiaries[3].longDescription,
    services: subsidiaries[3].services,
    icon: subsidiaries[3].icon,
    bgImage: subsidiaries[3].bgImage,
    slogan: [
      "Formation d'excellence pour développer les ", "talents"," de demain"
    ],
    colorClass: subsidiaries[3].colorClass,
    bgClass: "bg-gradient-to-r from-rose-400 to-rose-600"
  },
  {
    id: subsidiaries[4].id,
    bigTitle: "Nos domaines d’expertise",
    title: subsidiaries[4].name,
    description: subsidiaries[4].description,
    longDescription: subsidiaries[4].longDescription,
    services: subsidiaries[4].services,
    icon: subsidiaries[4].icon,
    bgImage: subsidiaries[4].bgImage,
    slogan: [
      "Espaces  d'","innovation et d'incubation"," pour entrepreneurs visionnaires"
    ],
    colorClass: subsidiaries[4].colorClass,
    bgClass: "bg-gradient-to-r from-sky-400 to-sky-600"
  },
  {
    id: subsidiaries[5].id,
    bigTitle: "Nos domaines d’expertise",
    title: subsidiaries[5].name,
    description: subsidiaries[5].description,
    longDescription: subsidiaries[5].longDescription,
    services: subsidiaries[5].services,
    icon: subsidiaries[5].icon,
    bgImage: subsidiaries[5].bgImage,
    slogan: [
      "Solutions logistiques"," optimisées ","pour une supply chain performante"
    ],
    colorClass: subsidiaries[5].colorClass,
    bgClass: "bg-gradient-to-r from-green-400 to-green-600"
  },
  {
    id: subsidiaries[6].id,
    bigTitle: "Nos domaines d’expertise",
    title: subsidiaries[6].name,
    description: subsidiaries[6].description,
    longDescription: subsidiaries[6].longDescription,
    services: subsidiaries[6].services,
    icon: subsidiaries[6].icon,
    bgImage: subsidiaries[6].bgImage,
    slogan: [
      "Intelligence "," décisionnelle"," et exploitation avancée des données"
    ],
    colorClass: subsidiaries[6].colorClass,
    bgClass: "bg-gradient-to-r from-indigo-400 to-indigo-600"
  },
];



const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <CarouselDomain data={subsidiarySlides}/>
      {/*<ProcessSection/> <CarouselDomain/>*/}
      <CTASection />
    </Layout>
  );
};

export default Index;
