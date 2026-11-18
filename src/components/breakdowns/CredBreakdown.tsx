import { Layers, ShieldCheck, Target, TrendingUp, Lightbulb, GitBranch } from "lucide-react";

export const CredBreakdown = () => (
  <div className="space-y-8 text-foreground">
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium block mb-1">
        Fintech Product Strategy & Retention Loops
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        CRED: The Gamified Trust Loop & Monetization Strategy
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Transforming a recurring financial chore into a habit-forming closed ecosystem.
      </p>
    </div>

    {/* Section 1 */}
    <div className="space-y-3 p-5 rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Target className="w-4 h-4 text-primary" />
        <span>1. Problem: Why CRED Exists</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Paying a credit card bill is functionally simple but behaviorally neglected. Users rarely default due to liquidity shortages; they delay due to lack of immediate psychological feedback. Traditional banking portals treat payments as cold, administrative transactions.
      </p>
      <div className="p-3 rounded bg-secondary/40 border border-border/80 text-xs text-muted-foreground">
        <strong className="text-foreground font-mono">Core Insight: </strong>
        CRED did not solve a transactional hurdle. It resolved a behavioral friction loop by engineering immediate dopamine payoffs on routine debt settlements.
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Layers className="w-4 h-4 text-primary" />
        <span>2. Product & UX Mechanics That Drive Retention</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Gamified Proof-of-Action (CRED Coins)",
            desc: "Every bill settlement mints proprietary coins redeemable with partner brands, closing an immediate gratification loop.",
            operatorView: "Coins establish instant feedback, accelerating initial habit formation.",
          },
          {
            title: "Editorial Design & Exclusivity Framing",
            desc: "Dark-mode surfaces, deliberate micro-haptics, and credit-score gating create an aspirational walled garden.",
            operatorView: "High-friction onboarding increases user commitment and lowers downstream churn.",
          },
          {
            title: "Variable Reward Mechanics",
            desc: "Spin-the-wheel and randomized partner jackpots leverage variable reward schedules to maintain weekly active engagement.",
            operatorView: "Unpredictable rewards stimulate repeat opens even between monthly bill cycles.",
          },
          {
            title: "Focused Checkout Architecture",
            desc: "Strips extraneous cross-sells from the settlement screen, preserving trust and speed during high-stakes financial transfers.",
            operatorView: "In fintech, operational trust is retention. Clean CTAs reduce transaction abandonment.",
          },
        ].map((item, idx) => (
          <div key={idx} className="p-4 rounded-lg border border-border bg-card space-y-2">
            <h4 className="text-xs font-mono font-semibold text-foreground">{item.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            <div className="text-[11px] font-mono text-primary/80 pt-1 border-t border-border/60">
              Insight: {item.operatorView}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Section 3 */}
    <div className="space-y-3 p-5 rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <GitBranch className="w-4 h-4 text-primary" />
        <span>3. Framework Lens: The Hook Model</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 rounded bg-background border border-border">
          <span className="text-muted-foreground block text-[10px]">1. TRIGGER</span>
          <span className="font-semibold text-foreground mt-1 block">Due date alerts & late-fee avoidance</span>
        </div>
        <div className="p-3 rounded bg-background border border-border">
          <span className="text-muted-foreground block text-[10px]">2. ACTION</span>
          <span className="font-semibold text-foreground mt-1 block">One-tap UPI settlement</span>
        </div>
        <div className="p-3 rounded bg-background border border-border">
          <span className="text-muted-foreground block text-[10px]">3. VARIABLE REWARD</span>
          <span className="font-semibold text-foreground mt-1 block">Coin unlocks & partner vouchers</span>
        </div>
        <div className="p-3 rounded bg-background border border-border">
          <span className="text-muted-foreground block text-[10px]">4. INVESTMENT</span>
          <span className="font-semibold text-foreground mt-1 block">Multi-card tracking & score history</span>
        </div>
      </div>
    </div>

    {/* Section 4 */}
    <div className="space-y-3 p-5 rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span>4. Monetization & Unit Economics Realities</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bill payments generate negligible interchange revenue. CRED leverages this verified, high-credit-score user density to monetize via high-margin financial products:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Lending</span>
          <span className="text-muted-foreground text-[10px]">CRED Cash / Stash</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Commerce</span>
          <span className="text-muted-foreground text-[10px]">Brand Placements</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Payments</span>
          <span className="text-muted-foreground text-[10px]">P2P & RentPay Fees</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Vehicle Tech</span>
          <span className="text-muted-foreground text-[10px]">CRED Garage</span>
        </div>
      </div>
    </div>
  </div>
);

export default CredBreakdown;
