import { FileText, ArrowUpRight } from "lucide-react";

const teardowns = [
  {
    name: "CRED",
    description: "Deep-dive into CRED's gamification, trust loops, and premium UX strategy that turned credit card payments into a lifestyle product.",
    category: "Fintech / UX",
  },
  {
    name: "Razorpay",
    description: "How Razorpay built developer-first payments infrastructure and captured India's digital payments market through API simplicity.",
    category: "Payments / API",
  },
  {
    name: "Snabbit",
    description: "Marketplace dynamics analysis: how Snabbit tackles the cold-start problem in hyperlocal services with supply-side curation.",
    category: "Marketplace / Ops",
  },
];

const ProductTeardowns = () => {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Product Teardowns</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strategic Breakdowns
          </h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-xl">
            Analytical deep-dives into how top products win.
          </p>
        </div>

        <div className="space-y-4">
          {teardowns.map((item, i) => (
            <div
              key={item.name}
              className="group glow-border-hover rounded-xl bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer transition-all duration-500 hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 md:w-48 shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.description}</p>

              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeardowns;
