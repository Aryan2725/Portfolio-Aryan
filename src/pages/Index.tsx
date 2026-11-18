import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProofOfWork from "@/components/ProofOfWork";
import InteractiveEngineSandbox from "@/components/InteractiveEngineSandbox";
import OperationalCaseStudies from "@/components/OperationalCaseStudies";
import TeardownsAndStrategy from "@/components/TeardownsAndStrategy";
import ProductDocumentation from "@/components/ProductDocumentation";
import LeadershipAndCerts from "@/components/LeadershipAndCerts";
import Footer from "@/components/Footer";
import { LineChart, Activity, Terminal, CheckCircle2, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Sticky command navigation */}
      <Navbar />

      {/* Main Container */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Flagship Production Proof of Work (Anveshan) */}
        <ProofOfWork />

        {/* Interactive Tactical Logic Sandbox */}
        <InteractiveEngineSandbox />

        {/* Ground-Truth Operational Case Studies (Freshly & StrainX) */}
        <OperationalCaseStudies />

        {/* Strategic Teardowns & Research Memos */}
        <TeardownsAndStrategy />

        {/* Technical PRDs & Data Contracts */}
        <ProductDocumentation />

        {/* Hard Skills & Technical Stack */}
        <section id="skills" className="py-24 px-6 border-b border-border bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-14">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium block mb-2">
                Execution Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Hard Skills & Technical Stack
              </h2>
              <p className="text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                The analytical models, operational frameworks, and code stack I deploy to build high-leverage business systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pillar 1: Strategy & Econ */}
              <div className="p-6 rounded-lg border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center mb-4">
                    <LineChart className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-3">Unit Economics & P&L</h3>
                  <ul className="space-y-2 text-xs font-mono text-muted-foreground">
                    {[
                      "CAC / LTV Cohort Modeling",
                      "P&L Audit & Margin Attribution",
                      "Contribution Margin 1 & 2 Optimization",
                      "A/B Testing Statistical Validation",
                      "Dynamic Pricing & Discount Elasticity",
                    ].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pillar 2: Operations */}
              <div className="p-6 rounded-lg border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-3">Operations & Supply Chain</h3>
                  <ul className="space-y-2 text-xs font-mono text-muted-foreground">
                    {[
                      "Bill of Materials (BOM) Explosion",
                      "Two-Bucket Inventory Netting",
                      "SLA & RTO Leakage Mitigation",
                      "B2B Chemical & Hardware Procurement",
                      "ISO 9001:2015 Lead Auditor Quality Frameworks",
                    ].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pillar 3: Tech & Engineering */}
              <div className="p-6 rounded-lg border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center mb-4">
                    <Terminal className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-3">Software & Data Engineering</h3>
                  <ul className="space-y-2 text-xs font-mono text-muted-foreground">
                    {[
                      "Python 3.13 / 3.14 (FastAPI, Pytest, Pydantic)",
                      "SQL & In-Memory Bitset Indexing",
                      "React 18 / TypeScript / Tailwind CSS",
                      "RESTful APIs & Webhook Integrations",
                      "Figma Design Systems & Workflow Prototyping",
                    ].map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pillar 4: AI-Native Prototyping & Solution Building */}
              <div className="p-6 rounded-lg border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-3">AI Stack & Vibe Coding</h3>
                  <ul className="space-y-2 text-xs font-mono text-muted-foreground">
                    {[
                      "Antigravity · Claude Code · Codex",
                      "Claude Cowork · Chat · Gemini · ChatGPT",
                      "Cursor · Lovable · v0 · Emergent",
                      "Vercel · Netlify · Render Deployment",
                      "Docker Containerization (Mastering)",
                    ].map((skill, idx) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${idx === 4 ? "text-amber-400" : "text-emerald-400"}`} />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Ecosystem Building */}
        <LeadershipAndCerts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
