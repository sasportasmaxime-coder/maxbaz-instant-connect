import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Accueil",
    href: "#accueil"
  }, {
    label: "Démonstration",
    href: "#demonstration"
  }, {
    label: "Fonctionnalités",
    href: "#fonctionnalites"
  }, {
    label: "Tarifs",
    href: "#tarifs"
  }, {
    label: "FAQ",
    href: "#faq"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "glass shadow-lg border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 bg-blue-300">
          {/* Logo */}
          <a href="#accueil" onClick={e => {
          e.preventDefault();
          scrollToSection("#accueil");
        }} className="group flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-bounce">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 blur-lg transition-smooth rounded-xl"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MaxBaz
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.slice(1, 5).map(item => <a key={item.label} href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href);
          }} className="relative px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-smooth rounded-lg group">
                <span className="relative z-10 font-bold">{item.label}</span>
                <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-smooth rounded-lg"></span>
              </a>)}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#connexion" className="px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-smooth">
              Connexion
            </a>
            <Button variant="hero" size="lg" onClick={() => scrollToSection("#contact")} className="shadow-lg hover-glow hover-scale transition-smooth bg-green-600 hover:bg-green-500">
              <span>Essai gratuit 14j</span>
              <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden glass rounded-xl hover:scale-110 transition-bounce" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden pb-4 animate-fade-in">
            <div className="glass rounded-2xl p-4 mt-4 space-y-2">
              {navItems.map(item => <a key={item.label} href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href);
          }} className="block px-4 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-smooth rounded-xl">
                  {item.label}
                </a>)}
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;