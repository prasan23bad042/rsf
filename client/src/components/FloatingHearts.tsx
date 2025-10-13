import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatingHeartsProps {
  count?: number;
}

export default function FloatingHearts({ count = 30 }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);
  const heartEmojis = ['❤️', '💖', '💗', '💓', '💘', '💝', '💞', '💕'];

  useEffect(() => {
    // Generate hearts in a heart shape pattern
    const newHearts = [];
    const centerX = 50;
    const centerY = 50;
    const radius = 20;
    
    // Create heart shape points
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = centerX + (radius * 16 * Math.pow(Math.sin(angle), 3)) / 100 * 80;
      const y = centerY - (radius * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle))) / 100 * 60;
      
      // Add some randomness to the position
      const randomX = x + (Math.random() - 0.5) * 20;
      const randomY = y + (Math.random() - 0.5) * 20;
      
      newHearts.push({
        id: i,
        x: Math.max(0, Math.min(100, randomX)), // Keep within 0-100%
        y: Math.max(0, Math.min(100, randomY)), // Keep within 0-100%
        size: Math.random() * 0.8 + 0.8, // Random size between 0.8 and 1.6
        delay: Math.random() * 5, // Random delay for animation
        duration: 10 + Math.random() * 10, // Random duration between 10-20s
      });
    }
    
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {hearts.map((heart) => {
        const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        return (
          <motion.div
            key={heart.id}
            className="absolute"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              fontSize: `${heart.size}rem`,
              color: `hsl(${Math.random() * 60 + 330}, 100%, ${60 + Math.random() * 30}%)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1, 1, 1.2],
              y: [0, -10, -20, -30],
              x: [0, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30],
              rotate: [0, Math.random() * 60 - 30],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}
