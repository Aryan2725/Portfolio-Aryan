import { ArrowUpRight, Globe, Rocket } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="py-28 px-6 border-t border-border relative overflow-hidden" id="featured-project">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, hsl(217 91% 60% / 0.06) 0%, transparent 70%)'
      }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="section-fade-in flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Featured Project</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Life's Journey through a Lens: Management for the Messy 20s
            </h2>
          </div>
          {/* LIVE Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 self-start md:self-end mb-1">
            <Rocket className="w-3 h-3" />
            LIVE PROJECT
          </div>
        </div>

        {/* Note: Paste your actual Vercel link below! */}
        <a href="https://life-through-a-lens-of-management-j.vercel.app/" target="_blank" rel="noopener noreferrer" className="block group glow-border-hover rounded-xl bg-card p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 cursor-pointer" style={{
          background: 'linear-gradient(135deg, hsl(228 14% 12%), hsl(228 14% 10%))'
        }}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Globe className="w-7 h-7 text-primary" />
            </div>

            <div className="flex-1 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                A unified personal analytics dashboard and blog. It aggregates daily routines, habits, and metrics into a centralized visual workspace to optimize long-term goals, applying structured economics frameworks to everyday life decisions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">The Tech</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built and deployed entirely via AI "vibe coding" (React, Vite, Supabase). Demonstrates rapid MVP execution and the ability to direct modern tech toward human-centric solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">The Goal</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A dynamic showcase of my belief that everything—from a startup to a life journey—is an optimization problem. It serves as both a functional dashboard and a living journal.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Productivity", "Analytics", "Dashboard", "AI MVP"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border/50 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
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