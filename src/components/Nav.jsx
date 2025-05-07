import React from "react";
import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="w-full h-[70px] bg-black fixed bottom-0 md:top-0 text-white flex flex-row justify-around md:justify-center items-center gap-[50px] p-[20px] z-30 rounded-t-[15px]">
      <Link to={"/"}>
        <TiHome className="w-[25px] h-[25px]" />
      </Link>
      <Link to={"/search"}>
        <IoSearch className="w-[25px] h-[25px]" />
      </Link>
      <Link to={"/playlist"}>
        <RiPlayListFill className="w-[25px] h-[25px]" />
      </Link>
      <Link to={"/liked"}>
        <FaHeart className="w-[25px] h-[25px]" />
      </Link>
    </div>
  );
}

export default Nav;
