import { useEffect, useState } from "react";

interface ConfettiProps {
  count?: number;
  trigger?: boolean;
}

export default function Confetti({ count = 50, trigger = false }: ConfettiProps) {
  const [pieces, setPieces] = useState<Array<{ id: number; left: string; delay: string; color: string; rotation: string }>>([]);

  useEffect(() => {
    if (!trigger) return;

    const colors = [
      "bg-chart-1",
      "bg-chart-2", 
      "bg-chart-3",
      "bg-chart-4",
      "bg-chart-5",
      "bg-primary",
    ];
    
    const newPieces = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.5}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: `${Math.random() * 360}deg`,
    }));
    
    setPieces(newPieces);

    const timeout = setTimeout(() => {
      setPieces([]);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [count, trigger]);

  if (!trigger || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute w-3 h-3 ${piece.color} animate-confetti-fall`}
          style={{
            left: piece.left,
            top: "-10%",
            animationDelay: piece.delay,
            transform: `rotate(${piece.rotation})`,
          }}
          data-testid={`confetti-${piece.id}`}
        />
      ))}
    </div>
  );
}
