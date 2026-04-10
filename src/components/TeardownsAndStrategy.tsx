import { useState } from "react";
import { CreditCard, Zap, ShoppingBag, Presentation, ArrowUpRight, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import CredBreakdown from "@/components/breakdowns/CredBreakdown";
import RazorpayBreakdown from "@/components/breakdowns/RazorpayBreakdown";
import SnabbitBreakdown from "@/components/breakdowns/SnabbitBreakdown";
import UpiBreakdown from "@/components/breakdowns/UpiBreakdown";
import GalaxyBreakdown from "@/components/breakdowns/GalaxyBreakdown";

const teardowns = [
  {
    id: "cred",
    name: "CRED",
    subtitle: "The Gamified Trust Loop",
    description: "A deep dive into how CRED uses psychological hooks and high-friction onboarding to create a 'walled garden' of high-trust users.",
    focus: "UX Psychology, Retention Loops, and Monetization Strategy",
    icon: CreditCard,
    iframeSrc: "about:blank",
  },
  {
    id: "razorpay",
    name: "Razorpay",
    subtitle: "The Infrastructure of Indian Fintech",
    description: "Analyzing the 'invisible' product—how Razorpay solved the fragmentation of Indian payments through developer-first documentation and seamless checkout flows.",
    focus: "Product-Led Growth (PLG), Documentation Design, and API Strategy",
    icon: Zap,
    iframeSrc: "about:blank",
  },
  {
    id: "snabbit",
    name: "Snabbit",
    subtitle: "Rapid Delivery vs. Unit Economics",
    description: "An operational breakdown of the 'quick commerce' model, analyzing the trade-offs between delivery speed and net margin sustainability.",
    focus: "Supply Chain Optimization, Logistics Logic, and Unit Economics",
    icon: ShoppingBag,
    iframeSrc: "about:blank",
  },
  {
    id: "upi",
    name: "UPI",
    subtitle: "Ecosystem Breakdown",
    description: "A detailed analysis of India's Unified Payments Interface—how an open protocol created the world's largest real-time payment network, reshaped fintech competition, and set the blueprint for digital public infrastructure globally.",
    focus: "Digital Public Infrastructure, Network Effects, and Policy Design",
    icon: Globe,
    iframeSrc: "about:blank",
  },
];

const strategyDecks = [
  {
    id: "galaxy",
    name: "Galaxy.ai",
    label: "Strategic Vision Deck",
    description: "A comprehensive strategy breakdown exploring the future of AI-integrated ecosystems. This deck highlights my ability to synthesize market trends, identify competitive moats, and articulate a long-term product vision.",
    icon: Presentation,
    featured: true,
  },
  {
    id: "logistic-optimizer",
    name: "Logistic Optimizer: Solving Last-Mile Dispatch Inefficiency",
    description: "A data-driven strategy deck breaking down how to shift B2B logistics from reactive status tracking to proactive, exception-based management. Includes system architecture, SLA urgency scoring, and a projected unit economics breakdown of ₹21.6L/year in recovered penalties.",
    tags: ["Unit Economics", "Operations Strategy", "Predictive Signals"],
    icon: Presentation,
    directLink: "logistic_optimizer_strategy_deck.pdf", 
  },
];

const TeardownsAndStrategy = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const allItems = [...teardowns, ...strategyDecks];
  const activeItem = allItems.find((d) => d.id === openId);

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
              onClick={() => setOpenId(item.id)}
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
              <button
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/40 transition-all duration-300 shrink-0"
              >
                View Full Breakdown
                <ArrowUpRight className="w-4 h-4 group-hover:text-primary transition-colors" />
              </button>
            </div>
          ))}
        </div>

        {/* Strategic Research */}
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Strategic Research</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Strategy Decks</h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-xl">
            Original strategy work and ecosystem analyses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {strategyDecks.map((deck) => {
            // Reusable card content
            const CardContent = (
              <>
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <deck.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{deck.name}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        {deck.label && <span className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">{deck.label}</span>}
                        {deck.tags && deck.tags.map(tag => <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{deck.description}</p>
                </div>
                <div className="shrink-0 mt-6">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium group-hover:border-primary/40 transition-all duration-300">
                    View the full breakdown
                    <ArrowUpRight className="w-4 h-4 group-hover:text-primary transition-colors" />
                  </span>
                </div>
              </>
            );

            // If it has a directLink, wrap it in an <a> tag targeting a blank tab
            if (deck.directLink) {
              return (
                <a
                  key={deck.id}
                  href={deck.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border-hover rounded-xl bg-card p-8 md:p-10 group cursor-pointer transition-all duration-500 hover:-translate-y-1 flex flex-col no-underline block"
                >
                  {CardContent}
                </a>
              );
            }

            // Otherwise, keep the default Modal opening behavior
            return (
              <div
                key={deck.id}
                onClick={() => setOpenId(deck.id)}
                className="glow-border-hover rounded-xl bg-card p-8 md:p-10 group cursor-pointer transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-screen dark modal */}
      <Dialog open={!!openId} onOpenChange={(open) => !open && setOpenId(null)}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] p-0 bg-card border-border gap-0 overflow-hidden">
          <DialogTitle className="sr-only">{activeItem?.name}</DialogTitle>
          <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
            <div className="flex items-center gap-3">
              {activeItem && "icon" in activeItem && <activeItem.icon className="w-5 h-5 text-primary" />}
              <span className="font-semibold text-foreground">{activeItem?.name}</span>
              {activeItem && ("subtitle" in activeItem || "label" in activeItem) && (
                <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">
                  {'subtitle' in activeItem ? activeItem.subtitle : activeItem.label}
                </span>
              )}
            </div>
          </div>
          {openId && ["cred", "razorpay", "snabbit", "upi", "galaxy"].includes(openId) ? (
            <ScrollArea className="flex-1" style={{ height: "calc(90vh - 65px)" }}>
              <div className="max-w-3xl mx-auto px-6 md:px-10 py-8">
                {openId === "cred" && <CredBreakdown />}
                {openId === "razorpay" && <RazorpayBreakdown />}
                {openId === "snabbit" && <SnabbitBreakdown />}
                {openId === "upi" && <UpiBreakdown />}
                {openId === "galaxy" && <GalaxyBreakdown />}
              </div>
            </ScrollArea>
          ) : (
            <iframe
              src={"iframeSrc" in (activeItem || {}) ? (activeItem as any).iframeSrc : "about:blank"}
              className="w-full flex-1 border-0"
              style={{ height: "calc(90vh - 65px)" }}
              title={activeItem?.name}
              allow="fullscreen"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeardownsAndStrategy;