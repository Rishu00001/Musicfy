import React, { useContext, useEffect, useState, useRef, use } from "react";
import { songsData } from "../song";
import musicImg from "../assets/musicanim.webp";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";
import { datacontext } from "../context/UserContext";
import Card from "../components/Card";
import { MdKeyboardArrowDown } from "react-icons/md";
import Player from '../components/Player'
function Home() {
  let {
    audioRef,
    playingSong,
    playSong,
    pauseSong,
    nextSong,
    prevSong,
    index,
    setIndex,
  } = useContext(datacontext);

  let [range, setRange] = useState(0);
  let progress = useRef(null);
  let [arrow, setArrow] = useState(false);
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        let duration = audioRef.current.duration || 1; // Prevent division by zero
        let currentTime = audioRef.current.currentTime;
        let progressPercent = (currentTime / duration) * 100;
        setRange(progressPercent);
        if (progress.current) {
          progress.current.style.width = `${progressPercent}%`;
        }
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [audioRef]);

  function handleRange(e) {
    let newRange = e.target.value;
    setRange(newRange);
    let duration = audioRef.current.duration;
    if (duration) {
      audioRef.current.currentTime = (duration * newRange) / 100;
    }
  }

  return (
    <div className="w-full h-screen bg-black flex flex-row relative overflow-hidden">
      <MdKeyboardArrowDown
        className="absolute text-white top-[25px] left-[10%]
      text-[28px] md:hidden"
        onClick={() => {
          setArrow((prev) => !prev);
        }}
      />
      {!arrow ? (
        <>
          <div className="w-full md:w-[50%] h-full flex justify-start items-center flex-col pt-[20px] md:pt-[120px] gap-[25px]">
            <h1 className="text-white font-semibold text-[20px]">
              Now Playing
            </h1>

            <div className="w-[80%] max-w-[250px] h-[240px] object-fill rounded-md overflow-hidden relative">
              <img
                src={songsData[index].image}
                alt=""
                className="w-full h-full"
              />
              {playingSong && (
                <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center">
                  <img src={musicImg} alt="" className="w-[50%]" />
                </div>
              )}
            </div>

            {/* Song Details */}
            <div>
              <div className="text-white text-[30px] font-bold">
                {songsData[index].name}
              </div>
              <div className="text-[12px] text-gray-400 text-center">
                {songsData[index].singer}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-[50%] flex justify-center items-center relative">
              <input
                value={range}
                type="range"
                className="appearance-none w-[100%] h-[7px] rounded-md bg-gray-600 accent-white"
                id="range"
                onChange={handleRange}
              />
              <div
                className={`bg-white h-[100%] absolute left-0 rounded-md`}
                ref={progress}
              ></div>
            </div>

            {/* Music Controls */}
            <div className="text-white flex flex-row justify-center items-center gap-[20px]">
              <MdSkipPrevious
                onClick={prevSong}
                className="hover:text-gray-600 transition-all cursor-pointer w-[28px] h-[28px]"
              />

              {!playingSong ? (
                <div
                  className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
                  onClick={playSong}
                >
                  <FaPlay />
                </div>
              ) : (
                <div
                  className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
                  onClick={pauseSong}
                >
                  <IoPauseSharp />
                </div>
              )}

              <MdSkipNext
                onClick={nextSong}
                className="hover:text-gray-600 transition-all cursor-pointer w-[28px] h-[28px]"
              />
            </div>
          </div>

          {/* Right Side - Additional UI (if needed) */}
          <div className=" w-[100%] md:w-[50%] h-[84%] hidden md:flex pt-[100px] flex-col gap-[18px]  overflow-auto pb-[20px]">
            {songsData.map((song) => (
              <Card
                name={song.name}
                image={song.image}
                singer={song.singer}
                songIndex={song.id - 1}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className=" w-[100%] md:w-[50%] h-[83%] items-center flex mt-[60px] flex-col gap-[19px]  overflow-auto pb-[80px] relative">
          <Player/>
            {songsData.map((song) => (
              <Card
                name={song.name}
                image={song.image}
                singer={song.singer}
                songIndex={song.id - 1}
              />
            ))}
          </div>
        </>
      )}

      {/* Left Side - Music Player UI */}
    </div>
  );
}

export default Home;
