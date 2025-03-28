import { songsData } from "../song";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { GoHeart } from "react-icons/go";
function Card({ name, singer, image, index }) {
  return (
    <div className="w-[90%] h-[65px] md:h-[85px] bg-gray-800 rounded-lg p-[3.5px] md:p-[5px] flex justify-center items-center">
      <div className="flex justify-start items-center gap-[20px] w-[70%] h-[100%]">
        <div>
          <img
            src={image}
            alt=""
            className="w-[60px] max-h-[60px] md:w-[80px] md:max-h-[80px] rounded-lg"
          />
        </div>
        <div className="text-[15px] md:text-[20px]">
          <div className="text-white text-[1em] font-semibold ">{name}</div>
          <div className="text-gray-400 text-[0.6em] font-semibold ">
            {singer}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[20px] w-[30%] h-[100%] text-[15px] md:text-[20px]">
        <div>
          <MdOutlinePlaylistAdd className="text-white text-[1.2em] cursor-pointer" />
        </div>

        <div>
          <GoHeart className="text-white text-[1em] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Card;
