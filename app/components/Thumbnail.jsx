"use client";

import React from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { IMAGE_BASE_URL } from "../../utils/request";
import { useRouter } from "next/navigation";

const Thumbnail = ({ result }) => {
  const router = useRouter();

  return (
    <div
      className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={() =>
        router.push(`/details/${result.id}?media=${result.media_type}`)
      }
    >
      <Image
        alt="thumbnail"
        src={`${IMAGE_BASE_URL}${result.backdrop_path}`}
        height={1080}
        width={1920}
        loading="lazy"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          {result.vote_count ? (
            <>
              <HandThumbUpIcon className="h-5 mx-2" />{" "}
              {result.vote_count.toLocaleString()}
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
