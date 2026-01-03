import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoWithText from "@/assets/elfetech-logowith-text.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#beleh" },
    { name: "Services", href: "#services" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container !py-0 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src={logoWithText} 
            alt="Elfetech" 
            className="h-[3em] w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-slate-600" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild>
            <a href="https://beleh.elfetech.com/signup">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hover:text-primary transition-colors ${
              isScrolled ? "text-slate-600" : "text-white"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-6 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full" asChild>
            <a href="https://beleh.elfetech.com/signup">Get Started</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

