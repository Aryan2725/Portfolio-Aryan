import { Layers, Target, TrendingUp, GitBranch, Clock } from "lucide-react";

export const SnabbitBreakdown = () => (
  <div className="space-y-8 text-foreground">
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium block mb-1">
        Quick-Commerce & Hyperlocal Unit Economics
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Snabbit: Rapid Home Services vs. Contribution Margin Sustainability
      </h2>
      <p className="text-sm text-muted-foreground mt-1">
        Analyzing operational trade-offs between ultra-fast fulfillment SLAs and technician utilization.
      </p>
    </div>

    {/* Section 1 */}
    <div className="space-y-3 p-5 rounded-lg border border-border bg-card">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Target className="w-4 h-4 text-primary" />
        <span>1. Problem: The Latency Gap in Home Services</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Incumbent marketplaces (e.g. Urban Company) resolved service professional trust and verification, but operate on scheduled, multi-hour booking buffers. Snabbit targeted the unserved impulse demand: immediate domestic assistance (cleaning, quick repairs, dishwashing) delivered within sub-15-minute dispatch SLAs.
      </p>
      <div className="p-3 rounded bg-secondary/40 border border-border/80 text-xs text-muted-foreground">
        <strong className="text-foreground font-mono">Core Insight: </strong>
        Urgent domestic tasks mirror quick-commerce grocery mechanics. The value driver is eliminating scheduling friction, not offering unlimited vendor variety.
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Layers className="w-4 h-4 text-primary" />
        <span>2. Operational & Dispatch Architecture</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Micro-Hub Density & Staging",
            desc: "Hyperlocal deployment of partner pods in high-density urban clusters, reducing transit times to under 10 minutes.",
            operatorView: "Requires precise geographic demand forecasting to avoid idle bench cost.",
          },
          {
            title: "Standardized Task Bundles",
            desc: "Tasks are packaged into 15 to 30 minute standard operating procedures with uniform kits.",
            operatorView: "Predictable turnaround times prevent downstream schedule cascades.",
          },
          {
            title: "Exception-Based Dynamic Dispatch",
            desc: "Algorithmic routing matching nearby available runners based on traffic and live completion status.",
            operatorView: "Maintains high SLA reliability during peak morning demand surges.",
          },
          {
            title: "Cluster Density Flywheel",
            desc: "Higher order density in a single apartment complex compresses transit cost per service to near zero.",
            operatorView: "Density in small physical radiuses is the only path to positive contribution margins.",
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
        <span>3. Unit Economics & Contribution Margin Math</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Take Rate</span>
          <span className="text-muted-foreground text-[10px]">15% to 22% commission</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Transit Waste</span>
          <span className="text-muted-foreground text-[10px]">High risk without cluster density</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">SLA Breaches</span>
          <span className="text-muted-foreground text-[10px]">Immediate churn driver</span>
        </div>
        <div className="p-2.5 rounded bg-background border border-border">
          <span className="text-foreground font-semibold block">Subscriptions</span>
          <span className="text-muted-foreground text-[10px]">Critical for repeat retention</span>
        </div>
      </div>
    </div>
  </div>
);

export default SnabbitBreakdown;
