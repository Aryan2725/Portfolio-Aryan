import { ArrowUpRight, Globe, Clock } from "lucide-react";

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
              Life Through a Lens of Journeys: Management for the Messy 20s
            </h2>
          </div>
          {/* WIP Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold animate-pulse shrink-0 self-start md:self-end mb-1">
            <Clock className="w-3 h-3" />
            WORK IN PROGRESS
          </div>
        </div>

        <div className="group glow-border-hover rounded-xl bg-card p-8 md:p-12 transition-all duration-500 hover:-translate-y-1" style={{
          background: 'linear-gradient(135deg, hsl(228 14% 12%), hsl(228 14% 10%))'
        }}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Globe className="w-7 h-7 text-primary" />
            </div>

            <div className="flex-1 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Career pivots, relationship trade-offs, and personal growth are often treated as 'vibe-based' decisions. 
                I created this platform to challenge that. By applying structured, analytical frameworks of Economics and 
                Management to everyday dilemmas, I help people in their 20s navigate life with clarity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">The Tech</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built entirely through AI 'vibe coding' to demonstrate rapid execution and the ability to direct modern 
                    technology toward human-centric solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">The Goal</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A dynamic showcase of my belief that everything—from a startup to a life journey—is an optimization problem. 
                    Target Launch: March 2026.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["AI Vibe Coding", "Economics Frameworks", "Content Strategy", "Optimization"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border/50 text-sm font-medium text-primary">
                Building in Public — Follow the journey on LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;