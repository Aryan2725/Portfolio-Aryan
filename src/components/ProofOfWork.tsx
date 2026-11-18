'use client';

import { Terminal, Shield, GitBranch, Database, CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";

interface SystemCardProps {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  scaleMetric: string;
  problem: string;
  architecture: {
    label: string;
    description: string;
  }[];
  specBadges: string[];
  keyInsight: string;
  repoLink?: string;
}

const systems: SystemCardProps[] = [
  {
    id: "ce-profiling",
    badge: "Enterprise Data Engine · Anveshan",
    title: "CE Customer Profiling & Dynamic Potential Engine",
    subtitle: "High-performance lifecycle segmentation & real-time criteria simulation",
    scaleMetric: "310,000 customers · 809,000 lifetime orders · ~40ms in-memory simulation",
    problem:
      "Customer experience and marketing teams had no objective, explainable rulebook to distinguish high-LTV advocates from margin-bleeding RTO offenders. Production MySQL could not tolerate analytical queries on millions of unindexed order rows.",
    architecture: [
      {
        label: "Decoupled Local Baseline",
        description: "Standardizes Shopify order lines and Shiprocket delivery events into an immutable local SQLite cache, insulating production MySQL behind a strictly read-only session.",
      },
      {
        label: "Bitset Simulation Engine",
        description: "Re-profiles all 310k customers in ~40ms upon leadership tweaking thresholds. Evaluates boundaries using bisection across unrounded Decimals and bitset algebra—zero NumPy/Pandas dependency.",
      },
      {
        label: "Deterministic Blocker Diagnostics",
        description: "Names the exact single criterion blocking an account from upgrading a tier (e.g., 'AOV is ₹2,017; Iconic requires ≥ ₹2,700. Gap: ₹683'). Never dumps near-misses into cleanup.",
      },
      {
        label: "Architecture Enforcement",
        description: "636 backend tests with automated AST linting that fails if rules engine imports FastAPI, Pydantic, or any I/O layer.",
      },
    ],
    specBadges: ["Python 3.13", "FastAPI", "React + TS", "SQLite Baseline", "Bitset Simulation", "636 Tests"],
    keyInsight: "Don't write heuristics when exact set algebra can run 300,000 records in 40ms.",
    repoLink: "https://github.com/Aryan2725/ce-customer-profiling-dashboard",
  },
  {
    id: "procurement-control-tower",
    badge: "Supply Chain Operations · Anveshan",
    title: "RM & PM Procurement Planning & Control Tower",
    subtitle: "Deterministic Bill-of-Materials explosion & reconciliation control tower",
    scaleMetric: "30 zero-assertion checks · Unit-safe Decimals · SHA-256 pinned immutable runs",
    problem:
      "Multi-channel demand projections (D2C, B2B Quick-Commerce, Modern Trade) required manual Excel collation to determine purchase orders. Minor float errors or unit mismatches (litres vs kilograms) resulted in lakhs of rupee stockouts or dead inventory.",
    architecture: [
      {
        label: "Exact Decimal & Unit Safety",
        description: "Quantities are strictly typed Decimals. A litre requirement cannot be reduced by a kilogram purchase order—the type system refuses compilation rather than silently producing a wrong number.",
      },
      {
        label: "Two-Bucket Conservation Netting",
        description: "Remaining = MAX(0, Req - Received); Net = MAX(0, Req - Received - Pending); Excess = MAX(0, Received + Pending - Req). Enforces conservation identity: gross − received − pending + excess − net = 0.",
      },
      {
        label: "Direct-FG Equivalency Mapping",
        description: "Handles items procured as finished goods vs manufactured in-house, scaling RM-equivalent requirements via curated, version-controlled mappings in YAML.",
      },
      {
        label: "30 Reconciliation Assertions",
        description: "Runs 30 strict zero-difference equality assertions per calculation run. Any single assertion failure marks the run INVALID and locks execution.",
      },
    ],
    specBadges: ["Python 3.14", "FastAPI", "React 18", "Filflo API", "BOM Explosion", "30 Reconciliation Asserts"],
    keyInsight: "Procurement mistakes are asymmetric. An unmapped code must default to 100% requirement so errors only ever over-order, never under-order.",
    repoLink: "https://github.com/Aryan2725/RM-PM-Procurement-Control-Tower",
  },
  {
    id: "churn-intelligence",
    badge: "Retention & Churn Architecture · Anveshan",
    title: "Customer Reorder & Churn Intelligence Platform",
    subtitle: "Full-scale pipeline normalizing 1.18M Shopify orders into actionable cohorts",
    scaleMetric: "1,182,648 raw rows → 803,347 deduplicated orders · 7-stage recency cohorts",
    problem:
      "Customer phone numbers were malformed, order lines were duplicated across multiple draft events, and customer support had no automated system to detect when a repeat ghee or oil buyer had lapsed past their natural consumption cycle.",
    architecture: [
      {
        label: "Natural-Key Normalization",
        description: "Collapses 1.18M raw line items by hashing Order Key + SKU + Unit Price + Header flag. Cleans messy Indian phone numbers to canonical 10 digits without false merges.",
      },
      {
        label: "7-Stage Recency Pipeline",
        description: "Partitions the user base into non-overlapping operational stages: Immediate Repeaters (0–44d), Active (45–74d), Likely to Dormant, Dormant, Likely to Churn, Churn, and Inactive (365d+).",
      },
      {
        label: "Category-Specific Cycle Tracking",
        description: "Computes expected reorder dates dynamically based on category burn rates (Ghee: 45 days, Cold-Pressed Oils: 42 days). Surfaces daily overdue contact queues.",
      },
      {
        label: "Fail-Closed Security & Watermarks",
        description: "Transactional sync with 3-day look-back watermarking. Auth fails closed on deployment, ensuring zero PII leakages.",
      },
    ],
    specBadges: ["FastAPI", "PostgreSQL / SQLite", "Natural-Key Deduplication", "Cohort Pipeline", "Render Deployment"],
    keyInsight: "Raw order history is noisy. Normalize customer identity by validated mobile phone before deriving retention metrics.",
    repoLink: "https://github.com/Aryan2725/Customer-reorder-churn",
  },
  {
    id: "fg-planning",
    badge: "Supply Chain & Demand Planning · Anveshan",
    title: "Finished Goods (FG) Multi-Channel Planning Engine",
    subtitle: "Multi-channel demand ingestion, SKU translation & monthly production planning",
    scaleMetric: "Dispatch B2B + Emiza D2C + Prozo D2C consolidation · +10% dynamic buffer · Multi-sheet Excel exports",
    problem:
      "Monthly demand projections were fragmented across inconsistent Excel layouts from multiple 3PL fulfillment partners and B2B channels. Planners spent days manually cleaning sheets, resolving obsolete Child SKUs, and guessing buffer stock requirements.",
    architecture: [
      {
        label: "Dynamic Layout & Period Detection",
        description: "Parses heterogeneous multi-channel Excel workbooks, identifies sheet roles automatically, extracts cell references, and validates Grand Total controls before planning.",
      },
      {
        label: "Child SKU Translation Engine",
        description: "Detects Child SKU discrepancies (e.g., 23 of 65 SKUs differing) and maps them to canonical master SKUs via version-controlled translation dictionaries.",
      },
      {
        label: "Structural Format Profiles",
        description: "Fingerprints sheet headers and layout patterns into versioned JSONL format profiles, allowing new monthly files to inherit verified mappings without re-prompting.",
      },
      {
        label: "Fail-Closed Security & Audit Trail",
        description: "Protected by session password gating, localhost binding, and multi-tab Excel calculation traces detailing every excluded row and buffer calculation.",
      },
    ],
    specBadges: ["Python 3.14", "Streamlit", "Excel Ingestion", "SKU Mapping", "Audit Trail", "Render Ready"],
    keyInsight: "Planning sheets are always dirty. Build structural layout fingerprinting so repetitive monthly mapping is solved once.",
    repoLink: "https://github.com/Aryan2725/fg-planning-procurement-app",
  },
  {
    id: "anveshan-executive-dashboard",
    badge: "Executive Operations & Visibility · Anveshan",
    title: "Executive Supply Chain Health Dashboard",
    subtitle: "Single-pane-of-glass executive command screen answering 'is anything wrong today or this week?'",
    scaleMetric: "952 historical metric readings · 7-calendar-day rolling windows · Automated RAG threshold alerting",
    problem:
      "Executive leadership was overwhelmed by sprawling operational spreadsheets across JWL, Manesar, and 3PL facilities. Founders had no unified interface to detect fill-rate dips, packing bottlenecks, or stockout risks before they impacted customer delivery.",
    architecture: [
      {
        label: "Dual Daily & Weekly Rolling Windows",
        description: "Computes true 7-calendar-day rolling averages from raw daily readings, respecting metric grains (daily vs monthly vs single-point snapshot) without data distortion.",
      },
      {
        label: "Priority Bottleneck Engine",
        description: "'What Needs Attention' dynamically ranks the worst operational variances first, hyperlinking directly to line-level drilldowns for instant root-cause analysis.",
      },
      {
        label: "Unified RAG Threshold Governance",
        description: "Centralized threshold definitions (e.g., fill rate < 95%, operating cost > 5.5%, finished goods < 2 days-on-hand) powering cross-facility alert banners.",
      },
      {
        label: "Decoupled Fact-Table Architecture",
        description: "Powered by an Express API over a SQLite metric_daily fact table with 952 historical readings, guaranteeing instantaneous sub-50ms dashboard loads.",
      },
    ],
    specBadges: ["React 18", "Express", "SQLite Fact Table", "Chart.js", "RAG Thresholds", "Executive View"],
    keyInsight: "Executives don't need all the data; they need the exceptions. Surface the worst 4 problems and hide the noise.",
    repoLink: "https://github.com/Aryan2725/anveshan-executive-dashboard",
  },
  {
    id: "regprep-os",
    badge: "Algorithmic Systems & Offline-First PWA",
    title: "RegPrep OS: Regulatory Study Engine",
    subtitle: "Zero-network, test-enforced PWA with FSRS scheduling & statistical readiness bounds",
    scaleMetric: "114 sessions · 162 hours · FSRS clamped scheduling · AST-tested zero network leakage · 229 tests",
    problem:
      "High-stakes regulatory competitive exams (IFSCA & SEBI Grade A) require rigorous consistency across hundreds of syllabus topics. Existing flashcard tools guess confidence, average percentages naively, and leak private data to cloud services.",
    architecture: [
      {
        label: "FSRS Spaced Repetition Clamping",
        description: "Implements Free Spaced Repetition Scheduling clamped to an immovable 42-day calendar so review intervals never slide past exam date.",
      },
      {
        label: "Wilson Score Statistical Lower Bounds",
        description: "Replaces naive percentage averages with Wilson score lower bounds, explicitly withholding readiness scores until sufficient sample size is established.",
      },
      {
        label: "AST-Enforced Zero-Network Privacy",
        description: "Automated test suite inspects the AST (answer-safety.test.ts) and fails the build if any fetch or WebSocket call appears in data/engine layers.",
      },
      {
        label: "Byte-Exact Plan Verification",
        description: "CI independently verifies 114 session, 122 task, and 137 topic character spans byte-by-byte against markdown source and checks SHA-256 integrity.",
      },
    ],
    specBadges: ["Preact", "TypeScript", "Vite PWA", "Dexie / IndexedDB", "ts-fsrs", "Wilson Bounds", "229 Tests"],
    keyInsight: "True rigor means withholding a score until statistically defensible, and enforcing privacy in the test runner, not a privacy policy.",
    repoLink: "https://github.com/Aryan2725/regprep-os",
  },
];

export const ProofOfWork = () => {
  return (
    <section id="systems" className="py-24 px-6 border-b border-border bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Proof of Work · Production Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Deterministic Systems Shipped at Scale
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            I don't just write strategy slide decks. I engineer clean, tested operational backbones that eliminate supply chain leakage, automate procurement math, and profile hundreds of thousands of live transactions.
          </p>
        </div>

        {/* System Cards */}
        <div className="space-y-12">
          {systems.map((system) => (
            <article
              key={system.id}
              className="rounded-lg border border-border bg-card p-6 sm:p-8 hover:border-white/[0.18] transition-all"
            >
              {/* Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border/80">
                <div>
                  <span className="text-xs font-mono text-primary font-medium block mb-1">
                    {system.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {system.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {system.subtitle}
                  </p>
                </div>

                {system.repoLink && (
                  <a
                    href={system.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-secondary/50 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-white/[0.2] transition-colors"
                  >
                    <span>Inspect Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Hard Scale Metric Banner */}
              <div className="my-5 p-3 rounded bg-secondary/30 border border-border/60 flex items-center gap-2 text-xs font-mono text-foreground">
                <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-semibold text-emerald-400">Scale & Guardrail:</span>
                <span className="text-muted-foreground">{system.scaleMetric}</span>
              </div>

              {/* Operational Bottleneck */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  The Operational Bottleneck
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {system.problem}
                </p>
              </div>

              {/* Architecture & Engineering Execution */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-primary" />
                  <span>Architecture & Execution Principles</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {system.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded bg-background/50 border border-border/50 text-left"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operator Takeaway */}
              <div className="p-3.5 rounded bg-primary/5 border border-primary/20 text-xs font-mono text-foreground/90 mb-6">
                <span className="text-primary font-bold">Operator Maxim: </span>
                <span>"{system.keyInsight}"</span>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/80">
                {system.specBadges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-secondary/60 text-muted-foreground border border-border/60"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
