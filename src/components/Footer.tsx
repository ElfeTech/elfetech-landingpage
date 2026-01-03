import { Twitter, Linkedin, Github, Mail, Facebook } from "lucide-react";
import logoWithText from "@/assets/elfetech-logowith-text.png";
import { openCalendly } from "./WhatDoYouWantToDo";

interface FooterLink {
  name: string;
  href: string;
  isExternal?: boolean;
  isCalendly?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: FooterColumn[] = [
    {
      title: "Product",
      links: [
        { name: "Beleh AI", href: "https://beleh.elfetech.com", isExternal: true },
        { name: "Documentation", href: "https://beleh.elfetech.com", isExternal: true  },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Cloud Consulting", href: "#services" },
        { name: "Vibe Coding", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Process", href: "#how-it-works" },
        { name: "Contact", href: "#", isCalendly: true },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-slate-400 py-20 border-t border-slate-800">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <a href="/" className="flex items-center">
              <img 
                src={logoWithText} 
                alt="Elfetech" 
                className="h-[3em] w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Elfetech (Infinite Technology) empowers businesses with cutting-edge AI products and cloud consulting services.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/elfetech/" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/Elfetech/" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.isCalendly ? (
                      <button 
                        onClick={openCalendly}
                        className="text-sm hover:text-primary transition-colors cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-sm hover:text-primary transition-colors"
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Elfetech Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
