import { FileText, Activity, ArrowUpRight, Figma, Beaker } from "lucide-react";

const OperationalCaseStudies = () => {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="section-fade-in mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Operational Execution</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ground-Truth System Building</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Execution debriefs from 0→1 and zero-buffer environments.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: StrainX Biotech */}
          <div className="glow-border-hover rounded-xl bg-card p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Beaker className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Architecting Operations for a 0→1 Biotech Lab</h3>
                <p className="text-sm font-medium text-primary/80 mb-1">StrainX Biotech | Product Analyst Intern</p>
                <p className="text-xs text-muted-foreground">55 Days (Aug – Oct 2025)</p>
              </div>
            </div>
            
            <div className="flex-1 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground">The Bottleneck:</strong> Stepped into an unstructured lab build across 7 operational pillars with zero PMO visibility or procurement pipelines.
              </div>
              <div>
                <strong className="text-foreground">The Execution:</strong> Built a dynamic 55+ milestone tracker (adopted for CFO-level reviews), cold-contacted 60+ B2B chemical vendors to establish a compliant supply chain, and delivered multi-tab regulatory intelligence on 5 sugar substitutes to R&D.
              </div>
              <div className="italic border-l-2 border-primary/30 pl-3 mt-4">
                "When there is no visibility, build the visibility layer first. Once you can see the system, you can optimize it."
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a 
                href="/strainx_case_study.pdf" 
                target="_self" 
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Case Study
              </a>
              <a 
                href="https://www.figma.com/design/KovhY5BgqxoGxAHdqI3UTe/two-layered-admin-approval?node-id=0-1&t=qV5evKZXEkHO4PTe-1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/40 transition-all"
              >
                <Figma className="w-4 h-4" />
                2FA Prototype
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Card 2: Freshly */}
          <div className="glow-border-hover rounded-xl bg-card p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Live Ops in a Zero-Buffer Supply Chain</h3>
                <p className="text-sm font-medium text-primary/80 mb-1">Freshly (JustFresh) | Product & Ops Analyst</p>
                <p className="text-xs text-muted-foreground">Jun – Aug 2025</p>
              </div>
            </div>
            
            <div className="flex-1 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground">The Bottleneck:</strong> D2C perishable produce has zero inventory buffer. Over-order = margin bleed; Under-order = permanent churn.
              </div>
              <div>
                <strong className="text-foreground">The Execution:</strong> Owned intraday demand sensing and micro-replenishments to prevent stockouts. Handled daily CFO-level COD cash reconciliation with zero discrepancies. Built an automated real-time invoice pipeline eliminating month-end lag.
              </div>
              <div className="italic border-l-2 border-primary/30 pl-3 mt-4">
                "You don't need perfect forecasting. You need a fast feedback loop and the willingness to act on an incomplete signal."
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="/freshly_case_study.pdf" 
                target="_self" 
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto"
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