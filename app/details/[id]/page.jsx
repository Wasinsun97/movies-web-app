import React from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../../../utils/request";

const fetchMovieById = async (id, mediaType) => {
  try {
    let res;
    res = await fetch(
      `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      res = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
        { cache: "no-store" }
      );
    }
    return res.json();
  } catch (error) {
    alert("error: ", error);
  }
};

const renderTags = (title, details) => (
  <>
    <p className="font-bold mt-4">{title}</p>
    <p className="italic">
      {details.map(
        (item, index) =>
          `${item.name} ${index < details.length - 1 ? "• " : ""}`
      )}
    </p>
  </>
);

const DetailPage = async ({ params, searchParams }) => {
  const data = await fetchMovieById(params.id, searchParams.media);

  return (
    <div>
      <div className="p-2">
        <h2 className="text-2xl font-bold">
          {data.title || data.original_name}
        </h2>
      </div>
      <Image
        alt="thumbnail"
        className="mt-4"
        src={`${IMAGE_BASE_URL}${data.backdrop_path}`}
        height={1080}
        width={1920}
        loading="lazy"
      />
      <p className="flex items-center mt-4 italic">
        {data.revenue ? `$${data.revenue.toLocaleString()} USD •` : ""}{" "}
        {data.release_date || data.first_air_date} •{" "}
        <HandThumbUpIcon className="h-5 mx-2" />{" "}
        {data.vote_count.toLocaleString()}
      </p>
      {renderTags("Genre", data.genres)}
      {renderTags("Studio", data.production_companies)}
      {data.budget ? (
        <>
          <p className="font-bold mt-4">Budget</p>
          <p className="italic">{`$${data.budget.toLocaleString()} USD`}</p>
        </>
      ) : undefined}
      <p className="font-bold mt-4">Overview</p>
      <p>{data.overview}</p>
    </div>
  );
};

export default DetailPage;
