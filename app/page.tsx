import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Courses />
      <Footer />
    </main>
  );
}
