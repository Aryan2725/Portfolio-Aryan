import { Linkedin, Github, Mail, Calendar, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-foreground block">
            Aryan Singhal
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            M.Sc. Economics · IIIT Lucknow · Open to Series A & B Founder's Office / BizOps
          </span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: FileText, label: "Resume", href: "/Aryan_Singhal_Resume.pdf" },
            { icon: Calendar, label: "Book 15-min Call", href: "https://calendly.com/aryansinghal352/30min" },
            { icon: Mail, label: "Email", href: "mailto:aryansinghal352@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-singhal-3583b8331/" },
            { icon: Github, label: "GitHub", href: "https://github.com/Aryan2725" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-card text-xs font-mono text-muted-foreground hover:text-foreground hover:border-white/[0.2] transition-colors"
              aria-label={label}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
