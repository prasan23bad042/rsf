import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicPlayerProps {
  audioUrl?: string;
  autoPlay?: boolean;
}

export default function MusicPlayer({ audioUrl, autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      
      if (autoPlay && audioUrl) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => console.log("Autoplay prevented by browser"));
        }
      }
    }
  }, [audioUrl, autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!audioUrl) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        size="icon"
        variant="secondary"
        onClick={togglePlay}
        className="rounded-full shadow-lg hover-elevate"
        data-testid="button-music-toggle"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </Button>
      
      <Button
        size="icon"
        variant="secondary"
        onClick={toggleMute}
        className="rounded-full shadow-lg hover-elevate"
        data-testid="button-music-mute"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </Button>

      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
}
