import { CreditCard, Zap, ShoppingBag, Presentation, ArrowUpRight } from "lucide-react";

const teardowns = [
  {
    name: "CRED",
    subtitle: "The Gamified Trust Loop",
    description: "A deep dive into how CRED uses psychological hooks and high-friction onboarding to create a 'walled garden' of high-trust users.",
    focus: "UX Psychology, Retention Loops, and Monetization Strategy",
    icon: CreditCard,
  },
  {
    name: "Razorpay",
    subtitle: "The Infrastructure of Indian Fintech",
    description: "Analyzing the 'invisible' product—how Razorpay solved the fragmentation of Indian payments through developer-first documentation and seamless checkout flows.",
    focus: "Product-Led Growth (PLG), Documentation Design, and API Strategy",
    icon: Zap,
  },
  {
    name: "Snabbit",
    subtitle: "Rapid Delivery vs. Unit Economics",
    description: "An operational breakdown of the 'quick commerce' model, analyzing the trade-offs between delivery speed and net margin sustainability.",
    focus: "Supply Chain Optimization, Logistics Logic, and Unit Economics",
    icon: ShoppingBag,
  },
];

const TeardownsAndStrategy = () => {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Product Teardowns & Strategy</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Analytical Deep-Dives
          </h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-xl">
            Strategic breakdowns of how top products win, plus original strategy work.
          </p>
        </div>

        {/* Teardown cards */}
        <div className="space-y-4 mb-8">
          {teardowns.map((item, i) => (
            <div
              key={item.name}
              className="group glow-border-hover rounded-xl bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer transition-all duration-500 hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 md:w-56 shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                  <span className="text-xs text-muted-foreground">{item.subtitle}</span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed mb-1.5">{item.description}</p>
                <p className="text-xs text-primary/80 font-medium">{item.focus}</p>
              </div>

              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0 hidden md:block" />
            </div>
          ))}
        </div>

        {/* Galaxy.ai strategy deck */}
        <div className="glow-border-hover rounded-xl bg-card p-8 md:p-10 group cursor-pointer transition-all duration-500 hover:-translate-y-1">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Presentation className="w-6 h-6 text-primary" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-foreground">Galaxy.ai</h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">Strategic Vision Deck</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A comprehensive strategy breakdown exploring the future of AI-integrated ecosystems. This deck highlights 
                my ability to synthesize market trends, identify competitive moats, and articulate a long-term product vision.
              </p>
            </div>

            <div className="shrink-0 mt-2 md:mt-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium group-hover:border-primary/40 transition-all duration-300">
                View Deck
                <ArrowUpRight className="w-4 h-4 group-hover:text-primary transition-colors" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeardownsAndStrategy;
