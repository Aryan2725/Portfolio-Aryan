import { AlertTriangle, Brain, Target, Users, Zap, BarChart3, Lightbulb, Shield, Layout, Router, Building2, Gift } from "lucide-react";

const Section = ({ icon: Icon, label, title, children }: { icon: any; label: string; title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-5 h-5 text-primary" />
      <span className="text-primary text-xs font-semibold tracking-widest uppercase">{label}</span>
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">{title}</h2>
    {children}
  </div>
);

const SubPoint = ({ icon: Icon, title, children }: { icon?: any; title: string; children: React.ReactNode }) => (
  <div className="mb-6 pl-4 border-l-2 border-primary/20">
    <div className="flex items-center gap-2 mb-1">
      {Icon && <Icon className="w-4 h-4 text-primary" />}
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    <div className="text-muted-foreground text-sm leading-relaxed space-y-2">{children}</div>
  </div>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary/5 border border-primary/10 rounded-lg px-5 py-4 my-4">
    <p className="text-sm text-foreground/90 leading-relaxed">{children}</p>
  </div>
);

const GalaxyBreakdown = () => {
  return (
    <article className="text-foreground">
      {/* Title */}
      <div className="mb-10">
        <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Strategic Competitive Analysis</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Mapping the Gap for Galaxy.ai</h1>
        <p className="text-lg text-muted-foreground">From "Model Aggregator" to "Agentic Workspace"</p>
        <p className="text-xs text-muted-foreground mt-3">Prepared by: Aryan Singhal · Product Analyst Candidate</p>
      </div>

      {/* 1. Problem */}
      <Section icon={AlertTriangle} label="The Problem" title={`"Fragmented Intelligence" & Subscription Fatigue`}>
        <div className="space-y-4">
          <SubPoint icon={BarChart3} title="Subscription Overload">
            <p>The average power user now juggles 3–5 separate AI subscriptions (ChatGPT Plus, Claude Pro, Midjourney), costing $60–$100/month.</p>
          </SubPoint>
          <SubPoint icon={Brain} title={`The "Context Silo"`}>
            <p>Workflows are broken. Users copy-paste text between tabs — generating text in Claude, then switching to Midjourney for images. No unified workspace exists.</p>
          </SubPoint>
          <SubPoint icon={Users} title="The Usage Gap">
            <p>Over half of subscribed users cancel because they don't use a single model enough to justify the full monthly cost.</p>
          </SubPoint>
        </div>
      </Section>

      {/* 2. Competitive Landscape */}
      <Section icon={Target} label="Competitive Landscape" title="Competitors Focus on Access, Galaxy Focuses on Flow">
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-muted-foreground font-medium">Feature</th>
                <th className="text-left py-3 px-3 text-muted-foreground font-medium">Poe</th>
                <th className="text-left py-3 px-3 text-muted-foreground font-medium">TypingMind</th>
                <th className="text-left py-3 px-3 text-primary font-semibold">Galaxy.ai</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-3 font-medium text-foreground">Pricing</td>
                <td className="py-3 px-3">$19.99/mo subscription</td>
                <td className="py-3 px-3">$39–$79 one-time + API costs</td>
                <td className="py-3 px-3 text-primary">$8.25/mo or $399 lifetime</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-3 font-medium text-foreground">Free Trial</td>
                <td className="py-3 px-3">3K pts/day (limited)</td>
                <td className="py-3 px-3">Demo only</td>
                <td className="py-3 px-3 text-destructive">❌ No free trial (gap)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-3 font-medium text-foreground">Model Switching</td>
                <td className="py-3 px-3">Partial</td>
                <td className="py-3 px-3">Yes (API keys)</td>
                <td className="py-3 px-3 text-primary">Seamless toggling</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-3 font-medium text-foreground">Creator Economy</td>
                <td className="py-3 px-3">Active (bot payouts)</td>
                <td className="py-3 px-3">None</td>
                <td className="py-3 px-3 text-primary">30% affiliate + rewards</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-foreground">No-Code Apps</td>
                <td className="py-3 px-3">High friction</td>
                <td className="py-3 px-3">Technical setup</td>
                <td className="py-3 px-3 text-primary">3,000+ pre-made tools</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* 3. Competitor Deep Dives */}
      <Section icon={Target} label="Competitor Deep Dive" title="Poe: Speed-to-Market, Limited by Point Anxiety">
        <SubPoint icon={Zap} title={`The Moat: "First Access" Speed`}>
          <p>Poe's primary differentiator is speed — hosting GPT-5.2 and Claude 4.5 before official public releases. This attracts early adopters hungry for the latest models.</p>
        </SubPoint>
        <SubPoint icon={AlertTriangle} title={`The Trap: "Point Anxiety"`}>
          <p>The subscription isn't truly unlimited. Users calculate "Compute Points" per message (e.g., 300 pts for GPT-5.2). This cognitive load causes users to hoard points rather than explore — killing engagement.</p>
        </SubPoint>
      </Section>

      <Section icon={Target} label="Competitor Deep Dive" title="TypingMind: Best-in-Class UI, High Barrier for Non-Techies">
        <SubPoint icon={Zap} title={`The "One-Time" Illusion`}>
          <p>TypingMind wins power users with a lifetime license ($39–$79) and a pro dashboard with folders, search, and forking — setting the UX standard for the industry.</p>
        </SubPoint>
        <SubPoint icon={AlertTriangle} title={`The "Key Anxiety"`}>
          <p>It's not a complete solution. Users manage their own API keys and pay OpenAI separately — massive friction for non-technical professionals.</p>
        </SubPoint>
        <Callout>
          💡 <strong>Opportunity:</strong> Galaxy.ai can capture this market by offering the "TypingMind Pro Interface" combined with "Netflix-Simple" billing — no API keys required.
        </Callout>
      </Section>

      {/* 4. Galaxy Product Audit */}
      <Section icon={Zap} label="Product Audit" title="Galaxy.ai: Breaking Subscription Fatigue">
        <SubPoint icon={Shield} title={`The "Lifetime" Wedge (The Moat)`}>
          <p>Unlike Poe or ChatGPT forcing perpetual $240/year rent, Galaxy.ai offers a Lifetime License ($399) with 15M credits/month. This appeals to "subscription haters" and heavy users wanting long-term value.</p>
        </SubPoint>
        <SubPoint icon={BarChart3} title={`The "Prosumer" Sweet Spot`}>
          <p>At $8.25/month (annual), Galaxy undercuts the market standard ($20/mo) by 60% — the rational choice for students and cost-sensitive professionals.</p>
        </SubPoint>
        <SubPoint icon={Gift} title="Habit-Forming Gamification">
          <p>"Daily Scratch & Win" creates compulsive daily login loops, increasing DAU/MAU ratio. Competitors like TypingMind lack this sticky factor.</p>
        </SubPoint>
        <SubPoint icon={Users} title="Decentralized Sales Force">
          <p>30% Lifetime Affiliate Commission turns every user into a salesperson, significantly lowering CAC compared to Poe's ad-heavy strategy.</p>
        </SubPoint>
      </Section>

      {/* 5. UX Friction Audit */}
      <Section icon={Layout} label="UX Friction Audit" title={`Reducing "Time-to-First-Token"`}>
        <SubPoint icon={AlertTriangle} title={`The Problem: "Decision Paralysis"`}>
          <p>The current homepage defaults to a "Discovery Catalog" (3,000+ Tools), forcing users to browse before they can work. For power users, this adds unnecessary cognitive load on every login.</p>
        </SubPoint>
        <Callout>
          ⚡ <strong>The Fix:</strong> Default to chat — open the last-used model instantly. Move the 3,000+ tools library to a sidebar tab. Action-first, discovery second.
        </Callout>
      </Section>

      {/* 6. Strategic Recommendations */}
      <Section icon={Lightbulb} label="Strategic Recommendations" title={`The "Agentic" Pivot: From Tool Catalog to Outcome Engine`}>
        <SubPoint icon={Router} title={`1. The "Smart Router" — Solving Decision Fatigue`}>
          <p>Users shouldn't search 3,000 bots. Implement a "Master Node" — user types a goal (e.g., "Write a Python script"), Galaxy auto-routes to the best model. Don't sell tools; sell outcomes.</p>
        </SubPoint>
        <SubPoint icon={Layout} title={`2. The "Work-First" UI Overhaul`}>
          <p>Shift the homepage from a "Grid of Icons" (Consumption Mode) to a "Blank Chat Focus" (Creation Mode). Move the bot library to a Sidebar Marketplace.</p>
        </SubPoint>
        <SubPoint icon={Building2} title="3. The B2B Play — Team Wallets">
          <p>Launch "Shared Team Credits" — a manager buys the $399 Lifetime Deal and distributes 15M monthly credits across 3–5 employees. Lock in companies, not just individuals.</p>
        </SubPoint>
        <SubPoint icon={Gift} title={`4. The "Trust Bridge" — Immediate Fix`}>
          <p>The "No Free Trial" policy creates a blind paywall. Implement 50 "Welcome Credits" on signup — let the product value speak before asking for a credit card. This will significantly lower bounce rate.</p>
        </SubPoint>
      </Section>

      {/* Final Takeaway */}
      <div className="mt-8 pt-8 border-t border-border">
        <h2 className="text-xl font-bold text-foreground mb-3">🔚 Final Takeaway</h2>
        <blockquote className="border-l-4 border-primary pl-5 py-2 text-foreground/90 leading-relaxed">
          <p className="mb-2">Galaxy.ai isn't just another AI aggregator — it's positioned to become the <strong>financial operating system for AI usage.</strong></p>
          <p>By combining lifetime pricing, gamification loops, and a creator economy with an "Agentic Pivot" toward outcome-driven workflows, Galaxy can leapfrog from a tool catalog to the default workspace where AI work actually gets done.</p>
        </blockquote>
      </div>
    </article>
  );
};

export default GalaxyBreakdown;
