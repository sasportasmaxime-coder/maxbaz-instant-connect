import { X, Check, TrendingDown, TrendingUp, Phone, UserX, DollarSign, Calendar, Users, Target } from "lucide-react";

const BeforeAfterSection = () => {
  const beforeMetrics = [
    {
      icon: Phone,
      title: "Appels manqués",
      stat: "30-40%",
      description: "Des appels ne reçoivent jamais de réponse",
      impact: "negative"
    },
    {
      icon: UserX,
      title: "Clients perdus",
      stat: "60%",
      description: "Partent vers la concurrence",
      impact: "negative"
    },
    {
      icon: DollarSign,
      title: "Chiffre d'affaires manqué",
      stat: "-15K€/mois",
      description: "Opportunités ratées",
      impact: "negative"
    }
  ];

  const afterMetrics = [
    {
      icon: Calendar,
      title: "Réponse instantanée",
      stat: "< 60s",
      description: "Temps de réponse moyen",
      impact: "positive"
    },
    {
      icon: Target,
      title: "Taux de conversion",
      stat: "+40%",
      description: "De prospects qualifiés convertis",
      impact: "positive"
    },
    {
      icon: Users,
      title: "Satisfaction client",
      stat: "95%",
      description: "De clients satisfaits du service",
      impact: "positive"
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm">Impact</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Votre quotidien{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                transformé
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez l'impact concret de MaxBaz sur votre activité quotidienne
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>

            {/* VS Badge */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="glass-dark px-6 py-3 rounded-full border-2 border-primary/30 shadow-2xl">
                <span className="text-primary font-bold text-lg">VS</span>
              </div>
            </div>

            {/* BEFORE Column */}
            <div className="space-y-6 animate-slide-in-left">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <X className="h-7 w-7 text-red-500" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">Sans MaxBaz</h3>
                  <p className="text-muted-foreground">La situation actuelle</p>
                </div>
              </div>

              {/* Metrics */}
              {beforeMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-red-500/5 border border-red-500/20 rounded-2xl p-6 hover-lift transition-smooth"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-500" strokeWidth={2} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-foreground text-lg">{metric.title}</h4>
                          <div className="flex items-center gap-1 text-red-500">
                            <TrendingDown className="h-5 w-5" />
                            <span className="font-bold text-xl">{metric.stat}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{metric.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Impact Summary */}
              <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-6 mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Impact financier annuel</p>
                    <p className="text-3xl font-bold text-red-500">-180K€</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Chiffre d'affaires perdu chaque année</p>
              </div>
            </div>

            {/* AFTER Column */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg">
                  <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">Avec MaxBaz</h3>
                  <p className="text-muted-foreground">La transformation</p>
                </div>
              </div>

              {/* Metrics */}
              {afterMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-2xl p-6 hover-lift transition-smooth"
                    style={{ animationDelay: `${index * 100 + 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-foreground text-lg">{metric.title}</h4>
                          <div className="flex items-center gap-1 text-accent">
                            <TrendingUp className="h-5 w-5" />
                            <span className="font-bold text-xl">{metric.stat}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{metric.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Impact Summary */}
              <div className="gradient-card border-2 border-accent/30 rounded-2xl p-6 mt-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="h-8 w-8 text-accent" strokeWidth={2.5} />
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">Impact financier annuel</p>
                      <p className="text-3xl font-bold text-accent">+250K€</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Chiffre d'affaires supplémentaire généré</p>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Banner */}
          <div className="mt-16 glass rounded-3xl p-8 text-center animate-fade-up border border-accent/20">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-4">
                Résultat : Un gain net de
              </p>
              <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                +430K€/an
              </p>
              <p className="text-muted-foreground">
                En moyenne pour nos clients du secteur artisanal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
