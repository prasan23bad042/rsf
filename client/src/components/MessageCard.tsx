import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface MessageCardProps {
  message: string;
  delay?: number;
}

export default function MessageCard({ message, delay = 0 }: MessageCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card 
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="card-message"
    >
      <CardContent className="p-8">
        <Heart className="w-6 h-6 text-primary fill-primary mb-4" data-testid="icon-message-heart" />
        <p className="text-lg leading-relaxed text-foreground" data-testid="text-message-content">
          {message}
        </p>
      </CardContent>
    </Card>
  );
}
