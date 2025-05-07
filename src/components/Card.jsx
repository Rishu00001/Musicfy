import { songsData } from "../song";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useContext } from "react";
import { datacontext } from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/PlaylistSlice";
import { addLike , removeLike} from "../redux/LikedSlice";
function Card({ name, singer, image, songIndex }) {
  let { playSong, index, setIndex } = useContext(datacontext);

  let dispatch = useDispatch();
  let likedSong = useSelector((state) => state.liked);
  const songExistInLiked = likedSong.some(
    (song) => song.songIndex === songIndex
  );
  let gaana = useSelector((state) => state.playlist);
  const songExistInPlaylist = gaana.some((song) => song.songIndex == songIndex);

  return (
    <div className="w-[90%] h-[65px] md:h-[85px] bg-gray-800 rounded-lg p-[3.5px] md:p-[5px] flex justify-center items-center hover:bg-gray-600 transition-all">
      <div
        className="flex justify-start items-center gap-[20px] w-[70%] h-[100%]
      cursor-pointer"
        onClick={() => {
          setIndex(songIndex);
          playSong();
        }}
      >
        <div>
          <img
            src={image}
            alt=""
            className="w-[60px] max-h-[60px] md:w-[80px] md:max-h-[80px] rounded-lg"
          />
        </div>
        <div className="text-[15px] md:text-[20px]">
          <div className="text-white text-[0.8em] font-semibold ">{name}</div>
          <div className="text-gray-400 text-[0.6em] font-semibold ">
            {singer}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[20px] w-[30%] h-[100%] text-[15px] md:text-[20px]">
        {!songExistInPlaylist && (
          <div>
            <MdOutlinePlaylistAdd
              className="text-white text-[1.2em] cursor-pointer"
              onClick={() => {
                dispatch(addSong({ name, image, singer, songIndex }));
              }}
            />
          </div>
        )}
        {songExistInPlaylist && (
          <div>
            <MdOutlinePlaylistRemove
              className="text-white text-[1.2em] cursor-pointer"
              onClick={() => {
                dispatch(removeSong(songIndex));
              }}
            />
          </div>
        )}
        {!songExistInLiked && (
          <div
            onClick={() => {
              dispatch(addLike({ name, image, singer, songIndex }));
            }}
          >
            <GoHeart className="text-white text-[1em] cursor-pointer" />
          </div>
        )}
        {songExistInLiked && (
          <div
            onClick={() => {
              dispatch(removeLike( songIndex ));
            }}
          >
            <GoHeartFill className="text-white text-[1em] cursor-pointer" />
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Card;
