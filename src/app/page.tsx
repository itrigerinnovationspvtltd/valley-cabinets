import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SolidWoodCabinets from '@/components/SolidWoodCabinets';
import FeaturedShowcase from '@/components/FeaturedShowcase';
import FreeKitchenDesign from '@/components/FreeKitchenDesign';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import ChooseYourStyle from '@/components/ChooseYourStyle';
import DIYVideos from '@/components/DIYVideos';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SolidWoodCabinets />
      <FeaturedShowcase />
      <FreeKitchenDesign />
      <HowItWorks />
      <Features />
      <ChooseYourStyle />
      <DIYVideos />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}