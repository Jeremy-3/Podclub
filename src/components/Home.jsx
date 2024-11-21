import React, { useState, useRef, useEffect } from "react";
import video from "../assets/video.mp4";
import audio1 from "../assets/audio1.mp3";
import audio2 from "../assets/audio2.mp3";
import audio3 from "../assets/audio3.mp3";

const Home = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRefs = useRef([
    new Audio(audio1),
    new Audio(audio2),
    new Audio(audio3),
  ]);

  useEffect(() => {
    const audio = currentAudio;
    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      );
      return () => {
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [currentAudio]);

  const updateTime = () => {
    if (currentAudio) {
      setCurrentTime(currentAudio.currentTime);
    }
  };

  const handleAudio = (index) => {
    const selectedAudio = audioRefs.current[index];
    if (currentAudio && currentAudio !== selectedAudio) {
      currentAudio.pause();
      setCurrentTime(0);
    }

    setCurrentAudio(selectedAudio);
    if (isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      selectedAudio.play();
      setIsPlaying(true);
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
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right z-10 max-w-xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white opacity-90 mb-4">
              Chat and explore on the go
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white opacity-90">
          "Where every conversation sparks a new idea"
          </p>
        </div>
      </header>

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Latest Episode</h2>
            <p className="text-gray-400">Homegrown Firms to Watch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[audio1, audio2, audio3].map((audio, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg cursor-pointer"
                onClick={() => handleAudio(index)}
              >
                <img
                  src={`https://picsum.photos/200?random=${index}`}
                  alt={`Episode ${index + 1}`}
                />
                <h3 className="text-xl font-bold text-black">
                  Episode {index + 1}
                </h3>
                <p className="text-gray-600">
                  Episode description goes here...
                </p>

                <div className="audio-player flex items-center justify-center w-full h-20 bg-black rounded-lg p-2 mt-4">
                  <div className="album-cover w-16 h-16 bg-white rounded-full mr-4" />
                  <div className="player-controls flex-1 flex flex-col">
                    <div className="song-info mb-2">
                      <div className="song-title text-white text-sm">
                        Episode {index + 1}
                      </div>
                      <p className="artist text-xs text-gray-400">
                        Artist Name
                      </p>
                    </div>
                    <div className="progress-bar relative w-full h-2 bg-gray-600 rounded-full">
                      <div
                        className="progress absolute top-0 left-0 h-full bg-orange-500"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>
                    <div className="buttons flex mt-2">
                      <button
                        onClick={() => handleAudio(index)}
                        className="play-btn bg-none border-none cursor-pointer text-white text-xl"
                      >
                        {isPlaying && currentAudio === audioRefs.current[index]
                          ? "Pause"
                          : "Play"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
