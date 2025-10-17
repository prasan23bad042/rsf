import { Heart, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { getCurrentAge } from "@/lib/utils";

interface HeroSectionProps {
  name: string;
}

export default function HeroSection({ name }: HeroSectionProps) {
  const [age, setAge] = useState<string>(getCurrentAge());

  // Update age when component mounts (in case of real-time updates)
  useEffect(() => {
    setAge(getCurrentAge());
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <Heart className="w-16 h-16 mx-auto mb-8 text-primary fill-primary" data-testid="icon-hero-heart" />
        </div>

        <h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
          data-testid="text-hero-title"
        >
          Happy Birthday
        </h1>

        <h2
          className="font-script text-5xl md:text-7xl text-primary mb-4 animate-scale-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
          data-testid="text-hero-name"
        >
          {name}
        </h2>

        <div
          className="text-2xl md:text-3xl font-medium text-primary/80 mb-8 animate-fade-in-up"
          style={{ animationDelay: "1.0s", opacity: 0 }}
          data-testid="text-hero-age"
        >
          {age} ✨
        </div>

        <p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "1.2s", opacity: 0 }}
          data-testid="text-hero-subtitle"
        >
          A special day for the most special person in my life
        </p>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-gentle text-primary"
        style={{ animationDelay: "1.6s" }}
        aria-label="Scroll to content"
        data-testid="button-scroll"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
