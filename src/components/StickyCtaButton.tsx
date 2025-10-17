import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const contactSection = document.querySelector("#contact");
      const contactTop = contactSection?.getBoundingClientRect().top || 0;
      
      // Show after 300px scroll, hide when reaching contact section
      setIsVisible(scrollPosition > 300 && contactTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      variant="cta"
      size="lg"
      onClick={scrollToContact}
      className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      <Calendar className="mr-2 h-5 w-5" />
      Réserver
    </Button>
  );
};

export default StickyCtaButton;
