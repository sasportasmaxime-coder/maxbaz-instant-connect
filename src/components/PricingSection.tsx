import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";
const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const plans = [{
    name: "ESSENTIEL",
    price: "50€",
    period: "/mois",
    features: ["SMS automatiques illimités", "Qualification basique", "Agenda synchronisé", "Support par email"],
    featured: false,
    icon: Star,
    gradient: "from-blue-500 to-cyan-500"
  }, {
    name: "PROFESSIONNEL",
    price: "90€",
    period: "/mois",
    features: ["Tout l'Essentiel +", "Qualification avancée", "Tableau de bord complet", "Intégrations CRM", "Support prioritaire", "Rapports mensuels"],
    featured: true,
    icon: Zap,
    gradient: "from-purple-500 to-pink-500"
  }, {
    name: "CUSTOM",
    price: "Sur mesure",
    period: "",
    features: ["Tout le Professionnel +", "Fonctionnalités sur mesure", "API dédiée", "Account manager dédié", "Formation personnalisée"],
    featured: false,
    icon: Crown,
    gradient: "from-orange-500 to-red-500"
  }];
  return <section id="tarifs" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background"></div>
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Choisissez votre{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              formule idéale
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-4">
            Commencez avec 14 jours d'essai gratuit
          </p>
          <p className="text-lg font-semibold text-accent">
            Sans engagement • Sans carte bancaire
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
          const Icon = plan.icon;
          return <div key={index} className={`relative group ${plan.featured ? 'md:scale-105' : ''}`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {/* Popular badge */}
                {plan.featured && <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="glass-dark px-6 py-2 rounded-full shadow-2xl border border-accent/50">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-white font-bold text-sm">Plus populaire</span>
                      </div>
                    </div>
                  </div>}

                {/* Card */}
                <div className={`relative bg-card rounded-3xl p-8 lg:p-10 shadow-xl hover-lift transition-smooth border ${plan.featured ? 'border-accent/50 shadow-glow' : 'border-border/50'}`}>
                  {/* Gradient overlay */}
                  {plan.featured && <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Plan name */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-slate-950 text-left">
                          {plan.price}
                        </span>
                        {plan.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
                      </div>
                      {plan.featured && <p className="text-sm font-semibold text-accent mt-2">
                          Meilleur rapport qualité/prix
                        </p>}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3 group/item">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-smooth">
                            {feature}
                          </span>
                        </li>)}
                    </ul>

                    {/* CTA Button */}
                    <Button onClick={scrollToContact} variant={plan.featured ? "hero" : "outline"} className={`w-full text-base py-6 shadow-lg hover-glow transition-smooth ${plan.featured ? 'bg-gradient-to-r from-primary to-accent hover:shadow-xl' : ''}`} size="lg">
                      {plan.name === "CUSTOM" ? "Demander un devis" : "Commencer gratuitement"}
                    </Button>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-smooth`}></div>
                </div>
              </div>;
        })}
        </div>

        {/* Bottom guarantee section */}
        <div className="mt-20 text-center animate-fade-up">
          <div className="max-w-2xl mx-auto glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Garantie satisfait ou remboursé 30 jours
            </h3>
            <p className="text-muted-foreground">
              Essayez MaxBaz sans risque. Si vous n'êtes pas satisfait, nous vous remboursons intégralement dans les 30 jours.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;