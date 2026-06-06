import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import HeroSection from "./pages/Home";
import AboutSection from "./pages/About";
import ServicesSection from "./pages/Services";
import GallerySection from "./pages/Gallery";
import FAQSection from "./pages/FAQ";
import ContactSection from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      <Footer />
    </div>
  );
}