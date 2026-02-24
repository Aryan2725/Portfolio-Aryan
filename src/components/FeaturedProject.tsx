import { ArrowUpRight, Globe } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="py-28 px-6 border-t border-border relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, hsl(217 91% 60% / 0.06) 0%, transparent 70%)'
      }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Featured Project</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
            Life Through a Lens of Journeys: Management for the Messy 20s
          </h2>
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
                  A live digital project that serves as a dynamic showcase of my strategic problem-solving and my belief 
                  that everything—from a startup to a life journey—is an optimization problem.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["AI Vibe Coding", "Economics Frameworks", "Content Strategy", "Rapid Execution"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all duration-300"
              >
                Explore the Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
