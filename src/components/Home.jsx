import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import video from '../assets/video.mp4';
import audio1 from '../assets/audio1.mp3';
import audio2 from '../assets/audio2.mp3';
import audio3 from '../assets/audio3.mp3';

const Home = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRefs = useRef([new Audio(audio1), new Audio(audio2), new Audio(audio3)]);

  useEffect(() => {
    const audio = currentAudio;
    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    }
    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateTime);
      }
    };
  }, [currentAudio]);

  const updateTime = () => {
    setCurrentTime(currentAudio ? currentAudio.currentTime : 0);
  };

  const handleAudio = (index) => {
    const selectedAudio = audioRefs.current[index];
    if (currentAudio && currentAudio !== selectedAudio) {
      currentAudio.pause();
      setCurrentTime(0);
    }
    setCurrentAudio(selectedAudio);
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      selectedAudio.pause();
    } else {
      selectedAudio.play();
    }
  };

  return (
    <div className="Home">
      <header className="relative h-screen">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute bottom-10 right-10 text-right z-10 max-w-2xl">
          <h1 className="text-[10rem] font-bold mb-4 opacity-90">
            News you can watch
          </h1>
          <p className="text-5xl opacity-90">
            Stay updated on what's happening in North Fortberry and beyond.
          </p>
        </div>
      </header>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Latest Episode</h2>
            <p className="text-gray-600">Homegrown Firms to Watch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[audio1, audio2, audio3].map((audio, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg cursor-pointer"
                onClick={() => handleAudio(index)}
              >
                <img src={`https://picsum.photos/200?random=${index}`} alt={`Episode ${index + 1}`} />
                <h3 className="text-xl font-bold">Episode {index + 1}</h3>
                <p>Episode description goes here...</p>

                <StyledWrapper>
                  <div className="audio-player">
                    <div className="album-cover" />
                    <div className="player-controls">
                      <div className="song-info">
                        <div className="song-title">Episode {index + 1}</div>
                        <p className="artist">Artist Name</p>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <div className="buttons">
                        <button onClick={() => handleAudio(index)} className="play-btn">
                          {isPlaying && currentAudio === audioRefs.current[index] ? 'Pause' : 'Play'}
                        </button>
                      </div>
                    </div>
                  </div>
                </StyledWrapper>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const StyledWrapper = styled.div`
  .audio-player {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 80px;
    background-color: #282828;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
  }

  .album-cover {
    width: 64px;
    height: 64px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 12px;
  }

  .player-controls {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .song-info {
    margin-bottom: 4px;
  }

  .song-title {
    font-size: 16px;
    color: #fff;
    margin: 0;
  }

  .artist {
    font-size: 12px;
    color: #b3b3b3;
    margin: 0;
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: #4f4f4f;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    background-color: #1db954;
  }

  .buttons {
    display: flex;
  }

  .play-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
  }
`;

export default Home;
