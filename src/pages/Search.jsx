import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { IoMdSearch } from "react-icons/io";
import { songsData } from "../song";
import Card from "../components/Card";
function Search() {
  let [input, setInput] = useState("");
  let [filteredSong, setFilteredSong] = useState([]);
  useEffect(() => {
    let a = songsData.filter((song) =>
      song.name
        .toLowerCase()
        .includes(
          input.toLowerCase() ||
            song.singer.toLowerCase().includes(input.toLowerCase())
        )
    );
    setFilteredSong(a);
  }, [input]);
  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[80px] gap-[20px]">
      <Player />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[90%] md:w-[50%] h-[50px] bg-gray-800 flex
      justify-center items-center gap-[20px] rounded-lg overflow-hidden p-[15px]
      md:p-0"
        action=""
      >
        <IoMdSearch className="text-gray-200 text-[18px]" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-[90%] h-[100%] bg-gray-800
      outline-none border-0 text-white p-[10px]"
          placeholder="Search songs here"
        />
      </form>
      {input ? (
        <div
          className="w-[100%] h-[69%] md:h-[100%] flex flex-col justify-start p-[20px]
      items-center gap-5 overflow-auto"
        >
          {filteredSong.map((song) => (
            <Card
              name={song.name}
              image={song.image}
              singer={song.singer}
              songIndex={song.id - 1}
            />
          ))}
        </div>
      ) : (
        <div className="text-gray-700 text-[30px] font-bold">Search Songs</div>
      )}
    </div>
  );
}

export default Search;
