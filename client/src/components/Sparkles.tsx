import { Sparkle } from "lucide-react";
import { useEffect, useState } from "react";

interface SparklesProps {
  count?: number;
}

export default function Sparkles({ count = 20 }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; top: string; left: string; delay: string; size: string }>>([]);

  useEffect(() => {
    const sizes = ["w-2 h-2", "w-3 h-3", "w-4 h-4"];
    
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: sizes[Math.floor(Math.random() * sizes.length)],
    }));
    
    setSparkles(newSparkles);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          className={`absolute ${sparkle.size} text-primary animate-sparkle`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
          }}
          data-testid={`sparkle-${sparkle.id}`}
        />
      ))}
    </div>
  );
}
