import { Terminal, Network, ShieldAlert, ArrowUpRight, Code2, Database, GitBranch, TrendingUp, DollarSign } from "lucide-react";

const prds = [
  {
    id: "jiragenius",
    title: "JiraGenius",
    subtitle: "AI-Agent Workflow Orchestrator",
    description: "Technical specification for an LLM-powered agent that autonomously translates unstructured meeting transcripts into categorized Agile tickets.",
    specs: ["Multi-agent task mapping", "Jira API Integration", "Context overflow handling"],
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
    <section className="py-28 px-6 border-t border-border bg-secondary/10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="section-fade-in mb-14 text-center md:text-left">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Engineering Requirements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical PRDs & Architecture</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Translating strategic product vision into strict engineering specifications and edge-case protocols.
          </p>
        </div>

        {/* PRD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prds.map((prd) => (
            <div key={prd.id} className="glow-border-hover rounded-xl bg-card p-8 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-border">
              
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <prd.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight mb-1">{prd.title}</h3>
                  <p className="text-xs font-medium text-primary/80">{prd.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {prd.description}
              </p>

              {/* Technical Specs List */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Core Logic</span>
                </div>
                <ul className="space-y-2">
                  {prd.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {prd.stack.map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border flex items-center gap-1.5">
                    <Code2 className="w-3 h-3" />
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-4 border-t border-border">
                <a 
                  href={prd.link}
                  target="_self"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-all group bg-background"
                >
                  <Database className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  View Full PRD
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
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