import { useState } from "react";
import { Plus, X } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment fonctionne MaxBaz ?",
      answer:
        "MaxBaz détecte automatiquement vos appels manqués et envoie immédiatement un SMS au prospect. Le système qualifie ensuite le besoin via une conversation automatisée et propose des créneaux de rendez-vous en se synchronisant avec votre agenda. Vous recevez une notification dès qu'un rendez-vous est confirmé.",
    },
    {
      question: "Est-il possible de tester gratuitement ?",
      answer:
        "Oui ! Nous offrons 14 jours d'essai gratuit sans carte bancaire requise. Vous pouvez tester toutes les fonctionnalités de la formule Professionnelle pour évaluer l'impact sur votre activité. Aucun engagement, vous pouvez annuler à tout moment.",
    },
    {
      question: "Combien de temps après l'appel manqué le SMS est-il envoyé ?",
      answer:
        "Le SMS est envoyé instantanément, généralement dans les 30 secondes suivant l'appel manqué. Cette rapidité maximise vos chances de convertir le prospect qui est encore dans une démarche active de recherche.",
    },
    {
      question: "Est-ce compatible avec mon numéro de téléphone ?",
      answer:
        "MaxBaz est compatible avec tous les opérateurs français et la plupart des numéros professionnels. Que vous utilisiez un numéro fixe, mobile ou une ligne VoIP, notre système s'intègre facilement. Contactez-nous pour vérifier la compatibilité de votre configuration spécifique.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Absolument. Toutes vos données sont cryptées et stockées sur des serveurs sécurisés en France, conformes au RGPD. Nous ne partageons jamais vos informations avec des tiers. Vous conservez le contrôle total de vos données et pouvez les exporter ou les supprimer à tout moment.",
    },
    {
      question: "Comment fonctionne votre service après-vente ?",
      answer:
        "Notre équipe support est disponible du lundi au vendredi de 9h à 18h par email, téléphone et chat. Les clients Professionnel et Custom bénéficient d'un support prioritaire avec des temps de réponse garantis. Nous proposons également une base de connaissances complète et des tutoriels vidéo.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl overflow-hidden transition-smooth"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/80 transition-smooth"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    {openIndex === index ? (
                      <X className="h-5 w-5 text-accent" />
                    ) : (
                      <Plus className="h-5 w-5 text-accent" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-2 text-muted-foreground">
                    {faq.answer}
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

export default FaqSection;
