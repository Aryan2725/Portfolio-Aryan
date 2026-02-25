const CredBreakdown = () => (
  <div className="space-y-10">
    {/* Header */}
    <div>
      <p className="text-muted-foreground text-lg italic mb-2">Turning a boring financial chore into a luxurious habit</p>
    </div>

    {/* Section 1 */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧩</span> 1. Problem: Why CRED Exists
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Paying a credit card bill isn't hard — it's just boring. Users don't skip payments due to lack of money. They skip it due to <span className="text-foreground font-medium">lack of motivation</span>. The emotional payoff is missing.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        There's no excitement, no habit loop, and no sense of reward. Traditional banking apps make it a cold transaction.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        CRED spotted this behavioral gap — and turned a boring financial responsibility into a <span className="text-foreground font-medium">dopamine-powered ritual</span>.
      </p>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mt-4">
        <p className="text-sm text-primary font-medium">🚨 Key Insight</p>
        <p className="text-sm text-muted-foreground mt-1">CRED wasn't solving a functional problem. It solved a <span className="text-foreground font-medium">behavioral</span> one.</p>
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🛠</span> 2. UX & Product Decisions That Drive Engagement
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        CRED didn't add one feature — it redesigned the entire user journey to reinforce reward-seeking behavior.
      </p>

      {/* Sub-features */}
      {[
        {
          title: "1️⃣ Gamified Rewards (CRED Coins)",
          points: [
            "Every time users pay a bill, they earn CRED Coins.",
            "These coins can be redeemed for partner offers (e.g., Starbucks, Cult, Myntra).",
            "Coins = Instant feedback = Habit formation.",
          ],
          insight: "Immediate rewards activate dopamine circuits and reinforce behavior faster than rational benefits.",
        },
        {
          title: "2️⃣ Luxury UI & Branding",
          points: [
            "Serif fonts, black gradients, animated gold coins — CRED screams premium.",
            "Even micro interactions (like the \"bill paid\" animation) feel indulgent.",
          ],
          insight: "Users feel financially responsible and elite. CRED connects user identity to the product's visual language.",
        },
        {
          title: "3️⃣ Jackpot Features & Randomization",
          points: [
            "Users can participate in \"Jackpot\" contests.",
            "Spin-the-wheel mechanisms introduce surprise elements.",
            "Even if the user doesn't win, anticipation keeps them engaged.",
          ],
          insight: "It's variable reward design — a powerful behavior driver popularized by social platforms and games.",
        },
        {
          title: "4️⃣ Minimalist, Trust-Driven Interface",
          points: [
            "No upsells, no bloat, no third-party ads.",
            "Clear, focused CTAs — \"Pay bill\" is central.",
          ],
          insight: "In fintech, trust is product-market fit. A clean interface builds credibility and user comfort.",
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
        Using Nir Eyal's Hook Model, CRED builds a tight habit loop:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { step: "1. Trigger", items: ["External: Bill reminders", "Internal: Avoiding late fees, desire to build credit"] },
          { step: "2. Action", items: ["One-tap payment with a seamless interface"] },
          { step: "3. Variable Reward", items: ["Coins, jackpots, and random partner offers"] },
          { step: "4. Investment", items: ["Add multiple cards", "Build reward history", "Improve credit score over time"] },
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
        <p className="text-sm text-muted-foreground">📈 <span className="text-foreground font-medium">Result:</span> Users are motivated to return monthly without pushy notifications.</p>
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
          title: "1. Introduce a \"Credit Health Tracker\"",
          desc: "Let users visualize credit score improvement over time — with goals, progress bars, and educational nudges. Motivation shifts from external rewards to intrinsic credit growth.",
        },
        {
          emoji: "🎯",
          title: "2. Personalize Rewards Based on Spending Patterns",
          desc: "Use credit card category data to personalize partner offers. Foodies → Zomato discounts. Gym goers → Cult memberships. Shoppers → Myntra/Flipkart deals. Boosts perceived value of coins + engagement.",
        },
        {
          emoji: "🔁",
          title: "3. Add Streak-Based Habit Rewards",
          desc: "Reward users for consistent on-time payments: 3-month streak → bonus coins, 6-month streak → premium access, 12-month streak → CRED Elite status. Uses loss aversion and streak mechanics to drive long-term retention.",
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
        CRED's actual monetization is not from bill payments — it's from:
      </p>
      <ul className="space-y-2">
        {["Lending (CRED Cash, CRED Stash)", "BNPL products", "Brand partnerships for reward placement", "Premium membership plans (CRED Mint, RentPay)"].map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
        <p className="text-sm text-foreground font-medium">First build the habit → then sell the ecosystem.</p>
      </div>
    </div>

    {/* Section 6 - Final Takeaway */}
    <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 space-y-3">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🔚</span> 6. Final Takeaway
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        CRED turned a boring, avoidable chore into a <span className="text-foreground font-medium">premium, addictive habit loop</span>.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        It used design psychology, behavior science, and brand positioning — not deep discounts.
      </p>
      <p className="text-foreground font-semibold">This is what true product thinking looks like.</p>
    </div>
  </div>
);

export default CredBreakdown;
