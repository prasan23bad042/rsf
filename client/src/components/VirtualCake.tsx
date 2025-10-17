import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

interface VirtualCakeProps {
  name?: string;
  onBlowCandles?: () => void; // callback to parent (Birthday.tsx)
}

export default function VirtualCake({
  name = "Ruth Shirley",
  onBlowCandles,
}: VirtualCakeProps) {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);

  // Candle-blowing handler
  const blowCandles = () => {
    if (!candlesLit) return;

    // Play birthday cake audio
    const audio = new Audio('/audio/birthday_cake.mp3');
    audio.play().catch(() => {});

    setCandlesLit(false);
    setShowSmoke(true);
    setShowConfetti(true);

    // 🔥 Trigger parent function to change music
    if (onBlowCandles) onBlowCandles();

    // Confetti disappears after 7 seconds
    setTimeout(() => setShowConfetti(false), 7000);
    // Smoke fades after 3 seconds
    setTimeout(() => setShowSmoke(false), 3000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-50 to-purple-100 overflow-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold font-serif text-pink-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="block md:hidden">
            Happy<br />
            Birthday<br />
            Ruth Shirley
          </span>
          <span className="hidden md:block">
            🎉 Happy Birthday {name}! 🎂
          </span>
        </motion.h2>

        <p className="text-lg text-gray-700 mb-10">
          Make a wish and{" "}
          <span className="font-bold text-pink-600">blow the candles!</span>
        </p>

        {/* Cake Section */}
        <motion.div
          className="relative inline-block rounded-b-[30px] shadow-2xl p-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Candles */}
          <div className="flex justify-center gap-4 mb-0">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-8 bg-yellow-200 rounded-sm relative"
              >
                {candlesLit && (
                  <motion.div
                    className="absolute -top-2 text-yellow-400"
                    style={{ left: '6px' }}
                    animate={{ opacity: [0.6, 1, 0.6], y: [-2, 2, -2] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    🔥
                  </motion.div>
                )}

                {/* Smoke effect after blowing */}
                {showSmoke && (
                  <motion.div
                    className="absolute -top-4 text-gray-400 opacity-80"
                    style={{ left: '6px' }}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, repeat: 2 }}
                  >
                    💨
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Cake Body */}
          <div className="bg-white rounded-b-[30px] w-64 h-32 mx-auto shadow-inner relative overflow-hidden">
            {/* Decorative frosting */}
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 rounded-t-[30px] shadow-md"></div>
            <div className="absolute bottom-0 w-full h-4 bg-pink-300 rounded-b-[30px]"></div>
          </div>

          {/* Candle Blow Button */}
          <motion.button
            onClick={blowCandles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition"
          >
            Blow the Candles 🎈
          </motion.button>
        </motion.div>

        {/* Floating Background Emojis */}
        <motion.div
          className="absolute top-10 left-10 text-6xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          🎁
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 text-6xl opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          🎈
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 text-6xl opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10 }}
        >
          ✨
        </motion.div>
      </div>
    </section>
  );
}
