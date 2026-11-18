import { AlertTriangle, Brain, Target, Users, Zap, BarChart3, Lightbulb, Shield, Layout, GitBranch, Building2, Gift, CheckCircle2 } from "lucide-react";

const Section = ({ icon: Icon, label, title, children }: { icon: any; label: string; title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-primary text-xs font-mono uppercase tracking-wider">{label}</span>
    </div>
    <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
    {children}
  </div>
);

const SubPoint = ({ icon: Icon, title, children }: { icon?: any; title: string; children: React.ReactNode }) => (
  <div className="mb-5 pl-4 border-l border-border">
    <div className="flex items-center gap-2 mb-1">
      {Icon && <Icon className="w-3.5 h-3.5 text-primary" />}
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
    </div>
    <div className="text-muted-foreground text-xs leading-relaxed space-y-1.5">{children}</div>
  </div>
);

export const GalaxyBreakdown = () => {
  return (
    <article className="space-y-8 text-foreground">
      {/* Title */}
      <div className="border-b border-border/80 pb-6">
        <span className="text-xs font-mono text-primary uppercase tracking-wider block mb-1">
          Strategic Competitive Analysis
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Mapping the Strategic Gap for Galaxy.ai
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          From generic model aggregator to high-density outcome-driven agentic workspace.
        </p>
      </div>

      {/* 1. Problem */}
      <Section icon={AlertTriangle} label="The Problem" title="Fragmented Intelligence & Subscription Fatigue">
        <div className="space-y-3">
          <SubPoint icon={BarChart3} title="Subscription Overload">
            <p>Power users juggle 3 to 5 separate AI subscriptions costing $60 to $100 monthly without unified context sharing.</p>
          </SubPoint>
          <SubPoint icon={Brain} title="The Context Silo">
            <p>Workflows require constant clipboard copy-pasting between disparate model providers and interfaces.</p>
          </SubPoint>
          <SubPoint icon={Users} title="The Utilization Churn">
            <p>Subscribers churn rapidly when single-model monthly usage fails to justify high recurring retainers.</p>
          </SubPoint>
        </div>
      </Section>

      {/* 2. Competitive Landscape Table */}
      <Section icon={Target} label="Competitive Landscape" title="Ecosystem Comparison">
        <div className="overflow-x-auto rounded border border-border bg-card">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left py-2.5 px-3 text-muted-foreground font-medium">Dimension</th>
                <th className="text-left py-2.5 px-3 text-muted-foreground font-medium">Poe</th>
                <th className="text-left py-2.5 px-3 text-muted-foreground font-medium">TypingMind</th>
                <th className="text-left py-2.5 px-3 text-primary font-semibold">Galaxy.ai</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2.5 px-3 font-medium text-foreground">Pricing Model</td>
                <td className="py-2.5 px-3">$19.99/mo</td>
                <td className="py-2.5 px-3">$39–$79 + BYO API</td>
                <td className="py-2.5 px-3 text-primary">$8.25/mo or $399 lifetime</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 px-3 font-medium text-foreground">Free Tier Onboarding</td>
                <td className="py-2.5 px-3">3k daily compute points</td>
                <td className="py-2.5 px-3">Demo only</td>
                <td className="py-2.5 px-3 text-amber-400">Strict paywall (conversion blocker)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 px-3 font-medium text-foreground">Model Switching</td>
                <td className="py-2.5 px-3">Partial</td>
                <td className="py-2.5 px-3">Yes (manual keys)</td>
                <td className="py-2.5 px-3 text-primary">Unified dynamic toggling</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium text-foreground">Distribution Flywheel</td>
                <td className="py-2.5 px-3">Bot creator payouts</td>
                <td className="py-2.5 px-3">Direct sales</td>
                <td className="py-2.5 px-3 text-primary">30% lifetime affiliate loop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* 3. Strategic Recommendations */}
      <Section icon={Lightbulb} label="Product Interventions" title="The Agentic Pivot">
        <div className="space-y-3">
          <SubPoint icon={GitBranch} title="Dynamic Intent-Based Routing">
            <p>Eliminate cognitive friction by auto-routing user prompts to the most cost-effective and capable foundation model based on task taxonomy.</p>
          </SubPoint>
          <SubPoint icon={Building2} title="Team Shared Credits for B2B">
            <p>Deploy shared credit pools for small teams to transition from individual prosumer subscriptions to sticky organizational accounts.</p>
          </SubPoint>
          <SubPoint icon={Gift} title="Free Welcome Credits on Signup">
            <p>Provide 50 free test tokens prior to payment gating to prove latency and quality, lowering landing page bounce rates.</p>
          </SubPoint>
        </div>
      </Section>
    </article>
  );
};

export default GalaxyBreakdown;
