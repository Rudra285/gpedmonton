import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa6"; // make sure this matches your other imports
import "./MusicCard.css";

interface MusicData {
  name: string;
  audioUrl?: string;
}

const MusicCard: React.FC<MusicData> = ({ name, audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => console.error("Audio play failed:", err));
      setIsPlaying(true);
    }
  };

  return (
    <div className={`music-card ${isPlaying ? "playing" : ""}`} onClick={togglePlay}>
      <h3>{name}</h3>

      <button className="play-btn">
        {isPlaying ? (
          <FaPause className="play-icon" />
        ) : (
          <FaPlay className="play-icon" />
        )}
      </button>

      <audio ref={audioRef} src={audioUrl} preload="auto" />
    </div>
  );
};

export default MusicCard;