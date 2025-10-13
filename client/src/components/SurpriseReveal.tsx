import { useState } from "react";
import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Memory {
  date: string;
  title: string;
  description: string;
}

interface SurpriseRevealProps {
  memories?: Memory[];
}

export default function SurpriseReveal({ memories = [] }: SurpriseRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const defaultMemories: Memory[] = [
    {
      date: "Our First Date",
      title: "The Beginning",
      description:
        "The moment I knew you were special - when time stood still and everything felt right.",
    },
    {
      date: "That Perfect Day",
      title: "Pure Magic",
      description:
        "Laughing until our cheeks hurt, creating memories that will last forever.",
    },
    {
      date: "A Quiet Moment",
      title: "Simple Joy",
      description:
        "Sometimes the best memories are the quiet ones, just us being together.",
    },
    {
      date: "Adventures Together",
      title: "Exploring Life",
      description:
        "Every adventure with you is my favorite adventure. Here's to many more!",
    },
  ];

  const displayMemories = memories.length > 0 ? memories : defaultMemories;

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {!isRevealed ? (
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block animate-bounce-gentle">
              <Gift
                className="w-24 h-24 mx-auto text-primary"
                data-testid="icon-gift"
              />
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl font-bold text-foreground"
              data-testid="text-surprise-title"
            >
              A Special Surprise
            </h2>

            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-surprise-subtitle"
            >
              I've gathered some of my favorite memories with you
            </p>

            <Button
              size="lg"
              onClick={handleReveal}
              className="text-lg px-8 py-6"
              data-testid="button-reveal-surprise"
            >
              <Gift className="w-5 h-5 mr-2" />
              Click to Reveal
            </Button>
          </div>
        ) : (
          <div className="space-y-8 animate-scale-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12"
              data-testid="text-memories-title"
            >
              The Unforgettable Moment
            </h2>

            <div className="max-w-2xl mx-auto">
              <Card
                className="hover-elevate transition-all duration-300"
                data-testid="card-memory-single"
              >
                <CardContent className="p-8 text-left">
                  <div className="flex items-start gap-4 mb-6">
                    <Heart className="w-6 h-6 text-primary fill-primary mt-1 flex-shrink-0" />
                    <div>
                      <p
                        className="text-sm text-primary font-medium mb-2"
                        data-testid="text-memory-date-single"
                      >
                        07/02/2024
                      </p>
                      <h3
                        className="font-serif text-2xl font-semibold text-foreground mb-4"
                        data-testid="text-memory-title-single"
                      >
                        That Day I Would Never Forget
                      </h3>
                    </div>
                  </div>
                  <div
                    className="text-muted-foreground leading-relaxed space-y-4"
                    data-testid="text-memory-description-single"
                  >
                    <p>That day "07/02/2024" i would never forget it.</p>
                    <p>
                      It was the day I fell for you, i fell deep into those eyes
                      and I am still falling deep into it . Before that i would
                      never have thought I would be in love with someone this
                      much.
                    </p>
                    <p>
                      I am aware that you don't have interest in me. But it
                      doesn't matter right?
                    </p>
                    <p>At least we could be friends right?</p>
                    <p>
                      Yeah it would hurt me a lot, but if it means to have you
                      as a part of my small life I would be glad to accept it
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
