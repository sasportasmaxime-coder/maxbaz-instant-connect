import { X, Check, ArrowDown } from "lucide-react";

const BeforeAfterSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
            Votre quotidien transformé
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="bg-muted/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-destructive mb-8 flex items-center gap-2">
                <X className="h-6 w-6" />
                Avant
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Appels manqués</p>
                    <ArrowDown className="h-5 w-5 text-muted-foreground mx-auto my-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Perte du client</p>
                    <ArrowDown className="h-5 w-5 text-muted-foreground mx-auto my-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-destructive text-lg">= Argent Manqué</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="bg-card p-8 rounded-2xl border-2 border-accent">
              <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-2">
                <Check className="h-6 w-6" />
                Maintenant
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Appels manqués</p>
                    <ArrowDown className="h-5 w-5 text-accent mx-auto my-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Qualification automatique</p>
                    <ArrowDown className="h-5 w-5 text-accent mx-auto my-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <p className="font-bold text-accent text-lg">= Rendez-vous effectué</p>
                    <p className="font-bold text-accent">+ Client satisfait</p>
                    <p className="font-bold text-accent">+ 0 perte de clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
