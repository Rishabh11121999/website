import cloudHostingImg from "../assets/images/services/reseller.png";
import vpsHostingImg from "../assets/images/services/vps.png";

export const services = [
  {
    slug: "cloud-hosting",

    title: "Cloud Hosting Solutions",

    subtitle:
      "High Performance Cloud Infrastructure for Growing Businesses",

    breadcrumb: "Cloud Hosting",

    heroImage:cloudHostingImg,

    shortDescription:
      "Deploy your websites, applications, and business workloads on secure, scalable cloud infrastructure powered by Datanet Hosting.",

    features: [
      "99.99% Uptime Guarantee",
      "NVMe SSD Cloud Storage",
      "Instant Scalability",
      "Free Migration Support",
      "24x7 Expert Assistance"
    ],

    content: {
      title:
        "Why Choose Cloud Hosting?",

      description:
        "Cloud hosting provides unmatched performance, reliability, and scalability. Unlike traditional hosting, resources are distributed across multiple servers, ensuring maximum uptime and flexibility."
    },

    pricing: [
      {
        plan: "Starter",
        price: "₹499/mo",
        features: [
          "2 CPU Cores",
          "4GB RAM",
          "50GB SSD",
          "Free SSL"
        ]
      },

      {
        plan: "Business",
        price: "₹999/mo",
        features: [
          "4 CPU Cores",
          "8GB RAM",
          "100GB SSD",
          "Daily Backup"
        ]
      },

      {
        plan: "Enterprise",
        price: "₹1999/mo",
        features: [
          "8 CPU Cores",
          "16GB RAM",
          "200GB SSD",
          "Priority Support"
        ]
      }
    ],

    faqs: [
      {
        question:
          "What is Cloud Hosting?",

        answer:
          "Cloud hosting uses multiple connected servers to provide scalability and high availability."
      },

      {
        question:
          "Is cloud hosting secure?",

        answer:
          "Yes, cloud hosting includes enterprise-grade security and regular backups."
      },

      {
        question:
          "Can I upgrade anytime?",

        answer:
          "Yes, resources can be scaled instantly without downtime."
      }
    ]
  },

  {
    slug: "vps-hosting",

    title: "VPS Hosting",

    subtitle:
      "Dedicated Resources With Complete Control",

    breadcrumb: "VPS Hosting",

    heroImage:vpsHostingImg,

    shortDescription:
      "Powerful VPS servers with dedicated resources, root access and enterprise-grade performance.",

    features: [
      "Dedicated CPU",
      "Root Access",
      "NVMe SSD",
      "DDoS Protection",
      "24x7 Support"
    ],

    content: {
      title:
        "Powerful VPS Infrastructure",

      description:
        "Our VPS servers provide dedicated resources for high-performance websites and applications."
    },

    pricing: [
      {
        plan: "Basic",
        price: "₹799/mo",
        features: [
          "2 CPU",
          "4GB RAM",
          "50GB SSD"
        ]
      },

      {
        plan: "Professional",
        price: "₹1499/mo",
        features: [
          "4 CPU",
          "8GB RAM",
          "100GB SSD"
        ]
      }
    ],

    faqs: [
      {
        question:
          "Do I get root access?",

        answer:
          "Yes, all VPS plans include full root access."
      }
    ]
  }
];