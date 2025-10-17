import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import ReviewsCarousel from "./ReviewsCarousel";

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

  return (
    <section id="accueil" className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
      {/* Gradient background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Ne perdez plus un seul client à cause d'un appel manqué.{" "}
            <span className="text-accent">Booster vos ventes</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Votre solution d'automatisation qui répond à vos prospects et planifie le rendez-vous si vous ne pouvez pas répondre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToDemo}
              className="w-full sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Voir la démo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Prendre rendez-vous
            </Button>
          </div>

          <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
