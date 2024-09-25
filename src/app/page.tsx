import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Specialties } from "./components/specialties";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Specialties />
    </>
  );
}
