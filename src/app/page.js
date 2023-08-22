import About from "@/components/about/page";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import TopOffer from "@/components/TopOffer";
import Offers from "./offers/page";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <TopOffer />
      <Offers />
    </section>
  );
}
