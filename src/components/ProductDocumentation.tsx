import { Terminal, Network, ShieldAlert, ArrowUpRight, Code2, Database, GitBranch, TrendingUp, DollarSign } from "lucide-react";

const prds = [
  {
    id: "jiragenius",
    title: "JiraGenius",
    subtitle: "AI-Agent Workflow Orchestrator",
    description: "Technical specification for an LLM-powered agent that autonomously translates unstructured meeting transcripts into categorized Agile tickets.",
    specs: ["Multi-agent task mapping", "Jira API Integration", "Context window optimization"],
    stack: ["Next.js", "Gemini 1.5 Pro", "OAuth 2.0"],
    icon: Network,
    link: "/jiragenius_prd.pdf"
  },
  {
    id: "astra",
    title: "Astra",
    subtitle: "Autonomous B2B Sales Agent",
    description: "Product requirements for a context-aware Agentic AI. Astra researches prospects, stores context in a Vector DB, and generates hyper-personalized outreach.",
    specs: ["Vector DB memory persistence", "RAG-based lead enrichment", "Dynamic persona adaptation"],
    stack: ["Python", "LangChain", "Pinecone"],
    icon: Terminal,
    link: "/astra_prd.pdf"
  },
  {
    id: "logistic-optimizer",
    title: "Logistic Optimizer V2",
    subtitle: "Exception-Based Dispatch Routing",
    description: "Architecture document for shifting B2B logistics from reactive tracking to proactive management via real-time SLA urgency scoring.",
    specs: ["SLA urgency scoring logic", "Stale GPS data protocol", "Mass risk UX alerts"],
    stack: ["React", "FastAPI", "Google Maps API"],
    icon: ShieldAlert,
    link: "/logistic_optimizer_prd.pdf"
  },
  {
    id: "finpath",
    title: "FinPath Optimizer",
    subtitle: "Unit Economics Simulator",
    description: "Live interactive dashboard requirements for simulating CAC/LTV, churn rate impacts, and breakeven timelines dynamically.",
    specs: ["Interactive Breakeven Engine", "Negative Margin Guardrails", "Non-Linear Churn Math"],
    stack: ["Next.js", "Recharts", "Tailwind"],
    icon: TrendingUp,
    link: "/finpath_optimizer_prd.pdf"
  },
  {
    id: "runway-genius",
    title: "Capital Insight",
    subtitle: "AI Financial Co-Pilot",
    description: "Requirements for an autonomous pulse on cash burn and capital allocation, parsing unstructured bank CSVs to predict zero-cash dates.",
    specs: ["Expense Categorization Engine", "Zero-Cash Predictor", "Multi-Currency Normalization"],
    stack: ["Python", "LLM Parsing", "Pandas"],
    icon: DollarSign,
    link: "/runway_genius_prd.pdf"
  }
];

const ProductDocumentation = () => {
  return (
    <section className="py-28 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="section-fade-in mb-14 text-center md:text-left">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
             <span className="w-2 h-2 rounded-full bg-primary" />
             Engineering Requirements
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Technical PRDs & Spec Docs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0">
            Translating strategic product vision into strict engineering specifications, system architecture, and edge-case protocols.
          </p>
        </div>

        {/* PRD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prds.map((prd) => (
            <div 
              key={prd.id} 
              className="glow-border-hover rounded-2xl bg-card p-8 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-border hover:border-primary/50 relative overflow-hidden group"
            >
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header */}
              <div className="flex items-start gap-4 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                  <prd.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">{prd.title}</h3>
                  <p className="text-xs font-semibold text-emerald-500">{prd.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 relative z-10">
                {prd.description}
              </p>

              {/* Technical Specs List */}
              <div className="mb-6 space-y-2 relative z-10 bg-secondary/30 p-4 rounded-xl border border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Core Logic</span>
                </div>
                <ul className="space-y-2.5">
                  {prd.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="mb-8 flex flex-wrap gap-2 relative z-10">
                {prd.stack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2.5 py-1 rounded bg-secondary text-muted-foreground border border-border flex items-center gap-1.5 group-hover:border-primary/30 transition-colors">
                    <Code2 className="w-3 h-3" />
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-5 border-t border-border/50 relative z-10">
                {/* CRITICAL FIX: target="_blank" so PDFs don't overwrite your portfolio tab */}
                <a 
                  href={prd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-foreground text-sm font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm"
                >
                  <Database className="w-4 h-4" />
                  View Full PRD
                  <ArrowUpRight className="w-4 h-4 ml-auto" />
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