import { Button } from "@/components/ui/button";
import { Play, Check } from "lucide-react";

const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.querySelector("#demonstration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Réponse automatique en moins de 60 secondes",
    "+40% de rendez-vous confirmés",
    "Synchronisation avec votre agenda"
  ];

  return (
    <section id="accueil" className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Badge preuve sociale */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border-2 border-accent/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-accent font-medium">+2000 artisans nous font confiance</span>
            </div>
            
            {/* Titre impact */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Transformez vos appels manqués en{" "}
              <span className="text-accent">clients satisfaits</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Notre IA répond à vos prospects 24/7, qualifie leurs besoins et planifie automatiquement vos rendez-vous.
            </p>
            
            {/* Bénéfices clés */}
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto text-lg"
              >
                Essayer gratuitement 14 jours →
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToDemo}
                className="w-full sm:w-auto text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Voir comment ça marche
              </Button>
            </div>
          </div>
          
          {/* Screenshot produit avec notification animée */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl gradient-hero overflow-hidden shadow-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-card text-4xl font-bold">MaxBaz Dashboard</div>
              </div>
            </div>
            
            {/* Notification animée */}
            <div className="absolute top-4 right-4 bg-card rounded-lg shadow-hover p-4 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Nouveau rendez-vous confirmé</p>
                  <p className="text-xs text-muted-foreground">Jean D. - Mardi 10h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
