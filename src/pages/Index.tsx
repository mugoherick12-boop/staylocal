import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HotelGrid from "@/components/HotelGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HotelGrid />
      <Footer />
    </div>
  );
};

export default Index;
