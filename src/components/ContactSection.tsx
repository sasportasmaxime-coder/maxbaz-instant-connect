import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    profession: "",
    phone: "",
  });

  const professions = [
    "Plombier",
    "Électricien",
    "Serrurier",
    "Chauffagiste",
    "Menuisier",
    "Peintre",
    "Maçon",
    "Couvreur",
    "Carreleur",
    "Autre",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre email.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons rapidement pour démarrer votre essai gratuit.",
    });

    // Reset form
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      profession: "",
      phone: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-contact"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Démarrez votre essai gratuit
            </h2>
            <p className="text-xl text-blue-100">
              14 jours • Sans carte bancaire • Sans engagement
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Votre email professionnel"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 text-lg border-2 border-border focus:border-accent rounded-lg"
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full h-14 text-lg rounded-lg"
              >
                Démarrer l'essai gratuit →
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                🔒 Vos données sont sécurisées
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
