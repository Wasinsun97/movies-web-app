import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  UserIcon,
  RectangleStackIcon as CollectionIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="flex flex-col items-center sm:mr-20">
        <FilmIcon className="w-14" />
        <h1 className="text-l text-bold italic">MOVIEFLIX</h1>
      </div>
    </div>
  );
};

export default Header;
