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
              className={`bg-card p-8 rounded-2xl shadow-card transition-smooth relative ${
                plan.featured
                  ? "border-2 border-accent md:scale-105 md:-my-4"
                  : "hover:shadow-hover"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Plus populaire
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
                onClick={scrollToContact}
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
