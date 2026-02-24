import { ArrowUpRight, Globe } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Featured Project</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
            Life Through a Lens of Journeys
          </h2>
        </div>

        <div className="group glow-border-hover rounded-xl bg-card p-8 md:p-12 transition-all duration-500 hover:-translate-y-1">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Globe className="w-7 h-7 text-primary" />
            </div>

            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                A live digital project applying the structured, analytical frameworks of economics and management 
                to the messy dilemmas of everyday life. Built entirely through AI vibe coding to demonstrate rapid 
                execution, this platform helps others navigate their 20s with clarity while showcasing strategic 
                problem-solving.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
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
