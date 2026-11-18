'use client';

import { Terminal, ShieldAlert, ArrowUpRight, Code2, Database, GitBranch, TrendingUp, DollarSign, FileCheck, Layers } from "lucide-react";

interface SpecItem {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  stack: string[];
  icon: any;
  link: string;
  isExternal?: boolean;
}

const prds: SpecItem[] = [
  {
    id: "procurement-spec",
    title: "Procurement Coverage & Netting Logic",
    category: "Deterministic Supply Chain Architecture",
    description: "Production business logic specification detailing the two-bucket netting model, direct-FG conversion scaling, and 30 zero-assertion reconciliation checks.",
    specs: ["Two-bucket conservation identity", "Unit-safe Decimal type boundaries", "Zero-drift audit protocol"],
    stack: ["FastAPI", "Python 3.14", "YAML Mappings"],
    icon: FileCheck,
    link: "https://github.com/Aryan2725/RM-PM-Procurement-Control-Tower/blob/main/docs/BUSINESS_LOGIC_SPEC.md",
    isExternal: true,
  },
  {
    id: "profiling-contract",
    title: "Production Data Contract & Baseline Rules",
    category: "High-Scale Analytics Specification",
    description: "Data contract defining normalized Shopify order history, Shiprocket delivery event states, and in-memory bitset rank indexing across 310k customer records.",
    specs: ["Natural-key mobile normalization", "Bitset simulation engine", "Read-only MySQL transactions"],
    stack: ["Python 3.13", "SQLite Cache", "Bitsets"],
    icon: Database,
    link: "https://github.com/Aryan2725/ce-customer-profiling-dashboard/blob/main/docs/production-data-contract.md",
    isExternal: true,
  },
  {
    id: "logistic-optimizer",
    title: "Logistic Optimizer V2",
    category: "Exception-Based Dispatch PRD",
    description: "Architecture document for shifting B2B logistics from reactive tracking to proactive management via real-time SLA urgency scoring.",
    specs: ["SLA urgency scoring logic", "Stale GPS data protocol", "Mass risk UX alerts"],
    stack: ["React", "FastAPI", "Google Maps API"],
    icon: ShieldAlert,
    link: "/logistic_optimizer_prd.pdf",
  },
  {
    id: "finpath",
    title: "FinPath Optimizer",
    category: "Unit Economics Simulator PRD",
    description: "Live interactive dashboard requirements for simulating CAC/LTV, churn rate impacts, and breakeven timelines dynamically.",
    specs: ["Interactive Breakeven Engine", "Negative Margin Guardrails", "Non-Linear Churn Math"],
    stack: ["Next.js", "Recharts", "Tailwind"],
    icon: TrendingUp,
    link: "/finpath_optimizer_prd.pdf",
  },
  {
    id: "jiragenius",
    title: "JiraGenius",
    category: "Workflow Orchestrator PRD",
    description: "Technical specification for an LLM-powered agent translating unstructured meeting transcripts into categorized Agile tickets.",
    specs: ["Multi-agent task mapping", "Jira API Integration", "Context window optimization"],
    stack: ["Next.js", "Gemini 1.5 Pro", "OAuth 2.0"],
    icon: GitBranch,
    link: "/jiragenius_prd.pdf",
  },
  {
    id: "runway-genius",
    title: "Capital Insight",
    category: "Financial Co-Pilot PRD",
    description: "Requirements for cash burn analysis, parsing unstructured bank CSVs to predict zero-cash dates.",
    specs: ["Expense Categorization Engine", "Zero-Cash Predictor", "Multi-Currency Normalization"],
    stack: ["Python", "LLM Parsing", "Pandas"],
    icon: DollarSign,
    link: "/runway_genius_prd.pdf",
  },
];

export const ProductDocumentation = () => {
  return (
    <section id="specs" className="py-24 px-6 border-b border-border bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Engineering Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical PRDs & Data Contracts
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Translating strategic product vision into strict engineering specifications, data contracts, and deterministic edge-case protocols.
          </p>
        </div>

        {/* PRD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prds.map((prd) => (
            <div
              key={prd.id}
              className="p-6 rounded-lg border border-border bg-card hover:border-white/[0.2] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center shrink-0">
                    <prd.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-tight mb-0.5">
                      {prd.title}
                    </h3>
                    <p className="text-[11px] font-mono text-primary font-medium">{prd.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {prd.description}
                </p>

                {/* Technical Specs List */}
                <div className="mb-4 space-y-1.5 p-3 rounded bg-secondary/30 border border-border/50 text-[11px] font-mono">
                  <span className="text-[10px] text-muted-foreground uppercase font-semibold block mb-1">
                    Core Protocol
                  </span>
                  {prd.specs.map((spec, i) => (
                    <div key={i} className="text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary/70 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {prd.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary/50 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href={prd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded border border-border bg-card text-foreground text-xs font-mono font-medium hover:bg-secondary/60 transition-colors"
                >
                  <span>{prd.isExternal ? "Read Spec on GitHub" : "View Full PRD"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDocumentation;
