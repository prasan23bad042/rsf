import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatingFlowersProps {
  count?: number;
}

export default function FloatingFlowers({ count = 30 }: FloatingFlowersProps) {
  const [screenHeight, setScreenHeight] = useState(1000);
  const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '🌷', '🏵️', '💐', '🌹'];

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 6 + Math.random() * 4;
        const randomSize = 0.6 + Math.random() * 0.4;
        const randomXOffset = (Math.random() - 0.5) * 100;
        const randomRotation = Math.random() * 360;
        const emoji = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: '-50px',
              fontSize: `${randomSize}rem`,
            }}
            animate={{
              y: [0, screenHeight + 100],
              x: [0, randomXOffset],
              rotate: [randomRotation, randomRotation + 360],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
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
