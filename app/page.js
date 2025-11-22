import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Waves } from "@/components/ui/wave-background"; // <-- Import Waves

export default function Home() {
  return (
    <>
      <div className="w-64 h-64 relative border">
        <Waves
          className="absolute top-0 left-0 w-full h-full"
          strokeColor="#ffffffff"
          backgroundColor="#000000"
          pointerSize={0.1}
        />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
