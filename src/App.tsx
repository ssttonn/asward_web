import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./components/About";
import NavBar from "./components/NavBar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <section className="z-0 min-h-screen bg-blue-500"></section>
    </main>
  );
};

export default App;
