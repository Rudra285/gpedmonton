import React, { useRef, useState, useEffect } from "react";
import "./MusicCard.css"; // optional CSS for styling
import { FaPlay, FaPause } from "react-icons/fa";

interface MusicData {
  name: string;
  audioUrl?: string; // audio file url
}

const MusicCard: React.FC<MusicData> = ({ name, audioUrl }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration > 0) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
        });

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="music-card" onClick={togglePlay}>
            <div className="music-card-info">
                <h3>{name}</h3>
                <div className="icon-wrapper">
                    <div className="icon-inner">
                        {isPlaying ? (
                            <div className="progress-circle">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path
                                        className="circle"
                                        strokeDasharray={`${progress}, 100`}
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                    /> 
                                </svg>
                                <FaPause className="pause-icon" style={{ color: 'black' }}/>
                            </div>
                        ) : (
                            <FaPlay className="pause-icon" style={{ color: 'black' }}/>
                        )}
                    </div>
                </div>
            </div>
            <audio ref={audioRef} src={audioUrl} preload="auto" />
        </div>
    );
};

export default MusicCard;