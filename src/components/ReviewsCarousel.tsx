import { Star } from "lucide-react";

const ReviewsCarousel = () => {
  const reviews = [
    {
      name: "Pierre D.",
      profession: "Plombier",
      text: "MaxBaz m'a fait gagner 15 clients ce mois-ci !",
      rating: 5,
    },
    {
      name: "Marie L.",
      profession: "Électricienne",
      text: "Finies les opportunités manquées, je recommande !",
      rating: 5,
    },
    {
      name: "Thomas R.",
      profession: "Serrurier",
      text: "Simple, efficace et rentable dès le premier mois.",
      rating: 5,
    },
    {
      name: "Sophie M.",
      profession: "Artisan BTP",
      text: "Une solution indispensable pour mon activité.",
      rating: 5,
    },
    {
      name: "Jean-Claude V.",
      profession: "Chauffagiste",
      text: "Mes clients adorent la simplicité de prise de RDV.",
      rating: 5,
    },
  ];

  // Duplicate for infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-6 animate-scroll">
        {duplicatedReviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-card p-6 rounded-lg shadow-card border border-border"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-semibold text-sm">
                  {review.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsCarousel;
