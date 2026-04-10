import { FileText, Activity, ArrowUpRight, Figma, Beaker } from "lucide-react";

const OperationalCaseStudies = () => {
  return (
    <section className="py-28 px-6 border-t border-border bg-secondary/5">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="section-fade-in mb-14">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Operational Execution
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ground-Truth Operations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Where the strategy meets the floor. Execution debriefs from 0→1 builds and zero-buffer supply chains.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: StrainX Biotech */}
          <div className="glow-border-hover rounded-2xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
                <Beaker className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">StrainX Biotech</h3>
                <p className="text-sm font-medium text-muted-foreground mb-1">Product Analyst Intern · 55 Days</p>
              </div>
            </div>

            {/* The Hard Metric */}
            <p className="text-emerald-500 font-semibold text-sm mb-5 pb-4 border-b border-border/50">
              5 work streams · 55 milestones · Figma prototype
            </p>
            
            <div className="flex-1 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground">The Bottleneck:</strong> Stepped into an unstructured lab build across 7 operational pillars with zero PMO visibility or procurement pipelines.
              </div>
              <div>
                <strong className="text-foreground">The Execution:</strong> Built a dynamic 55+ milestone tracker (adopted for CFO-level reviews), cold-contacted 60+ B2B chemical vendors to establish a compliant supply chain, and delivered multi-tab regulatory intelligence on 5 sugar substitutes to R&D.
              </div>
              <div className="italic border-l-2 border-primary/50 pl-3 mt-4 text-foreground/80 bg-primary/5 py-2 pr-2 rounded-r">
                "When there is no visibility, build the visibility layer first. Once you can see the system, you can optimize it."
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/50">
              <a 
                href="/strainx_case_study.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all shadow-[0_0_15px_-3px_hsl(var(--glow)/0.3)]"
              >
                <FileText className="w-4 h-4" />
                View Case Study
              </a>
              <a 
                href="https://www.figma.com/design/KovhY5BgqxoGxAHdqI3UTe/two-layered-admin-approval?node-id=0-1&t=qV5evKZXEkHO4PTe-1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-secondary/50 text-foreground text-sm font-medium hover:bg-secondary transition-all"
              >
                <Figma className="w-4 h-4" />
                2FA Prototype
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Card 2: Freshly */}
          <div className="glow-border-hover rounded-2xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Freshly (JustFresh)</h3>
                <p className="text-sm font-medium text-muted-foreground mb-1">Product & Ops Analyst · Jun-Aug 2025</p>
              </div>
            </div>

            {/* The Hard Metric */}
            <p className="text-emerald-500 font-semibold text-sm mb-5 pb-4 border-b border-border/50">
              CFO-level reporting · 3 simultaneous live systems
            </p>
            
            <div className="flex-1 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground">The Bottleneck:</strong> D2C perishable produce has zero inventory buffer. Over-order = margin bleed; Under-order = permanent churn.
              </div>
              <div>
                <strong className="text-foreground">The Execution:</strong> Owned intraday demand sensing and micro-replenishments to prevent stockouts. Handled daily CFO-level COD cash reconciliation with zero discrepancies. Built an automated real-time invoice pipeline eliminating month-end lag.
              </div>
              <div className="italic border-l-2 border-primary/50 pl-3 mt-4 text-foreground/80 bg-primary/5 py-2 pr-2 rounded-r">
                "You don't need perfect forecasting. You need a fast feedback loop and the willingness to act on an incomplete signal."
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <a 
                href="/freshly_case_study.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all shadow-[0_0_15px_-3px_hsl(var(--glow)/0.3)] w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                View Case Study
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationalCaseStudies;