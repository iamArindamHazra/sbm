import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import WhatIsPuffedRice from "@/components/WhatIsPuffedRice";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import Cities from "@/components/Cities";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";
import { site } from "@/lib/site";

export default function Home() {
  const productSchemas = [
    {
      "@type": "Product",
      name: "LAGHU",
      image: `${site.url}/img/laghu.jpg`,
      brand: site.name,
      description:
        "LAGHU puffed rice – completely machine-made, fresh, pure, stone-free, with long grains and multiple packet sizes.",
    },
    {
      "@type": "Product",
      name: "LALAT",
      image: `${site.url}/img/lalat.jpg`,
      brand: site.name,
      description:
        "LALAT puffed rice – machine-made, fresh, pure, stone-free, with longer grains and multiple packet sizes.",
    },
  ];

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is puffed rice (muri)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puffed rice, also called muri, is a light, crispy snack made by heating rice grains under controlled conditions. It is a staple breakfast and snack across the Indian subcontinent.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver Sonar Bangla Muri outside India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sonar Bangla Muri supplies bulk puffed rice across India and also to the USA through distributors and bulk buyers.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Sonar Bangla Muri located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sonar Bangla Muri operates from Galsi, Purba Bardhaman, West Bengal, India. The factory is near Galsi Chowmatha beside NH 19.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sonar Bangla Muri FSSAI approved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sonar Bangla Muri is manufactured in an FSSAI-compliant facility with strict hygiene processes and quality checks.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [...productSchemas, faqSchema],
        }}
      />
      <Banner />
      <Stats />
      <WhatIsPuffedRice />
      <About />
      <WhyUs />
      <Products />
      <Cities />
      <Reviews />
      <Contact />
    </>
  );
}
