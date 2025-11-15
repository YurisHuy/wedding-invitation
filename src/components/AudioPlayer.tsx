import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { clsx } from '../utils';

interface AudioPlayerProps {
  src?: string;
  loop?: boolean;
  isPlaying?: boolean;
  onToggle?: (playing: boolean) => void;
}

export const AudioPlayer = ({ 
  src = '/wedding-invitation/audio/wedding-music.mp3',
  loop = true,
  isPlaying: controlledIsPlaying,
  onToggle
}: AudioPlayerProps) => {
  const [internalIsPlaying, setInternalIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Use controlled state if available, otherwise use internal state
  const isPlaying = controlledIsPlaying !== undefined ? controlledIsPlaying : internalIsPlaying;

  // Sync audio with controlled state
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // Make sure audio is loaded
    const handleCanPlay = () => {
      if (controlledIsPlaying !== undefined) {
        if (controlledIsPlaying) {
          audio.play().catch((error) => {
            console.warn('Không thể phát nhạc:', error);
            if (onToggle) onToggle(false);
          });
        } else {
          audio.pause();
        }
      }
    };

    if (audio.readyState >= 2) {
      handleCanPlay();
    } else {
      audio.addEventListener('canplay', handleCanPlay, { once: true });
    }

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [controlledIsPlaying, onToggle]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      if (onToggle) {
        onToggle(false);
      } else {
        setInternalIsPlaying(false);
      }
    } else {
      // Make sure audio is loaded before playing
      const playAudio = () => {
        audio.play()
          .then(() => {
            if (onToggle) {
              onToggle(true);
            } else {
              setInternalIsPlaying(true);
            }
          })
          .catch((error) => {
            console.error('Lỗi phát nhạc:', error);
          });
      };

      if (audio.readyState >= 2) {
        playAudio();
      } else {
        audio.addEventListener('canplay', playAudio, { once: true });
        audio.load(); // Trigger load
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop={loop}
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src={src} type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>

      <button
        onClick={togglePlay}
        className={clsx(
          'fixed bottom-6 right-6 z-50',
          'w-14 h-14 rounded-full',
          'bg-white/90 backdrop-blur-sm',
          'shadow-lg border-2 border-rose-200',
          'flex items-center justify-center',
          'text-rose-600 hover:text-rose-700',
          'hover:bg-rose-50',
          'transition-all duration-300',
          'hover:scale-110 active:scale-95'
        )}
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        {isPlaying ? (
          <Volume2 size={24} className="animate-float-min" />
        ) : (
          <VolumeX size={24} />
        )}
      </button>
    </>
  );
};

