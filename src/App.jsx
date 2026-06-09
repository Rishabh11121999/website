import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Clients from "./components/TrustedClients/Clients";
import HostingSolutions from "./components/HostingSolutions/HostingSolutions";
import WhyChooseDNH from "./components/WhyChooseUs/WhyChooseDNH";
import BlogSection from "./components/BlogSection/BlogSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <HostingSolutions />
      <WhyChooseDNH />
      <BlogSection />
    </>
  );
}

export default App;