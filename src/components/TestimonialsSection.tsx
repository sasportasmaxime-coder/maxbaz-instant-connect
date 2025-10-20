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
        
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-smooth"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">{testimonial.initial}</span>
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
