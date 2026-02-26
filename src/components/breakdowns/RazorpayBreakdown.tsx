const RazorpayBreakdown = () => (
  <div className="space-y-10">
    <div>
      <p className="text-muted-foreground text-lg italic mb-2">Making business banking as smooth as consumer fintech</p>
    </div>

    {/* Section 1 */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧩</span> 1. Problem: Why RazorpayX Exists
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        For startups and SMEs, managing money isn't just about transactions — it's about <span className="text-foreground font-medium">time, compliance, and efficiency</span>.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Traditional banks = clunky UIs, long approval cycles, manual uploads for vendor payouts, poor API support.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Founders waste hours on payroll, vendor payments, and compliance tracking.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Razorpay spotted this gap and built RazorpayX, a neobank for businesses that combines <span className="text-foreground font-medium">banking + automation + APIs</span> into one dashboard.
      </p>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mt-4">
        <p className="text-sm text-primary font-medium">🚨 Key Insight</p>
        <p className="text-sm text-muted-foreground mt-1">RazorpayX isn't competing with banks on interest rates. It competes on <span className="text-foreground font-medium">experience, speed, and automation</span>.</p>
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🛠</span> 2. UX & Product Decisions That Drive Engagement
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        RazorpayX didn't reinvent banking, it redesigned workflows around the founder's pain points.
      </p>

      {[
        {
          title: "1️⃣ Current Account, Reimagined",
          points: [
            "Digital-first current accounts with instant activation.",
            "Seamless integration with Razorpay payment gateway.",
          ],
          insight: "Instead of treating accounts as \"just a ledger,\" RazorpayX turns them into the foundation for automation.",
        },
        {
          title: "2️⃣ Automated Payouts",
          points: [
            "Bulk vendor payments with one click.",
            "Salary disbursals directly integrated with payroll.",
            "TDS & compliance auto-handled.",
          ],
          insight: "Founders don't have to juggle Excel + NetBanking + Tally. One dashboard = hours saved weekly.",
        },
        {
          title: "3️⃣ API-First Banking",
          points: [
            "APIs for payouts, reconciliations, and ledger updates.",
            "Ideal for startups scaling fast or handling high-volume transactions (e.g., marketplaces, lending apps).",
          ],
          insight: "Instead of waiting for bank RM approvals, developers integrate RazorpayX like Stripe for banking.",
        },
        {
          title: "4️⃣ Smooth UX & Trust Layer",
          points: [
            "Clean dashboard with minimal friction.",
            "Banking-grade security + Razorpay brand trust.",
          ],
          insight: "Razorpay brings fintech's design-first approach into a space dominated by bureaucratic UX.",
        },
      ].map((feature) => (
        <div key={feature.title} className="rounded-xl bg-card border border-border p-5 space-y-3">
          <h4 className="font-semibold text-foreground">{feature.title}</h4>
          <ul className="space-y-1.5">
            {feature.points.map((p, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
            <p className="text-xs text-primary font-medium mb-1">🧠 Why it works:</p>
            <p className="text-xs text-muted-foreground">{feature.insight}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Section 3 - Hook Model */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🔁</span> 3. Framework Lens: The Hook Model
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Using Nir Eyal's Hook Model, RazorpayX builds retention through utility-driven habits:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { step: "1. Trigger", items: ["External: Payroll deadlines, vendor invoices", "Internal: Founder stress of managing money manually"] },
          { step: "2. Action", items: ["Upload payroll/CSV → click → done", "API calls for payouts"] },
          { step: "3. Variable Reward", items: ["Instant transactions, smooth compliance, reduced manual errors", "Surprise time saved → delight loop"] },
          { step: "4. Investment", items: ["Linking employee/vendor data", "Integrating APIs", "Over time, switching cost becomes too high → stickiness"] },
        ].map((hook) => (
          <div key={hook.step} className="rounded-xl bg-card border border-border p-5">
            <h4 className="font-semibold text-primary text-sm mb-2">{hook.step}</h4>
            <ul className="space-y-1">
              {hook.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
        <p className="text-sm text-muted-foreground">📈 <span className="text-foreground font-medium">Result:</span> RazorpayX becomes the default operating system for money in startups.</p>
      </div>
    </div>

    {/* Section 4 - PM Suggestions */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧠</span> 4. My Product Suggestions as a PM
      </h3>
      {[
        {
          emoji: "🔄",
          title: "1. Expense Cards for Teams",
          desc: "Issue smart corporate cards for teams with limits + automated expense categorization. Solves petty cash + expense claims problem.",
        },
        {
          emoji: "🎯",
          title: "2. AI-driven Cash Flow Forecasting",
          desc: "Predict runway, upcoming vendor outflows, and payroll burn using transaction data. Turns RazorpayX into a CFO assistant for startups.",
        },
        {
          emoji: "🔁",
          title: "3. Embedded Credit Line",
          desc: "Integrate short-term working capital loans directly into the dashboard. Auto-approved based on transaction history. Repayment tied to incoming cashflows. Deepens monetization + improves founder stickiness.",
        },
      ].map((suggestion) => (
        <div key={suggestion.title} className="rounded-xl bg-card border border-border p-5">
          <h4 className="font-semibold text-foreground mb-2">{suggestion.emoji} {suggestion.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{suggestion.desc}</p>
        </div>
      ))}
    </div>

    {/* Section 5 - Business Model */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧠</span> 5. Business Model & Product Strategy Notes
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        RazorpayX monetizes not just from banking but from ecosystem layering:
      </p>
      <ul className="space-y-2">
        {["Float & deposits from current accounts", "Payments infra fees (API usage, transactions)", "Credit offerings (Razorpay Capital)", "Payroll SaaS add-ons"].map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
        <p className="text-sm text-foreground font-medium">🧩 Strategy: Start as the founder's banking layer, then expand into the financial OS for startups.</p>
      </div>
    </div>

    {/* Section 6 - Final Takeaway */}
    <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 space-y-3">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🔚</span> 6. Final Takeaway
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        RazorpayX isn't just a current account. It's the business banking experience banks should've built — <span className="text-foreground font-medium">faster, smarter, and API-first</span>.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        By removing manual friction and layering automation, RazorpayX locks startups into a financial ecosystem that grows with them.
      </p>
    </div>
  </div>
);

export default RazorpayBreakdown;
