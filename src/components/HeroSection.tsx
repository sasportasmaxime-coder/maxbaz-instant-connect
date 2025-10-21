import { Button } from "@/components/ui/button";
import { Play, Check, TrendingUp, BarChart, Users } from "lucide-react";
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
  return <section id="accueil" className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-white">
      {/* Formes fluides en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Contenu centré */}
          <div className="text-center space-y-8 mb-16 animate-fade-up">
            {/* Titre principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Transformez vos appels manqués en{" "}
              <span className="text-green-500">clients satisfaits.</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">MaxBaz répond à vos prospects 24/7, qualifie leurs besoins et planifie automatiquement vos rendez-vous.</p>

            {/* Boutons CTA côte à côte */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                Essayer gratuitement 14 jours
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToDemo} className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all">
                <Play className="mr-2 h-5 w-5" />
                Voir comment ça marche
              </Button>
            </div>
          </div>

          {/* Illustration du produit - Dashboard */}
          <div className="relative max-w-4xl mx-auto animate-fade-in">
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Barre de fenêtre */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* Contenu du dashboard */}
              <div className="p-8 bg-gradient-to-br from-white to-blue-50/30">
                {/* Header du dashboard */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">MaxBaz Dashboard</h3>
                  <p className="text-gray-500">Vue d'ensemble de votre activité</p>
                </div>

                {/* Statistiques en grille */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {/* Stat 1 */}
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Check className="w-6 h-6 text-blue-600" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">+40%</p>
                    <p className="text-sm text-gray-500">Conversion</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <BarChart className="w-6 h-6 text-green-600" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">127</p>
                    <p className="text-sm text-gray-500">RDV ce mois</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">95%</p>
                    <p className="text-sm text-gray-500">Satisfaction</p>
                  </div>
                </div>

                {/* Graphique simulé */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-semibold text-gray-900">Rendez-vous confirmés</p>
                    <p className="text-sm text-gray-500">7 derniers jours</p>
                  </div>
                  <div className="flex items-end justify-between h-32 gap-3">
                    <div className="flex-1 bg-blue-200 rounded-t-lg" style={{
                    height: '60%'
                  }}></div>
                    <div className="flex-1 bg-blue-300 rounded-t-lg" style={{
                    height: '75%'
                  }}></div>
                    <div className="flex-1 bg-blue-400 rounded-t-lg" style={{
                    height: '55%'
                  }}></div>
                    <div className="flex-1 bg-blue-500 rounded-t-lg" style={{
                    height: '85%'
                  }}></div>
                    <div className="flex-1 bg-blue-600 rounded-t-lg" style={{
                    height: '100%'
                  }}></div>
                    <div className="flex-1 bg-blue-500 rounded-t-lg" style={{
                    height: '70%'
                  }}></div>
                    <div className="flex-1 bg-blue-400 rounded-t-lg" style={{
                    height: '80%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cartes flottantes */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 animate-fade-in hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Nouveau RDV confirmé</p>
                  <p className="text-xs text-gray-500">Jean D. - Mardi 10h00</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 animate-fade-in hidden md:block" style={{
            animationDelay: '200ms'
          }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Taux de conversion</p>
                  <p className="text-lg font-bold text-blue-600">+40%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bénéfices clés en bas */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-4 animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-base">{benefit}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;