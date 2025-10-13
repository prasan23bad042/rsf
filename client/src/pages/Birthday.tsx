import { useEffect, useRef, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoSection from "@/components/PhotoSection";
import VirtualCake from "@/components/VirtualCake";
import SurpriseReveal from "@/components/SurpriseReveal";
import Footer from "@/components/Footer";
import GiftBoxIntro from "@/components/GiftBoxIntro";

export default function Birthday() {
  const [showContent, setShowContent] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const celebrationRef = useRef<HTMLAudioElement | null>(null);

  // 🔊 Play background music on page load
  useEffect(() => {
    const bg = bgMusicRef.current;
    if (bg) {
      bg.loop = true;
      bg.volume = 0.6;
      bg.play().catch(() => {});
    }
  }, []);

  // 🔥 Function to handle candle blowing (called from VirtualCake)
  const handleBlowCandles = () => {
    const bg = bgMusicRef.current;
    const celebration = celebrationRef.current;

    // Stop background music
    if (bg) {
      bg.pause();
      bg.currentTime = 0;
    }

    // Play celebration song once
    if (celebration) {
      celebration.currentTime = 0;
      celebration.play().catch(() => {});
    }

    setCandlesBlown(true);
  };

  // 🔁 When celebration song ends, restart background music
  const handleCelebrationEnd = () => {
    const bg = bgMusicRef.current;
    if (bg) {
      bg.currentTime = 0;
      bg.play().catch(() => {});
    }
  };

  // Show gift box intro first, then main content
  if (!showContent) {
    return <GiftBoxIntro onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts count={15} />

      {/* 🩷 Background music */}
      <audio ref={bgMusicRef} src="/audio/birthday-song.mp3" />
      <audio
        ref={celebrationRef}
        src="/audio/celebration-song.mp3"
        onEnded={handleCelebrationEnd}
      />

      <HeroSection name="Ruth Shirley" />

      <PhotoSection
        imageUrl="/images/ph.png.jpg"
        caption="Forever in my heart"
      />

      <SurpriseReveal
        memories={[
          {
            date: "Our First Meet",
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
        ]}
      />

      {/* Pass handler to VirtualCake */}
      <VirtualCake name="Ruth Shirley" onBlowCandles={handleBlowCandles} />

      <Footer />
    </div>
  );
}
