import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Videos from "../components/Videos";
import Attractions from "../components/Attractions";
import GoogleMap from "../components/GoogleMap";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Videos />
      <Attractions />
      <GoogleMap />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}