import { X, Check, ArrowDown } from "lucide-react";
const BeforeAfterSection = () => {
  return <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-up">
            

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Votre quotidien{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                transformé
              </span>
            </h2>
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
            <div className="space-y-8 animate-slide-in-left">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center shadow-lg">
                  <X className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">Avant</h3>
                </div>
              </div>

              {/* Flow Steps */}
              <div className="space-y-6">
                <div className="group bg-card border-2 border-red-500/20 rounded-2xl p-6 hover-lift transition-smooth shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <X className="h-6 w-6 text-red-500" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-xl">Appels manqués</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-red-500" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="group bg-card border-2 border-red-500/20 rounded-2xl p-6 hover-lift transition-smooth shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <X className="h-6 w-6 text-red-500" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-xl">Perte du client</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-red-500" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/30 rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-500 mb-2">= Argent Manqué</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AFTER Column */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-xl">
                  <Check className="h-8 w-8 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">Maintenant</h3>
                </div>
              </div>

              {/* Flow Steps */}
              <div className="space-y-6">
                <div className="group bg-card border-2 border-accent/30 rounded-2xl p-6 hover-lift transition-smooth shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-xl">Appels manqués</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full gradient-accent/20 flex items-center justify-center shadow-md">
                    <ArrowDown className="h-6 w-6 text-accent" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="group bg-card border-2 border-accent/30 rounded-2xl p-6 hover-lift transition-smooth shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-xl">Qualification automatique</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full gradient-accent/20 flex items-center justify-center shadow-md">
                    <ArrowDown className="h-6 w-6 text-accent" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="gradient-card border-2 border-accent/40 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
                  <div className="relative z-10 space-y-3">
                    <p className="text-2xl font-bold text-accent">= Rendez-vous effectué</p>
                    <p className="text-xl font-bold text-accent">+ Client satisfait</p>
                    <p className="text-xl font-bold text-accent">+ 0 perte de clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BeforeAfterSection;