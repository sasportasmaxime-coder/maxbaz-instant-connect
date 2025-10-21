import { MessageSquare, CheckCircle, Calendar, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Système de messages automatisés",
      description:
        "Un SMS est envoyé immédiatement après chaque appel manqué pour engager le prospect instantanément.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "Qualification du besoin et Prise de rendez-vous instantanée",
      description:
        "Qualification automatique du besoin client et proposition immédiate de créneaux disponibles pour un rendez-vous.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Fenêtre de réservation synchronisée",
      description:
        "Synchronisation automatique avec votre agenda numérique (Google Calendar, Outlook) pour éviter les doublons.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Tableau de bord interactif",
      description:
        "Suivez vos KPIs en temps réel : taux de conversion, nombre de rendez-vous, clients qualifiés et performances.",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="fonctionnalites" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Fonctionnalités</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Découvrez toutes nos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              fonctionnalités
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            MaxBaz est une plateforme qui automatise la prise de rendez-vous pour les artisans et professionnels. Elle transforme chaque appel manqué en opportunité grâce à notre technologie qui qualifie et confirme le créneau choisi automatiquement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card background with gradient */}
                <div className="relative bg-card p-8 lg:p-10 rounded-3xl shadow-card hover-lift transition-smooth border border-border/50">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth gradient-card rounded-3xl"></div>

                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className="mb-6 relative">
                      <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-bounce`}>
                        <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-smooth`}></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-smooth"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-20 text-center animate-fade-up">
          <p className="text-lg text-muted-foreground mb-4">
            Et bien plus encore pour booster votre activité
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="glass px-4 py-2 rounded-full">✨ IA avancée</span>
            <span className="glass px-4 py-2 rounded-full">🔒 Sécurisé</span>
            <span className="glass px-4 py-2 rounded-full">⚡ Ultra-rapide</span>
            <span className="glass px-4 py-2 rounded-full">📱 Mobile-friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
