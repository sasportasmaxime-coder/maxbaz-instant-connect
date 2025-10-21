import { Button } from "@/components/ui/button";
import { Play, Check, TrendingUp, Zap } from "lucide-react";
const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.querySelector("#demonstration");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const benefits = ["Réponse automatique en moins de 60 secondes", "+40% de rendez-vous confirmés", "Synchronisation avec votre agenda"];
  return <section id="accueil" className="relative pt-32 pb-24 px-4 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background/80 to-background pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-up">
            {/* Titre impact */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
              Transformez vos appels manqués en{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-emerald-500">
                clients satisfaits
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Notre IA répond à vos prospects 24/7, qualifie leurs besoins et planifie automatiquement vos rendez-vous.
            </p>

            {/* Bénéfices clés */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => <li key={index} className="flex items-center gap-4 group" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-8 h-8 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-bounce">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-foreground font-semibold text-lg">{benefit}</span>
                </li>)}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover-lift hover-glow group">
                <span>Essayer gratuitement 14 jours</span>
                <Zap className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToDemo} className="w-full sm:w-auto text-lg px-8 py-6 glass border-2 hover-lift group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-bounce" />
                <span>Voir comment ça marche</span>
              </Button>
            </div>

            {/* Stats rapides */}
            
          </div>

          {/* Screenshot produit avec notification animée */}
          <div className="relative animate-fade-in md:animate-slide-in-right">
            <div className="relative aspect-[4/3] rounded-3xl gradient-hero overflow-hidden shadow-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30"></div>

              {/* Dashboard mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="glass-dark rounded-2xl p-6 w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-white text-3xl font-bold mb-4">MaxBaz Dashboard</div>
                  <div className="space-y-3">
                    <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                    <div className="h-3 bg-white/20 rounded-full w-1/2"></div>
                    <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-primary/20 blur-3xl"></div>
            </div>

            {/* Notifications animées */}
            <div className="absolute -top-4 -right-4 glass rounded-2xl shadow-2xl p-4 animate-fade-in hover-lift">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Nouveau RDV confirmé</p>
                  <p className="text-xs text-muted-foreground">Jean D. - Mardi 10h00</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass rounded-2xl shadow-2xl p-4 animate-fade-in hover-lift" style={{
            animationDelay: '200ms'
          }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Taux de conversion</p>
                  <p className="text-lg font-bold text-accent">+40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;