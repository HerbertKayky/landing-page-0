import { About } from "./components/about";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Specialties } from "./components/specialties/couple";
import { SpecialtiesIndividual } from "./components/specialties/individual";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Specialties />
      <SpecialtiesIndividual />
      <About />
    </>
  );
}
