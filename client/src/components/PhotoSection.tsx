import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Sparkles from "./Sparkles";
import Confetti from "./Confetti";
import FloatingFlowers from "./FloatingFlowers";

interface PhotoSectionProps {
  imageUrl?: string;
  caption?: string;
}

export default function PhotoSection({ imageUrl, caption = "Forever in my heart" }: PhotoSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowConfetti(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("photo-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="photo-section" className="py-24 px-4 relative">
      {isVisible && <FloatingFlowers count={25} />}
      <div className="max-w-4xl mx-auto">
        <Card 
          className={`relative overflow-hidden p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-testid="card-photo"
        >
          <Sparkles count={25} />
          
          <div className="relative z-10">
            <div className="aspect-square md:aspect-[4/3] max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/20 relative">
              {/* Decorative border frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-[3px] animate-pulse">
                <div className="w-full h-full rounded-3xl bg-white"></div>
              </div>

              {/* Inner decorative elements */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s' }}></div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-pink-300 to-pink-500 opacity-30 rounded-br-full"></div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-300 to-purple-500 opacity-30 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-blue-300 to-blue-500 opacity-30 rounded-tr-full"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-pink-300 to-pink-500 opacity-30 rounded-tl-full"></div>

              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Birthday celebration"
                  className="w-full h-full object-cover relative z-10 p-1"
                  data-testid="img-photo"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground relative z-10">
                  <div className="text-center p-8">
                    <p className="text-xl font-script" data-testid="text-photo-placeholder">
                      Your beautiful photo will go here
                    </p>
                    <p className="text-sm mt-4 text-muted-foreground">
                      Upload your favorite photo to make this extra special
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
            
            <p 
              className="font-script text-3xl md:text-4xl text-primary text-center mt-8"
              data-testid="text-photo-caption"
            >
              {caption}
            </p>
          </div>
        </Card>
      </div>
      
      <Confetti trigger={showConfetti} count={60} />
    </section>
  );
}
