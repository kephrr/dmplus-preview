import Layout from "@/components/layout/Layout";
import AboutUsSection from "@/components/home/AboutUsSection";
import CTASection from "@/components/home/CTASection";
import OurEntities from "@/components/home/OurEntities";
import { subsidiaries } from "@/data/subsidiaries";
import { SubsidiaySlide } from "@/types/subsidiaries";
import HeroSection from "@/components/home/HeroSection";
import KeyFigures from "@/components/home/NosChiffresCles";
import OurValues from "@/components/home/NosValeurs";
import TrustedBy from "@/components/home/TrustedBy";
import marketing from "@/assets/LOGOTYPE [Récupéré]-06.png"
import analytics from "@/assets/LOGOTYPE [Récupéré]-08.png"
import investment from "@/assets/LOGOTYPE [Récupéré]-10.png"
import technologies from "@/assets/LOGOTYPE [Récupéré]-12.png"
import distribution from "@/assets/LOGOTYPE [Récupéré]-14.png"
import academy from "@/assets/LOGOTYPE [Récupéré]-18.png"
import services from "@/assets/LOGOTYPE [Récupéré]-20.png"
import Actus from "@/components/home/Actus";

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
    bgClass: "bg-[#D5252E]",
    logo: marketing
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
    bgClass: "bg-[#DEB833]",
    logo: investment
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
    bgClass: "bg-[#2A95BF]",
    logo: technologies
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
    bgClass: "bg-[#800020]",
    logo: academy
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
      "Externaliser ", "l'excellence"," opérationnelle"
    ],
    colorClass: subsidiaries[4].colorClass,
    bgClass: "bg-[#1871B3]",
    logo: services
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
      "Partenaire stratégique pour pénétrer, ", "développer et conquérir", "de nouveaux marchés."
    ],
    colorClass: subsidiaries[5].colorClass,
    bgClass: "bg-[#446E25]",
    logo: distribution
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
    bgClass: "bg-[#003366]",
    logo: analytics
  },
];



const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
      <OurValues />
      <KeyFigures />
      <OurEntities data={subsidiarySlides}/>
      <div className="bg-slate-500/25 h-[0.5px] w-[80%] mx-auto mt-6"></div>
      <TrustedBy/>
      <Actus/>
      {/*<ProcessSection/> <CarouselDomain/>*/}
      <CTASection />
    </Layout>
  );
};

export default Index;
