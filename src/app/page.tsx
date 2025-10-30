import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SolidWoodCabinets from '@/components/SolidWoodCabinets';
import FeaturedShowcase from '@/components/FeaturedShowcase';
import FreeKitchenDesign from '@/components/FreeKitchenDesign';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import OurServices from '@/components/OurServices';
import OttawaInstallation from '@/components/OttawaInstallation';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <OttawaInstallation />
      <SolidWoodCabinets />
      <FeaturedShowcase />
      <OurServices />
      <Testimonials />
      <FreeKitchenDesign />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}