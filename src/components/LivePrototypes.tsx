import { ArrowUpRight, Sparkles, TrendingUp, Terminal, Truck, Figma } from "lucide-react";

const projects = [
  {
    title: "JiraGenius",
    metric: "Saves 3+ hours per sprint planning session",
    description: "Automated tool that translates raw meeting transcripts directly into BDD-format Agile User Stories.",
    link: "https://jiragenius.vercel.app/",
    icon: Sparkles,
    tags: ["Next.js", "Firebase Genkit", "Gemini LLM"],
  },
  {
    title: "Logistic Optimizer V2",
    metric: "Flags SLA breach risk before it happens — not after",
    description: "An SLA-urgency dispatch dashboard solving the gap between Finance (waste reduction) and Fulfillment (SLA compliance).",
    link: "https://logistics-command.vercel.app/", 
    icon: Truck,
    tags: ["React", "Tailwind", "AI Agents"],
  },
  {
    title: "Astra",
    metric: "RAG-powered B2B Sales Agent with persistent memory",
    description: "Context-aware AI companion with cross-session memory, eliminating conversational amnesia to drive retention and hyper-personalized outbound.",
    link: "https://astra-sales-agent.vercel.app/",
    icon: Terminal,
    tags: ["React", "Pinecone", "LLM API"],
  },
  {
    title: "FinPath Simulator",
    metric: "Real-time CAC/LTV simulation for founders",
    description: "Interactive unit-economics engine simulating runway impacts and margins. Shipped in under 24 hours.",
    link: "https://fin-path-simulator.vercel.app/",
    icon: TrendingUp,
    tags: ["React", "LLM Financial Modeling"],
  },
  {
    title: "Capital Insight",
    metric: "Predicts runway burn and fundraising trigger points",
    description: "AI-powered financial dashboard giving founders clear visibility into burn rates and capital allocation triggers.",
    link: "https://capitalplus-insights.vercel.app/",
    icon: TrendingUp,
    tags: ["React", "Data Viz", "Finance"],
  },
  {
    title: "Two-Layer Auth Flow",
    metric: "Full user flow solving a Workspace security gap",
    description: "Designed a complete two-layer admin approval authentication prototype to bridge a critical security vulnerability at StrainX Biotech.",
    link: "https://www.figma.com/design/KovhY5BgqxoGxAHdqI3UTe/two-layered-admin-approval?node-id=0-1&t=qV5evKZXEkHO4PTe-1", // Replace with your actual Figma URL
    icon: Figma,
    tags: ["Figma", "UI/UX", "Product Design"],
  },
];

const LivePrototypes = () => {
  return (
    <section id="prototypes" className="py-28 px-6 bg-secondary/10 border-y border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="section-fade-in mb-16">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live AI Micro-Apps
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Live Prototypes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I don't just write strategy documents. I build functional products to validate operational fixes and unit-economic theories. Click to explore the live deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link === "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group border border-border rounded-2xl bg-background p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_hsl(var(--glow)/0.2)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* The Hard Metric - Immediately grabs attention */}
                <p className="text-emerald-500 font-semibold text-sm mb-4 pb-4 border-b border-border/50">
                  {project.metric}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-1 rounded bg-secondary text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivePrototypes;