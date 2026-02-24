import { Presentation, ArrowUpRight } from "lucide-react";

const StrategySection = () => {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Strategy & Vision</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
            Big Picture Thinking
          </h2>
        </div>

        <div className="glow-border-hover rounded-xl bg-card p-8 md:p-12 group cursor-pointer transition-all duration-500 hover:-translate-y-1">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Presentation className="w-7 h-7 text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Galaxy.ai</h3>
              <p className="text-muted-foreground leading-relaxed">
                A strategic slide deck outlining the vision for an AI-native productivity platform — 
                rethinking how teams collaborate, plan, and execute in the age of generative AI.
              </p>
            </div>

            <div className="shrink-0 mt-4 md:mt-0">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300">
                View Deck
                <ArrowUpRight className="w-4 h-4 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
