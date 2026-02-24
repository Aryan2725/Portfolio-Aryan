import HeroSection from "@/components/HeroSection";
import LivePrototypes from "@/components/LivePrototypes";
import ProductTeardowns from "@/components/ProductTeardowns";
import StrategySection from "@/components/StrategySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LivePrototypes />
      <ProductTeardowns />
      <StrategySection />
      <Footer />
    </main>
  );
};

export default Index;
