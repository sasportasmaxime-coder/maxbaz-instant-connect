import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight } from "lucide-react";

const DemoSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="demonstration" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm">Démonstration</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comment{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ça fonctionne ?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez en 2 minutes comment MaxBaz transforme chaque appel manqué
              en opportunité de rendez-vous qualifié grâce à notre IA.
            </p>
          </div>

          {/* Video Placeholder with modern design */}
          <div className="relative mb-12 animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer hover-lift">
              <div className="relative aspect-video gradient-hero">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/40"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}></div>

                {/* Play button with glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="relative w-24 h-24 glass-dark rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-bounce border-2 border-white/30">
                      <Play className="h-10 w-10 text-white ml-2" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Video duration badge */}
                <div className="absolute bottom-6 left-6 glass-dark px-4 py-2 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">2:30 min</span>
                  </div>
                </div>

                {/* View count badge */}
                <div className="absolute top-6 right-6 glass-dark px-4 py-2 rounded-xl border border-white/20">
                  <span className="text-white text-sm font-semibold">👁 2,438 vues</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 animate-fade-up">
            <p className="text-lg text-muted-foreground">
              Prêt à automatiser votre prise de rendez-vous ?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 shadow-xl hover-lift hover-glow group"
              >
                <span>Essayer gratuitement</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glass border-2 hover-lift"
              >
                <span>Planifier une démo</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Installation en 5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
