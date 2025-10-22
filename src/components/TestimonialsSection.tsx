import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie L.",
      profession: "Électricienne",
      text: "Finies les opportunités manquées ! Je ne perds plus un seul client depuis MaxBaz. Un outil indispensable pour mon activité.",
      initial: "M",
    },
    {
      name: "Thomas B.",
      profession: "Plombier",
      text: "MaxBaz a transformé mon activité. Mes rendez-vous ont augmenté de 40% en 2 mois. Je recommande à 100% !",
      initial: "T",
    },
    {
      name: "Sophie D.",
      profession: "Serrurier",
      text: "Excellent outil ! Mes clients apprécient la réactivité, même quand je suis en intervention. C'est magique.",
      initial: "S",
    },
    {
      name: "Jean-Pierre M.",
      profession: "Chauffagiste",
      text: "Avant MaxBaz, je perdais 30% de mes appels. Maintenant, chaque appel devient un rendez-vous confirmé.",
      initial: "JP",
    },
    {
      name: "Amélie R.",
      profession: "Peintre en bâtiment",
      text: "Simple, efficace et professionnel. Mes clients sont impressionnés par la rapidité de réponse. Merci MaxBaz !",
      initial: "A",
    },
    {
      name: "Laurent K.",
      profession: "Menuisier",
      text: "Je gagne un temps fou ! L'IA gère mes appels pendant que je travaille. Mon agenda est toujours plein maintenant.",
      initial: "L",
    },
    {
      name: "Nathalie P.",
      profession: "Couvreur",
      text: "ROI incroyable ! En 3 mois, j'ai récupéré 10 fois le coût de l'abonnement en nouveaux clients.",
      initial: "N",
    },
    {
      name: "David F.",
      profession: "Carreleur",
      text: "La meilleure décision que j'ai prise pour mon entreprise. Professionnalisme et efficacité garantis.",
      initial: "D",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-600 text-lg">
            Des artisans satisfaits témoignent
          </p>
        </div>

        {/* Conteneur de défilement */}
        <div className="relative overflow-hidden">
          {/* Gradient gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Gradient droit */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50/30 to-transparent z-10 pointer-events-none"></div>

          {/* Animation de défilement infini */}
          <div className="flex gap-6 py-4 animate-infinite-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic text-base leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">{testimonial.initial}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
