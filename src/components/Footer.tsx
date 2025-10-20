import { Mail, Phone, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-accent/20 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MaxBaz</h3>
            <p className="text-blue-100 mb-6">
              Transformez vos appels manqués en clients.
            </p>
            {/* Réseaux sociaux avec fond visible */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Démonstration", href: "#demonstration" },
                { label: "Fonctionnalités", href: "#fonctionnalites" },
                { label: "Tarifs", href: "#tarifs" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-blue-100 hover:text-white transition-smooth"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact avec icônes */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@maxbaz.fr"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-smooth"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@maxbaz.fr</span>
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-smooth"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+33 1 23 45 67 89</span>
              </a>
            </div>
          </div>

          {/* Info supplémentaires */}
          <div>
            <h4 className="font-bold mb-4">Informations</h4>
            <ul className="space-y-3">
              <li className="text-blue-100">
                🔒 Données sécurisées
              </li>
              <li className="text-blue-100">
                ⏱ Installation 5 min
              </li>
              <li className="text-blue-100">
                ⭐ 4.9/5 - 320 avis
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 MaxBaz. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-smooth">
                Mentions légales
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                CGV
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
