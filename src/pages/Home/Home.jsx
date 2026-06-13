import Hero from "../../components/Hero/Hero";
import Clients from "../../components/TrustedClients/Clients";
import HostingSolutions from "../../components/HostingSolutions/HostingSolutions";
import WhyChooseDNH from "../../components/WhyChooseUs/WhyChooseDNH";
import Testimonials from "../../components/Testimonials/Testimonials";
import BlogSection from "../../components/BlogSection/BlogSection";
import CTABanner from "../../components/CTASection/CTABanner";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <HostingSolutions />
      <WhyChooseDNH />
      <Testimonials />
      <BlogSection />      
      <CTABanner />
    </>
  );
};

export default Home;