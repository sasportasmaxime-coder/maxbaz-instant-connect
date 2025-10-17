import { MessageSquare, CheckCircle, Calendar, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Système de messages automatisés",
      description:
        "Un SMS est envoyé immédiatement après chaque appel manqué pour engager le prospect instantanément.",
    },
    {
      icon: CheckCircle,
      title: "Qualification du besoin et Prise de rendez-vous instantanée",
      description:
        "Qualification automatique du besoin client et proposition immédiate de créneaux disponibles pour un rendez-vous.",
    },
    {
      icon: Calendar,
      title: "Fenêtre de réservation synchronisée",
      description:
        "Synchronisation automatique avec votre agenda numérique (Google Calendar, Outlook) pour éviter les doublons.",
    },
    {
      icon: BarChart3,
      title: "Tableau de bord interactif",
      description:
        "Suivez vos KPIs en temps réel : taux de conversion, nombre de rendez-vous, clients qualifiés et performances.",
    },
  ];

  return (
    <section id="fonctionnalites" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Découvrez toutes nos fonctionnalités
          </h2>
          <p className="text-lg text-muted-foreground">
            MaxBaz est une plateforme complète d'automatisation de prise de rendez-vous 
            conçue spécialement pour les artisans et professionnels de terrain. 
            Transformez chaque appel manqué en opportunité commerciale grâce à notre 
            technologie intelligente qui qualifie, engage et convertit vos prospects 
            automatiquement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-smooth group"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl gradient-hero">
                    <Icon className="h-8 w-8 text-card" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
