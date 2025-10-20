import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      name: "ESSENTIEL",
      price: "50€",
      period: "/mois",
      features: [
        "SMS automatiques illimités",
        "Qualification basique",
        "Agenda synchronisé",
        "Support par email",
      ],
      featured: false,
    },
    {
      name: "PROFESSIONNEL",
      price: "90€",
      period: "/mois",
      features: [
        "Tout l'Essentiel +",
        "Qualification avancée",
        "Tableau de bord complet",
        "Intégrations CRM",
        "Support prioritaire",
        "Rapports mensuels",
      ],
      featured: true,
    },
    {
      name: "CUSTOM",
      price: "Sur mesure",
      period: "",
      features: [
        "Tout le Professionnel +",
        "Fonctionnalités sur mesure",
        "API dédiée",
        "Account manager dédié",
        "Formation personnalisée",
      ],
      featured: false,
    },
  ];

  return (
    <section id="tarifs" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos formules
          </h2>
          <p className="text-xl text-accent font-semibold">
            14 jours d'essai gratuit, sans engagement !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth relative ${
                plan.featured ? "border-2 border-accent md:scale-105" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold shadow-lg">
                  🔥 Plus populaire
                </div>
              )}
              
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                {plan.featured && (
                  <p className="text-sm text-accent font-semibold mt-2">
                    Meilleur rapport qualité/prix
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                variant={plan.featured ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.name === "CUSTOM" ? "Demander un devis" : "Commencer Gratuitement"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
