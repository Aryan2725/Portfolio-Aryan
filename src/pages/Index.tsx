import HeroSection from "@/components/HeroSection";
import LivePrototypes from "@/components/LivePrototypes";
import FeaturedProject from "@/components/FeaturedProject";
import TeardownsAndStrategy from "@/components/TeardownsAndStrategy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LivePrototypes />
      <FeaturedProject />
      <TeardownsAndStrategy />
      <Footer />
    </main>
  );
};

export default Index;
