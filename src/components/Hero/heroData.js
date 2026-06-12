import cloudServer from "../../assets/images/hero/cloud-server.png";
import cloudVPS from "../../assets/images/hero/cloud-vps.png";
import aiServer from "../../assets/images/hero/ai-server.png";

const heroSlides = [
  {
    id: 1,
    badge: "SINCE 2010",
    title1: "AI-Powered Enterprise",
    title2: "Cloud & Hosting",
    title3: "Infrastructure",
    highlight: "High Performance",
  

    primaryBtn: "Find Your Domain",
    secondaryBtn: "Book a Demo",

    image: cloudServer
  },

  {
    id: 2,
    badge: "CLOUD VPS",
    title1: "Enterprise",
    title2: "Cloud VPS &",
    title3: "VDS Servers",
    highlight: "Lightning Fast",

    primaryBtn: "View VPS Plans",
    secondaryBtn: "Contact Sales",

    image: cloudVPS
  },

  {
    id: 3,
    badge: "AI INFRA",
    title1: "GPU Servers",
    title2: "AI Agents &",
    title3: "Automation",
    highlight: "AI Ready",

    primaryBtn: "Explore AI",
    secondaryBtn: "Book Demo",

    image: aiServer
  }
];

export default heroSlides;