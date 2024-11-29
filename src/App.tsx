import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
