const SnabbitBreakdown = () => (
  <div className="space-y-10">
    <div>
      <p className="text-muted-foreground text-lg italic mb-2">Building India's fastest on-demand home services ecosystem</p>
    </div>

    {/* Section 1 */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧩</span> 1. Problem: Why Snabbit Exists
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        In India, urban consumers are busy but deeply value cleanliness and convenience.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Hiring part-time help or scheduling a cleaner often means:
      </p>
      <ul className="space-y-1.5">
        {["Long booking times", "Unverified professionals", "Poor reliability"].map((p, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary mt-1 shrink-0">•</span>{p}
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Platforms like UrbanClap (now Urban Company) solved trust, but not <span className="text-foreground font-medium">speed</span>.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Snabbit spotted the gap between "scheduled convenience" and "instant need."
      </p>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mt-4">
        <p className="text-sm text-primary font-medium">🚨 Key Insight</p>
        <p className="text-sm text-muted-foreground mt-1">India's new consumer doesn't want service "tomorrow at 9AM." They want it <span className="text-foreground font-medium">now, within 10 minutes</span> — just like groceries or cabs.</p>
      </div>
    </div>

    {/* Section 2 */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🛠</span> 2. UX & Product Decisions That Drive Adoption
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Snabbit didn't just bring speed — it built a system that rewards urgency through tight operational loops.
      </p>
      {[
        {
          title: "1️⃣ The \"10-Minute Promise\"",
          points: ["Hyperlocal hubs across neighborhoods.", "On-ground partner network on standby, like gig riders.", "Optimized route-matching + predictive dispatch based on demand clusters."],
          insight: "Reduces user anxiety — customers feel they can depend on Snabbit for spontaneous needs.",
        },
        {
          title: "2️⃣ Pre-trained Micro Teams",
          points: ["Professionals trained for quick turnaround jobs (15–30 mins per home).", "Standardized cleaning kits and uniforms ensure consistent quality."],
          insight: "Increases trust + keeps time commitment predictable — key for repeat usage.",
        },
        {
          title: "3️⃣ Smart UI Flow",
          points: ["Category tiles for \"Cleaning,\" \"Dishes,\" \"Laundry,\" \"Quick Fix.\"", "Auto-suggests services based on previous orders + time of day.", "Live ETA & \"technician on the way\" micro-interactions."],
          insight: "Feels effortless — the app mirrors the \"one-tap dopamine\" loop of Swiggy or Zepto.",
        },
        {
          title: "4️⃣ Ratings & Local Hero Model",
          points: ["Each area has \"local heroes\" with reputation badges.", "Higher ratings → faster visibility in the algorithm."],
          insight: "Gamifies quality control — professionals compete for better response & reviews.",
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
        Using Nir Eyal's Hook Model, Snabbit converts occasional users into habitual ones:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { step: "1. Trigger", items: ["\"Need help cleaning right now.\"", "Immediate pain point"] },
          { step: "2. Action", items: ["Open Snabbit → One-tap booking", "Minimal friction"] },
          { step: "3. Variable Reward", items: ["Fast arrival, visible countdown, good service", "Dopamine + relief"] },
          { step: "4. Investment", items: ["Add home details, repeat bookings", "Higher retention"] },
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
        <p className="text-sm text-muted-foreground">📈 <span className="text-foreground font-medium">Result:</span> Snabbit becomes a reflex action whenever a household task pops up.</p>
      </div>
    </div>

    {/* Section 4 - Impact Snapshot */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">📊</span> 4. Impact Snapshot
      </h3>
      <p className="text-xs text-muted-foreground italic">Data indicative; modeled from hyperlocal delivery benchmarks (Zepto, Dunzo, Urban Company)</p>
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-primary/5">
              <th className="text-left p-3 text-foreground font-medium">Metric</th>
              <th className="text-left p-3 text-foreground font-medium">Early 2024</th>
              <th className="text-left p-3 text-foreground font-medium">Late 2025 (est.)</th>
              <th className="text-left p-3 text-foreground font-medium">Growth</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Service Hubs", "8", "40+", "5x"],
              ["Avg. Order Fulfilment Time", "26 mins", "9 mins", "-65%"],
              ["Monthly Active Users", "50K", "450K+", "9x"],
              ["Repeat User Rate", "—", "62%", "—"],
            ].map((row, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className={`p-3 ${j === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Section 5 - PM Suggestions */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧠</span> 5. Product Suggestions as a PM
      </h3>
      {[
        { emoji: "🔄", title: "1. \"Snabbit Plus\" Subscription", desc: "₹199/month for free priority service + loyalty points. Converts high-frequency users into members; boosts LTV." },
        { emoji: "🎯", title: "2. Predictive Demand AI", desc: "Use time-of-day + location data to pre-position micro-teams. Improves 10-min SLA reliability, reduces idle time." },
        { emoji: "💳", title: "3. Wallet + Smart Scheduling", desc: "Option to pre-book recurring cleanups or laundry cycles. Expands behavior from \"urgent\" to \"habitual.\"" },
        { emoji: "🧼", title: "4. Service Expansion Layer", desc: "Add \"Quick Car Wash\" or \"Minor Repairs\" within same app. Turns Snabbit from \"home help\" → \"hyperlocal convenience OS.\"" },
      ].map((s) => (
        <div key={s.title} className="rounded-xl bg-card border border-border p-5">
          <h4 className="font-semibold text-foreground mb-2">{s.emoji} {s.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>

    {/* Section 6 - Business Model */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧭</span> 6. Business Model & Strategy
      </h3>
      <p className="text-muted-foreground leading-relaxed">Snabbit monetizes through:</p>
      <ul className="space-y-2">
        {["Commission per order (10–20%)", "Surge pricing during peak hours", "Subscriptions (Snabbit Plus)", "B2B partnerships for housing societies & apartments"].map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>{item}
          </li>
        ))}
      </ul>
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
        <p className="text-sm text-foreground font-medium">🚀 Strategy: Own the last 500 meters of India's service economy — where time is the currency.</p>
      </div>
    </div>

    {/* Section 7 - Final Takeaway */}
    <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 space-y-3">
      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <span className="text-primary">🧩</span> 7. Final Takeaway
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Snabbit isn't competing with Urban Company — it's creating a new behavior: <span className="text-foreground font-medium">Instant Services.</span>
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Just like Swiggy made "delivery" a reflex, Snabbit is making "help" a reflex.
      </p>
      <p className="text-foreground font-semibold">The future of local services won't be about choice — it'll be about speed and reliability. And Snabbit is building exactly that habit.</p>
    </div>
  </div>
);

export default SnabbitBreakdown;
