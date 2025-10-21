import { Mail, Phone, Linkedin, Facebook, Instagram, Twitter, MapPin, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary text-white pt-20 pb-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl gradient-accent flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-3xl font-bold">MaxBaz</h3>
            </div>

            <p className="text-white/80 leading-relaxed">
              Transformez vos appels manqués en clients satisfaits grâce à notre IA innovante.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-11 h-11 glass-dark hover:bg-accent rounded-xl flex items-center justify-center transition-smooth hover-scale group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Navigation
            </h4>
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
                    className="text-white/70 hover:text-accent transition-smooth hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@maxbaz.fr"
                className="group flex items-start gap-3 text-white/70 hover:text-accent transition-smooth"
              >
                <div className="w-11 h-11 glass-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-smooth">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Email</p>
                  <span className="font-medium">contact@maxbaz.fr</span>
                </div>
              </a>

              <a
                href="tel:+33123456789"
                className="group flex items-start gap-3 text-white/70 hover:text-accent transition-smooth"
              >
                <div className="w-11 h-11 glass-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-smooth">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Téléphone</p>
                  <span className="font-medium">+33 1 23 45 67 89</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <div className="w-11 h-11 glass-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Adresse</p>
                  <span className="font-medium">Paris, France</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info supplémentaires */}
          <div>
            <h4 className="font-bold text-lg mb-6">Informations</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Données sécurisées</p>
                  <p className="text-xs text-white/60">Conformité RGPD</p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <span className="text-xl">⏱</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Installation rapide</p>
                  <p className="text-xs text-white/60">Prêt en 5 minutes</p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Excellent service</p>
                  <p className="text-xs text-white/60">4.9/5 - 320 avis</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm">
              © 2025 MaxBaz. Tous droits réservés.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-smooth"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-smooth"
              >
                CGV
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-accent transition-smooth"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-xs">
              Fait avec ❤️ en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
