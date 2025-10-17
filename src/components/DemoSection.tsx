import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const DemoSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="demonstration" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Comment est-ce que ça fonctionne ?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Découvrez en quelques minutes comment MaxBaz transforme chaque appel manqué 
            en opportunité de rendez-vous qualifié.
          </p>

          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-2xl gradient-hero overflow-hidden shadow-hover mb-8 group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-card/90 backdrop-blur-sm h-20 w-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth shadow-lg">
                <Play className="h-10 w-10 text-accent ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
          </div>

          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Essayer Gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
