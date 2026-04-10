import HeroSection from "@/components/HeroSection";
import LivePrototypes from "@/components/LivePrototypes";
import FeaturedProject from "@/components/FeaturedProject";
import TeardownsAndStrategy from "@/components/TeardownsAndStrategy";
import OperationalCaseStudies from "@/components/OperationalCaseStudies";
import ProductDocumentation from "@/components/ProductDocumentation"; 
import LeadershipAndCerts from "@/components/LeadershipAndCerts";
import Footer from "@/components/Footer";
import { LineChart, Activity, Terminal } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <HeroSection />
      
      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-background relative z-10 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The Operator Profile
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                I am an M.Sc. Economics graduate from IIIT Lucknow who builds products and runs operations. Most candidates fall into one of two buckets: pure strategists who don't know how to execute, or generalist operators who don't understand unit economics. 
              </p>
              <p>
                I sit squarely in the middle. I evaluate every problem through the lens of take rates, margins, and customer acquisition costs, and then I build the technical or operational workflows required to fix them. I am built to operate without a playbook in high-velocity, unstructured environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE WORK (PROJECTS, STRATEGY, OPS, & PRDs) --- */}
      <LivePrototypes />
      <FeaturedProject />
      <TeardownsAndStrategy />
      <OperationalCaseStudies />
      <ProductDocumentation /> 

      {/* --- SKILLS SECTION --- */}
      <section className="py-28 px-6 bg-secondary/5 border-t border-border" id="skills">
        <div className="container mx-auto max-w-6xl">
          <div className="section-fade-in mb-14 text-center">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              The Arsenal
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Hard Skills & Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The tools and frameworks I use to bridge the gap between strategy and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Strategy & Econ */}
            <div className="glow-border-hover rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Product & Economics</h3>
              <ul className="space-y-3">
                {["Unit Economics (CAC/LTV)", "P&L Auditing", "GTM Strategy & Pricing", "A/B Testing Logic", "PRD Writing"].map(skill => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Operations */}
            <div className="glow-border-hover rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Operational Execution</h3>
              <ul className="space-y-3">
                {["Agile/Scrum (JIRA)", "SLA Management", "Process Mapping", "Vendor Procurement", "Regulatory Compliance"].map(skill => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Tech & AI */}
            <div className="glow-border-hover rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Technical Stack</h3>
              <ul className="space-y-3">
                {["LLM Orchestration (Genkit)", "SQL & Advanced Excel (VBA)", "React / Next.js / Tailwind", "Gemini & Claude APIs", "Figma Prototyping"].map(skill => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP & CERTIFICATIONS COMPONENT --- */}
      <LeadershipAndCerts />

      <Footer />
    </main>
  );
};

export default Index;