'use client';

import { useState } from "react";
import { CreditCard, Zap, ShoppingBag, Globe, ArrowUpRight, Presentation, FileText, Layers, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import CredBreakdown from "@/components/breakdowns/CredBreakdown";
import RazorpayBreakdown from "@/components/breakdowns/RazorpayBreakdown";
import SnabbitBreakdown from "@/components/breakdowns/SnabbitBreakdown";
import UpiBreakdown from "@/components/breakdowns/UpiBreakdown";
import GalaxyBreakdown from "@/components/breakdowns/GalaxyBreakdown";

interface TeardownItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  focus: string;
  icon: any;
}

const teardowns: TeardownItem[] = [
  {
    id: "cred",
    name: "CRED",
    subtitle: "Gamified Trust Loops & Retention",
    description: "Deep dive into psychological hooks, credit gating, and monetization via adjacent financial products.",
    focus: "Behavioral Economics · Habit Formation · Monetization Layers",
    icon: CreditCard,
  },
  {
    id: "razorpay",
    name: "Razorpay",
    subtitle: "B2B Infrastructure & API-Led Growth",
    description: "Analyzing developer-first documentation, automated payout pipelines, and the transition into full-stack business banking.",
    focus: "Developer Ergonomics · PLG · Corporate Banking Workflows",
    icon: Zap,
  },
  {
    id: "snabbit",
    name: "Snabbit",
    subtitle: "Hyperlocal SLAs vs. Contribution Margins",
    description: "Operational breakdown of 10-minute home service fulfillment, technician bench utilization, and geographic cluster density.",
    focus: "Supply Chain Density · Dispatch Optimization · Unit Economics",
    icon: ShoppingBag,
  },
  {
    id: "upi",
    name: "UPI",
    subtitle: "Digital Public Infrastructure",
    description: "Deconstructing India's real-time interoperable protocol, zero-fee payment rails, and downstream merchant monetization.",
    focus: "Network Effects · Open Protocols · Financial Inclusion",
    icon: Globe,
  },
];

const strategyDecks = [
  {
    id: "galaxy",
    name: "Galaxy.ai: Market Gap Analysis",
    subtitle: "Strategic Vision Deck",
    description: "Comprehensive competitive strategy detailing the transition from a fragmented model aggregator into an outcome-oriented agentic workspace.",
    focus: "Competitive Strategy · Pricing Moats · Retention Flywheels",
    icon: Presentation,
  },
  {
    id: "logistic-optimizer",
    name: "Logistic Optimizer V2: SLA Urgency Routing",
    subtitle: "Operations Strategy Deck",
    description: "Data-driven operational framework shifting B2B dispatch from reactive tracking to exception-based routing. Highlights ₹21.6L/year in recovered penalties.",
    focus: "SLA Risk Scoring · Unit Economics · Proactive Logistics",
    icon: FileText,
    directLink: "/logistic_optimizer_strategy_deck.pdf",
  },
];

export const TeardownsAndStrategy = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const activeItem = [...teardowns, ...strategyDecks].find((item) => item.id === openId);

  return (
    <section id="teardowns" className="py-24 px-6 border-b border-border bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Strategic Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Product Teardowns & Strategy Decks
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Analytical breakdowns evaluating competitive moats, monetization mechanics, and unit economics across high-velocity technology products.
          </p>
        </div>

        {/* Teardowns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {teardowns.map((item) => (
            <div
              key={item.id}
              onClick={() => setOpenId(item.id)}
              className="group p-6 rounded-lg border border-border bg-card hover:border-white/[0.2] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">{item.subtitle}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-primary/80">
                {item.focus}
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Decks Header */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground">Strategic Decks & Memos</h3>
          <p className="text-xs text-muted-foreground mt-1">Deep-dive research papers and system designs.</p>
        </div>

        {/* Strategy Decks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {strategyDecks.map((deck) => {
            const Content = (
              <div className="p-6 rounded-lg border border-border bg-card hover:border-white/[0.2] transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center shrink-0">
                        <deck.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">{deck.name}</h4>
                        <span className="text-xs font-mono text-muted-foreground">{deck.subtitle}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {deck.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-primary/80">
                  {deck.focus}
                </div>
              </div>
            );

            if (deck.directLink) {
              return (
                <a
                  key={deck.id}
                  href={deck.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  {Content}
                </a>
              );
            }

            return (
              <div
                key={deck.id}
                onClick={() => setOpenId(deck.id)}
                className="cursor-pointer"
              >
                {Content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reader Modal */}
      <Dialog open={!!openId} onOpenChange={(open) => !open && setOpenId(null)}>
        <DialogContent className="max-w-3xl w-[95vw] h-[85vh] p-0 bg-card border-border gap-0 overflow-hidden rounded-lg">
          <DialogTitle className="sr-only">{activeItem?.name || "Teardown"}</DialogTitle>
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-border bg-secondary/30 shrink-0">
            <div className="flex items-center gap-3">
              {activeItem?.icon && <activeItem.icon className="w-4 h-4 text-primary" />}
              <span className="font-mono text-sm font-semibold text-foreground">{activeItem?.name}</span>
              <span className="text-xs font-mono text-muted-foreground border-l border-border pl-3">
                {activeItem?.subtitle}
              </span>
            </div>
            <button
              onClick={() => setOpenId(null)}
              className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <ScrollArea className="flex-1 p-6 md:p-8" style={{ height: "calc(85vh - 54px)" }}>
            {openId === "cred" && <CredBreakdown />}
            {openId === "razorpay" && <RazorpayBreakdown />}
            {openId === "snabbit" && <SnabbitBreakdown />}
            {openId === "upi" && <UpiBreakdown />}
            {openId === "galaxy" && <GalaxyBreakdown />}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeardownsAndStrategy;
