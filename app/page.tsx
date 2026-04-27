import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Zodiac from "@/components/Zodiac";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Specialties />
      <Zodiac />
      <Gallery />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
