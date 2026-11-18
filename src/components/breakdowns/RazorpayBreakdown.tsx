import { Layers, ShieldCheck, Target, TrendingUp, GitBranch, Cpu } from "lucide-react";

export const RazorpayBreakdown = () => (
  <div className="space-y-8 text-foreground">
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium block mb-1">
        B2B Fintech & Product-Led Growth
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Razorpay: The Infrastructure of Modern Indian Fintech
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Analyzing developer-first documentation, API-led growth, and business banking workflows.
      </p>
    </div>

    {/* Section 1 */}
    <div className="space-y-3 p-5 rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Target className="w-4 h-4 text-primary" />
        <span>1. Problem: The Fragmentation of Indian Business Banking</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        For startups and growth companies, managing capital is constrained by legacy banking interfaces: manual CSV bulk uploads, bureaucratic approval matrices, and absent webhook support. Founders and finance leads spend hours weekly reconciling bank statements against vendor invoices.
      </p>
      <div className="p-3 rounded bg-secondary/40 border border-border/80 text-xs text-muted-foreground">
        <strong className="text-foreground font-mono">Core Insight: </strong>
        RazorpayX does not compete with banks on interest rates. It competes on developer ergonomics, automated tax compliance, and instant payout APIs.
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Layers className="w-4 h-4 text-primary" />
        <span>2. Product Levers That Drive PLG & High Retention</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "API-First Corporate Payouts",
            desc: "Direct endpoints for instant salary disbursals, vendor payouts, and automated TDS deductions without visiting a branch.",
            operatorView: "Transforms corporate accounts from passive ledgers into programmable software infrastructure.",
          },
          {
            title: "Developer-First Onboarding",
            desc: "Comprehensive SDKs, copy-paste curl snippets, and deterministic sandbox test keys that allow a 2-hour integration.",
            operatorView: "Reduces engineering implementation lag, driving bottom-up adoption inside startups.",
          },
          {
            title: "Automated Reconciliation",
            desc: "Real-time webhook notifications mapping incoming customer settlements directly to internal accounting ledgers.",
            operatorView: "Eliminates month-end closing latency for financial controllers.",
          },
          {
            title: "Integrated Ecosystem Layering",
            desc: "Couples payment gateway checkout collections directly into corporate current accounts.",
            operatorView: "Creates immense switching costs by locking the startup into a unified financial operating system.",
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
        <TrendingUp className="w-4 h-4 text-primary" />
        <span>3. Business Model & Multi-Layer Monetization</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Razorpay’s monetization expands through financial infrastructure layers:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Gateway MDR</span>
          <span className="text-muted-foreground text-[10px]">1.5% to 2% take rate</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">API Payout Fees</span>
          <span className="text-muted-foreground text-[10px]">Per-transaction fees</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Working Capital</span>
          <span className="text-muted-foreground text-[10px]">Razorpay Capital loans</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">SaaS Add-ons</span>
          <span className="text-muted-foreground text-[10px]">Payroll & Tax modules</span>
        </div>
      </div>
    </div>
  </div>
);

export default RazorpayBreakdown;
