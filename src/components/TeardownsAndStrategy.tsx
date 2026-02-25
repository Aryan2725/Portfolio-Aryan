import { useState } from "react";
import { CreditCard, Zap, ShoppingBag, Presentation, ArrowUpRight, Globe, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

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

const strategyDecks = [
  {
    id: "upi",
    name: "UPI",
    label: "Ecosystem Breakdown",
    description: "A detailed analysis of India's Unified Payments Interface—how an open protocol created the world's largest real-time payment network, reshaped fintech competition, and set the blueprint for digital public infrastructure globally.",
    icon: Globe,
    featured: false,
    iframeSrc: "about:blank",
  },
  {
    id: "galaxy",
    name: "Galaxy.ai",
    label: "Strategic Vision Deck",
    description: "A comprehensive strategy breakdown exploring the future of AI-integrated ecosystems. This deck highlights my ability to synthesize market trends, identify competitive moats, and articulate a long-term product vision.",
    icon: Presentation,
    featured: true,
    iframeSrc: "about:blank",
  },
];

const TeardownsAndStrategy = () => {
  const [openDeck, setOpenDeck] = useState<string | null>(null);
  const activeDeck = strategyDecks.find((d) => d.id === openDeck);

  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        {/* Teardowns */}
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Product Teardowns</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Analytical Deep-Dives</h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-xl">
            Strategic breakdowns of how top products win.
          </p>
        </div>

        <div className="space-y-4 mb-20">
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

        {/* Strategic Research */}
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Strategic Research</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Strategy & Vision Decks</h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-xl">
            Original strategy work and ecosystem analyses.
          </p>
        </div>

        <div className="space-y-4">
          {strategyDecks.map((deck) =>
            deck.featured ? (
              /* Galaxy.ai — Featured Wide Card */
              <div
                key={deck.id}
                onClick={() => setOpenDeck(deck.id)}
                className="glow-border-hover rounded-xl bg-card p-8 md:p-10 group cursor-pointer transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <deck.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{deck.name}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">{deck.label}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{deck.description}</p>
                  </div>
                  <div className="shrink-0 mt-2 md:mt-0">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium group-hover:border-primary/40 transition-all duration-300">
                      View Full Breakdown
                      <ArrowUpRight className="w-4 h-4 group-hover:text-primary transition-colors" />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* UPI — Standard Card */
              <div
                key={deck.id}
                onClick={() => setOpenDeck(deck.id)}
                className="group glow-border-hover rounded-xl bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer transition-all duration-500 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4 md:w-56 shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <deck.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{deck.name}</h3>
                    <span className="text-xs text-muted-foreground">{deck.label}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">{deck.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium group-hover:border-primary/40 transition-all duration-300 shrink-0">
                  View Full Breakdown
                  <ArrowUpRight className="w-4 h-4 group-hover:text-primary transition-colors" />
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Full-screen dark modal with iframe */}
      <Dialog open={!!openDeck} onOpenChange={(open) => !open && setOpenDeck(null)}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] p-0 bg-card border-border gap-0 overflow-hidden">
          <DialogTitle className="sr-only">{activeDeck?.name} — {activeDeck?.label}</DialogTitle>
          <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
            <div className="flex items-center gap-3">
              {activeDeck && <activeDeck.icon className="w-5 h-5 text-primary" />}
              <span className="font-semibold text-foreground">{activeDeck?.name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">{activeDeck?.label}</span>
            </div>
          </div>
          <iframe
            src={activeDeck?.iframeSrc ?? "about:blank"}
            className="w-full flex-1 border-0"
            style={{ height: "calc(90vh - 65px)" }}
            title={activeDeck?.name}
            allow="fullscreen"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeardownsAndStrategy;
