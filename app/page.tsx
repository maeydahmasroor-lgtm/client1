import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import { CustomMarquee } from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <CustomMarquee />
      <Features />
      <About />
      <Courses />
      <Footer />
    </main>
  );
}
