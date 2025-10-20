import { MessageSquare, Target, Calendar as CalendarIcon, BarChart3, Check } from "lucide-react";

const FeaturesDetailSection = () => {
  const features = [
    {
      icon: MessageSquare,
      category: "💬 Communication",
      title: "Réponse automatique en 60 secondes",
      description: "MaxBaz envoie instantanément un SMS personnalisé pour maintenir le contact.",
      benefits: [
        "Messages personnalisés selon votre activité",
        "Taux de réponse de +85%",
      ],
      imagePosition: "left",
    },
    {
      icon: Target,
      category: "🎯 Intelligence",
      title: "Qualification automatique de vos prospects",
      description: "Notre IA pose les bonnes questions pour qualifier chaque prospect.",
      benefits: [
        "Questions adaptées à votre métier",
        "Identification des besoins urgents",
      ],
      imagePosition: "right",
    },
    {
      icon: CalendarIcon,
      category: "📅 Agenda",
      title: "Prise de rendez-vous automatique 24/7",
      description: "Vos prospects réservent directement dans votre planning disponible.",
      benefits: [
        "Synchronisation temps réel",
        "Rappels automatiques",
      ],
      imagePosition: "left",
    },
    {
      icon: BarChart3,
      category: "📊 Pilotage",
      title: "Tableau de bord interactif",
      description: "Suivez vos performances et optimisez votre activité.",
      benefits: [
        "KPIs en temps réel",
        "Rapports détaillés",
      ],
      imagePosition: "right",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                index % 2 === 0 ? "" : "md:grid-flow-dense"
              }`}
            >
              <div className={`${index % 2 === 0 ? "order-2 md:order-1" : "order-2"}`}>
                <div className="relative aspect-video rounded-xl shadow-hover bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                </div>
              </div>
              
              <div className={`space-y-4 ${index % 2 === 0 ? "order-1 md:order-2" : "order-1"}`}>
                <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-accent">{feature.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
                <ul className="space-y-3 pt-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesDetailSection;
