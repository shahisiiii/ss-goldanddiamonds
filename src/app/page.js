import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Staff from "@/components/Staff";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Staff />
        <Collections />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
