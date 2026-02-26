import { Linkedin, Github, Mail } from "lucide-react";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-singhal-3583b8331/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Aryan2725" },
  { icon: Mail, label: "Email", href: "aryansinghal352@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          © 2026 Aryan Singhal. Built with purpose.
        </p>

        <div className="flex items-center gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              aria-label={label}
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
