import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import BrandStatement from './components/BrandStatement';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <Collections />
        <FeaturedProducts />
        <WhyChooseUs />
        <BrandStatement />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
