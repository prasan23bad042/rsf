import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GiftBoxIntroProps {
  onComplete: () => void;
}

export default function GiftBoxIntro({ onComplete }: GiftBoxIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio on component mount
  useEffect(() => {
    audioRef.current = new Audio('/audio/Cele.mp3');
    audioRef.current.load();
  }, []);

  const handleOpenGift = () => {
    if (isOpen) return;
    
    // Play celebration audio instantly
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    
    setIsOpen(true);

    // Show explosion effect
    setTimeout(() => {
      setShowExplosion(true);
    }, 300);

    // Complete the intro after explosion
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `radial-gradient(circle, rgba(255,107,157,0.3) 0%, rgba(255,255,255,0) 70%)`,
            }}
            animate={{
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
              y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0, y: -20 }}
            className="text-center z-10 p-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-2xl"
          >
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleOpenGift}
            >
              {/* Gift Box Container */}
              <motion.div 
                className="relative"
                animate={{
                  y: isHovered ? [0, -5, 0] : 0,
                  rotate: isHovered ? [0, -2, 2, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Box Ribbon */}
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 w-24 h-16"
                  animate={{
                    y: isHovered ? [0, -2, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full shadow-md" />
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-300 rounded-full flex items-center justify-center text-white">
                    <span className="text-xs">🎀</span>
                  </div>
                </motion.div>

                {/* Box Lid */}
                <motion.div
                  className="w-48 h-12 mx-auto rounded-t-2xl relative z-0"
                  style={{
                    background: 'linear-gradient(135deg, #f0abfc 0%, #c084fc 50%, #a855f7 100%)',
                    boxShadow: '0 10px 25px -5px rgba(192, 132, 252, 0.4)',
                  }}
                  animate={{
                    y: isHovered ? [0, -2, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-t-2xl" />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                </motion.div>

                {/* Box Body */}
                <motion.div
                  className="w-48 h-32 mx-auto rounded-b-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #f0abfc 0%, #c084fc 50%, #a855f7 100%)',
                    boxShadow: '0 10px 25px -5px rgba(192, 132, 252, 0.4)',
                  }}
                >
                  <div className="absolute inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-b-2xl" />
                  
                  {/* Shimmer Effect */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
                    <span className="opacity-70">🎁</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Click Prompt */}
            <motion.div
              className="mt-8 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg inline-block"
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: ['0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tap to Open Your Gift
              </p>
              <p className="text-xs text-gray-500 mt-1">
                A special surprise is waiting inside...
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Enhanced Explosion Animation */}
        {showExplosion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            {[...Array(100)].map((_, i) => {
              const size = Math.random() * 24 + 8;
              const distance = 100 + Math.random() * 200;
              const angle = (i / 100) * Math.PI * 2;
              const x = Math.cos(angle) * distance * (Math.random() * 0.5 + 0.5);
              const y = Math.sin(angle) * distance * (Math.random() * 0.5 + 0.5);
              
              return (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: x,
                    y: y,
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.2, 0.8, 0.4, 1],
                  }}
                  style={{
                    fontSize: `${size}px`,
                    color: [
                      '#f472b6', // pink-400
                      '#c084fc', // purple-400
                      '#a78bfa', // violet-400
                      '#818cf8', // indigo-400
                      '#60a5fa', // blue-400
                    ][Math.floor(Math.random() * 5)],
                  }}
                >
                  {['✨', '🎉', '💖', '🎊', '🌟', '💫', '🎈', '🎁'][Math.floor(Math.random() * 8)]}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
