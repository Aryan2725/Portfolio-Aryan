import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "JiraGenius",
    description: "AI meeting-to-Jira pipeline. Automatically converts meeting transcripts into actionable Jira tickets with smart prioritization.",
    link: "https://jiragenius.vercel.app/",
    icon: Sparkles,
    tags: ["AI", "Automation", "SaaS"],
  },
  {
    title: "FinPath Simulator",
    description: "SaaS Unit Economics modeling tool. Model CAC, LTV, churn, and revenue scenarios to validate business viability.",
    link: "https://fin-path-simulator.vercel.app/",
    icon: TrendingUp,
    tags: ["Finance", "Analytics", "Modeling"],
  },
];

const LivePrototypes = () => {
  return (
    <section id="prototypes" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="section-fade-in">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Live Prototypes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shipped & Live
          </h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-xl">
            Real products, live in production. Click to explore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glow-border-hover rounded-xl bg-card p-8 flex flex-col justify-between min-h-[280px] transition-all duration-500 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Try it Live →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivePrototypes;
