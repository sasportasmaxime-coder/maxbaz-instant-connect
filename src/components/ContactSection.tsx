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
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.profession || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons rapidement pour planifier votre créneau.",
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
    <section id="contact" className="py-20 px-4 gradient-contact relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-primary"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Commencez gratuitement avec MaxBaz
          </h2>
          <p className="text-white/90 text-center mb-12 text-lg">
            Réservez votre créneau pour une démonstration personnalisée
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email professionnel"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-full h-12 px-6 focus:bg-white/20 transition-smooth"
                required
              />
            </div>

            {/* First Name and Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-full h-12 px-6 focus:bg-white/20 transition-smooth"
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-full h-12 px-6 focus:bg-white/20 transition-smooth"
                required
              />
            </div>

            {/* Profession and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full h-12 px-6 focus:bg-white/20 transition-smooth appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-primary text-white">
                  Profession
                </option>
                {professions.map((profession) => (
                  <option
                    key={profession}
                    value={profession}
                    className="bg-primary text-white"
                  >
                    {profession}
                  </option>
                ))}
              </select>
              <Input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-full h-12 px-6 focus:bg-white/20 transition-smooth"
                required
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg h-14"
            >
              Sélectionner mon créneau
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
