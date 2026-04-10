import { Linkedin, Github, Mail, Calendar } from "lucide-react";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-singhal-3583b8331/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Aryan2725" },
  { icon: Mail, label: "Email", href: "mailto:aryansinghal352@gmail.com" }, // Added mailto: prefix
  { icon: Calendar, label: "Book a Call", href: "https://calendly.com/aryansinghal352/30min" }, // Added final CTA
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 bg-background relative z-10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-foreground font-bold text-lg mb-1">
            Aryan Singhal
          </p>
          <p className="text-muted-foreground text-sm">
            © 2026. Built for execution.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              aria-label={label}
              title={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;