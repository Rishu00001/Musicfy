import React, { useContext } from "react";
import { songsData } from "../song";
import { datacontext } from "../context/UserContext";
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";
function Player() {
  let { playingSong, playSong, pauseSong , index } = useContext(datacontext);
  return (
    <div
      className="w-[100%] md:w-[60%] h-[70px] bg-white fixed bottom-[55px]
    rounded-t-[30px] md:bottom-0 shadow-lg flex pt-[8px] justify-between
    md:items-center pl-[10px]"
    >
      <div
        className="flex justify-start items-start gap-[20px] w-[70%] h-[100%]
      cursor-pointer pl-[10px]"
      >
        <div>
          <img
            src={songsData[index].image}
            alt=""
            className="w-[40px] max-h-[40px] md:w-[70px] md:max-h-[60px] rounded-lg object-fill"
          />
        </div>
        <div className="text-[15px] md:text-[25px]">
          <div className="text-black text-[0.8em] font-semibold ">
            {songsData[index].name}
          </div>
          <div className="text-gray-700 text-[0.6em] font-semibold ">
            {songsData[index].singer}
          </div>
        </div>
      </div>
      {!playingSong ? (
        <div
          className="w-[36px] h-[36px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer mr-8"
          onClick={playSong}
        >
          <FaPlay className="w-[12px] h-[12px]"/>
        </div>
      ) : (
        <div
          className="w-[36px] h-[36px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer mr-4"
          onClick={pauseSong}
        >
          <IoPauseSharp className="w-[12px] h-[12px]"/>
        </div>
      )}
    </div>
  );
}

export default Player;
