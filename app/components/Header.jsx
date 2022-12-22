"use client";

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
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col-reverse sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-lg">
        <HeaderItem
          title="HOME"
          Icon={HomeIcon}
          onClick={() => router.push("/")}
        />
        <HeaderItem
          title="SEARCH"
          Icon={SearchIcon}
          onClick={() => router.push("/search")}
        />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div
        className="flex flex-col items-center mb-5 sm:mr-20 sm:mb-0 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white"
        onClick={() => router.push("/")}
      >
        <FilmIcon className="w-12" />
        <h3 className="text-bold italic">MOVIEDB</h3>
      </div>
    </div>
  );
};

export default Header;
