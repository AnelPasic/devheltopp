import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { OneSupplier } from "../components/OneSupplier";
import { Contact } from "../components/Contact";
import { Aktuelt } from "../components/Aktuelt";
import { References } from "../components/References";
import { Reviews } from "../components/Reviews";

export function HomePage() {
  return (
    <>
      <Hero />
      <References />
      <Services />
      <OneSupplier />
      <About />
      <Reviews />
      <Aktuelt />
      <Contact />
    </>
  );
}
