import { ArrowUpRight, Globe, Rocket } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="py-28 px-6 border-y border-border/50 relative overflow-hidden bg-background" id="featured-project">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, hsl(217 91% 60% / 0.04) 0%, transparent 70%)'
      }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="section-fade-in flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Featured Deployment
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Life Through a Lens: Applied Economics
            </h2>
          </div>
          {/* LIVE Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold shrink-0 self-start md:self-end mb-1 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
            <Rocket className="w-3.5 h-3.5" />
            LIVE PLATFORM
          </div>
        </div>

        {/* Note: Paste your actual Vercel link below! */}
        <a 
          href="https://life-through-a-lens-of-management-j.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block group glow-border-hover rounded-2xl border border-border bg-card p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 cursor-pointer relative overflow-hidden" 
          style={{
            background: 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--secondary)/0.3))'
          }}
        >
          {/* Hover highlight effect */}
          <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
              <Globe className="w-8 h-8 text-primary" />
            </div>

            <div className="flex-1 space-y-6">
              
              {/* Hard Metric / Outcome Statement */}
              <p className="text-emerald-500 font-semibold text-sm border-b border-border/50 pb-4 inline-block">
                Shipped 0→1 in under 48 hours to validate a personal analytics framework
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                A live web platform applying economic frameworks (opportunity cost, resource allocation, marginal utility) to real-world dilemmas. It acts as a unified personal analytics dashboard, aggregating daily routines and metrics into a centralized visual workspace to track KPIs and optimize long-term goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="bg-background/50 p-5 rounded-xl border border-border/50">
                  <h4 className="text-sm font-bold text-foreground mb-2">The Execution</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built and deployed rapidly using React and Supabase. Demonstrates high-velocity MVP execution and the ability to leverage AI tooling (Cursor/Lovable) for immediate front-end shipping without engineering bottlenecks.
                  </p>
                </div>

                <div className="bg-background/50 p-5 rounded-xl border border-border/50">
                  <h4 className="text-sm font-bold text-foreground mb-2">The Objective</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To prove that complex systems—whether a startup's supply chain or a personal growth trajectory—can be optimized when viewed through a structured, data-driven, and analytical lens.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "System Design", "Analytics Dashboard", "Rapid Prototyping"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1.5 rounded bg-secondary text-muted-foreground border border-border/50 group-hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-6 mt-4 border-t border-border/50 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                View Live Dashboard
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProject;