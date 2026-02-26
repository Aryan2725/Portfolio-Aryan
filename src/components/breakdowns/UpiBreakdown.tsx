const UpiBreakdown = () => (
  <div className="space-y-10">
    <div>
      <p className="text-muted-foreground text-lg italic mb-2">The invisible UX powering India's fintech revolution</p>
    </div>

    {/* Section 1 */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧩</span> 1. Problem: Why UPI Exists
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Before UPI, India's digital payments were <span className="text-foreground font-medium">slow, siloed, and inconvenient</span>:
      </p>
      <ul className="space-y-1.5">
        {[
          "NEFT/RTGS had cut-off timings & fees.",
          "Wallets required top-ups and weren't interoperable.",
          "Debit/credit cards meant POS hardware costs, MDR fees, and OTP friction.",
          "Small merchants were left out — most operated in cash-only economies.",
        ].map((p, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary mt-1 shrink-0">•</span>{p}
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        The result: <span className="text-foreground font-medium">digital payments were a privilege, not a utility.</span>
      </p>
      <p className="text-muted-foreground leading-relaxed">
        UPI (Unified Payments Interface), launched by NPCI in 2016, flipped this equation: <span className="text-foreground font-medium">real-time, free, interoperable, and mobile-first payments.</span>
      </p>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mt-4">
        <p className="text-sm text-primary font-medium">🚨 Key Insight</p>
        <p className="text-sm text-muted-foreground mt-1">UPI didn't win because of flashy UX. It won because it <span className="text-foreground font-medium">made money movement invisible, instant, and universal.</span></p>
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🛠</span> 2. UX & Product Decisions That Drive Engagement
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        UPI's brilliance is in <span className="text-foreground font-medium">designing rails, not just an app.</span>
      </p>
      {[
        {
          title: "1️⃣ One ID for All Payments",
          points: ["Users get a simple @upi handle linked to their bank account.", "No more IFSC, account numbers, or branch codes."],
          insight: "Removes cognitive friction → payments feel as easy as sending a WhatsApp message.",
        },
        {
          title: "2️⃣ Interoperability by Default",
          points: ["Any UPI app (PhonePe, GPay, Paytm) can transact with any bank.", "QR codes standardized across merchants."],
          insight: "Creates network effects → one ecosystem, no silos.",
        },
        {
          title: "3️⃣ Instant, 24x7, Free Transfers",
          points: ["Works for ₹10 as smoothly as ₹1 lakh.", "No downtime, no fees, no \"banking hours.\""],
          insight: "Reduces barriers → adoption soars in Tier-2/3 towns.",
        },
        {
          title: "4️⃣ Merchant-First Design",
          points: ["QR-based acceptance → zero-cost onboarding for kiranas & SMEs.", "Instant settlement builds trust."],
          insight: "UPI became a default utility for 30M+ merchants without hardware investments.",
        },
      ].map((feature) => (
        <div key={feature.title} className="rounded-xl bg-card border border-border p-5 space-y-3">
          <h4 className="font-semibold text-foreground">{feature.title}</h4>
          <ul className="space-y-1.5">
            {feature.points.map((p, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>{p}
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
        UPI doesn't just solve a problem; it <span className="text-foreground font-medium">creates habits.</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { step: "1. Trigger", items: ["External: Bill due dates, merchant asks, \"Pay by UPI?\"", "Internal: Frustration with cash / OTP delays"] },
          { step: "2. Action", items: ["Scan QR → enter PIN → done"] },
          { step: "3. Variable Reward", items: ["Instant success notification & SMS", "Works across apps — no lock-in"] },
          { step: "4. Investment", items: ["Linking multiple accounts", "Saving beneficiaries", "Using UPI daily increases switching cost → habit built"] },
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
        <p className="text-sm text-muted-foreground">📈 <span className="text-foreground font-medium">Result:</span> UPI becomes invisible infra → default way India pays.</p>
      </div>
    </div>

    {/* Section 4 - PM Suggestions */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧠</span> 4. My Product Suggestions as a PM
      </h3>
      {[
        { emoji: "🔄", title: "1. Smarter Fraud Protection", desc: "Real-time scam detection & alerts for suspicious collect requests. AI-driven fraud scoring to flag risky transactions." },
        { emoji: "🎯", title: "2. Offline-first UPI Lite", desc: "Scale UPI Lite for low-connectivity areas. Payments via SMS or Bluetooth → financial inclusion for 200M+ users." },
        { emoji: "🔁", title: "3. Micro-credit via UPI", desc: "Embed small-ticket loans within UPI apps. Daily cash flow credit for gig workers & merchants." },
        { emoji: "🌍", title: "4. Cross-border UPI", desc: "Expand partnerships (like UPI–Singapore) globally. Enable NRIs & tourists to use UPI seamlessly abroad." },
      ].map((s) => (
        <div key={s.title} className="rounded-xl bg-card border border-border p-5">
          <h4 className="font-semibold text-foreground mb-2">{s.emoji} {s.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>

    {/* Section 5 - Business Model */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧠</span> 5. Business Model & Strategy Notes
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        UPI itself is <span className="text-foreground font-medium">free rails</span>, but monetization flows through ecosystem players:
      </p>
      <ul className="space-y-2">
        {[
          "Banks: save infra costs, cross-sell loans & deposits.",
          "Apps: acquire users cheaply, monetize via credit, insurance, wealth products.",
          "NPCI: drives adoption, regulates ecosystem, builds Bharat BillPay & UPI Lite.",
        ].map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>{item}
          </li>
        ))}
      </ul>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
        <p className="text-sm text-foreground font-medium">🧩 Strategy: UPI = India Stack's crown jewel. It unlocked an open fintech playground → startups thrive on top.</p>
      </div>
    </div>

    {/* Section 6 - Final Takeaway */}
    <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 space-y-3">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🔚</span> 6. Final Takeaway
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        UPI isn't an app. It's <span className="text-foreground font-medium">invisible UX + trust + policy + ecosystem design.</span>
      </p>
      <p className="text-muted-foreground leading-relaxed">
        By making payments instant, free, and universal, UPI turned digital payments into a utility as natural as electricity.
      </p>
      <p className="text-foreground font-semibold">And the best UX is the one you don't even notice.</p>
    </div>
  </div>
);

export default UpiBreakdown;
