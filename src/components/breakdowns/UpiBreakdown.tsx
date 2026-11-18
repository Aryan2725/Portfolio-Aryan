import { Layers, Target, TrendingUp, GitBranch, Globe, ShieldCheck } from "lucide-react";

export const UpiBreakdown = () => (
  <div className="space-y-8 text-foreground">
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium block mb-1">
        Digital Public Infrastructure & Ecosystem Architecture
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        UPI: The Open Protocol Powering Real-Time Payments
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Analyzing interoperable rails, network effects, and the economics of zero-fee payment infrastructure.
      </p>
    </div>

    {/* Section 1 */}
    <div className="space-y-3 p-5 rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Target className="w-4 h-4 text-primary" />
        <span>1. Problem: The Siloed Fragmentation of Digital Payments</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Prior to UPI, digital money movement required closed wallets, NEFT cut-off schedules, or hardware POS terminals carrying 2% Merchant Discount Rate (MDR) friction. Small kirana merchants and informal retail operated strictly on physical cash due to hardware costs and settlement latency.
      </p>
      <div className="p-3 rounded bg-secondary/40 border border-border/80 text-xs text-muted-foreground">
        <strong className="text-foreground font-mono">Core Insight: </strong>
        UPI succeeded because it standardized the settlement rail as public infrastructure rather than allowing a single private app to monopolize the ledger.
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Layers className="w-4 h-4 text-primary" />
        <span>2. System Decisions That Accelerated Mass Adoption</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Canonical Virtual Payment Address (VPA)",
            desc: "Abstracts raw bank account details and IFSC codes behind a human-readable identifier linked to a mobile number.",
            operatorView: "Reduces payment cognitive friction to the simplicity of sending a text message.",
          },
          {
            title: "Universal Interoperability by Design",
            desc: "Any certified client app can settle directly to any receiving bank account across standardized BharatQR codes.",
            operatorView: "Prevents walled-garden lock-in and creates an explosive network effect across merchants.",
          },
          {
            title: "Zero Hardware Merchant Onboarding",
            desc: "A printed paper QR code serves as a point-of-sale terminal, collapsing merchant acquisition capital costs.",
            operatorView: "Expanded digital acceptance to tens of millions of micro-retailers without subsidies.",
          },
          {
            title: "Decoupled Authentication",
            desc: "2-factor authentication bound directly to the SIM card and device token, eliminating SMS OTP delivery latency.",
            operatorView: "Drives transaction success rates above legacy card network gateways.",
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
        <span>3. Ecosystem Monetization Strategy</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        While core P2P and P2M transactions remain free, ecosystem participants monetize across adjacent layers:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Merchant Credit</span>
          <span className="text-muted-foreground text-[10px]">Underwritten by QR cashflow</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Soundbox Subscriptions</span>
          <span className="text-muted-foreground text-[10px]">Recurring hardware rental</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Cross-Sell</span>
          <span className="text-muted-foreground text-[10px]">Insurance & wealth distribution</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">International</span>
          <span className="text-muted-foreground text-[10px]">Cross-border remittance rails</span>
        </div>
      </div>
    </div>
  </div>
);

export default UpiBreakdown;
