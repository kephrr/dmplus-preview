import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ApproachSection from "@/components/home/ApproachSection";
import SubsidiariesSection from "@/components/home/SubsidiariesSection";
import CTASection from "@/components/home/CTASection";
import ProcessSection from "@/components/home/ProcessusSteps";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <SubsidiariesSection />
      {/*<ProcessSection/>*/}
      <CTASection />
    </Layout>
  );
};

export default Index;
