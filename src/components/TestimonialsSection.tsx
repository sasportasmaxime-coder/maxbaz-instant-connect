import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie L.",
      profession: "Électricienne",
      text: "Finies les opportunités manquées ! Je ne perds plus un seul client depuis MaxBaz.",
      initial: "M",
    },
    {
      name: "Thomas B.",
      profession: "Plombier",
      text: "MaxBaz a transformé mon activité. Mes rendez-vous ont augmenté de 40% en 2 mois.",
      initial: "T",
    },
    {
      name: "Sophie D.",
      profession: "Serrurier",
      text: "Excellent outil ! Mes clients apprécient la réactivité, même quand je suis en intervention.",
      initial: "S",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
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
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
