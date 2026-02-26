import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import WhatIsPuffedRice from "@/components/WhatIsPuffedRice";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import Cities from "@/components/Cities";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
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
