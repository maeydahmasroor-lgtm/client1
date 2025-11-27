import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testinomial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <About />
      <Features />
      <Testimonials/>
      <FAQ/>
      <Footer />
    </main>
  );
}
