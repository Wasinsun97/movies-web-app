"use client";

import React, { useState } from "react";
import { useRef } from "react";
import apis, { BASE_URL } from "../../utils/request";
import Results from "../components/Results";

const SearchPage = () => {
  const ref = useRef();
  const [data, setData] = useState();

  const handleSearch = async () => {
    const res = await fetch(
      `${BASE_URL}${apis.search.url}${ref.current.value}`,
      {
        cache: "no-store",
      }
    );
    res.json().then((data) => {
      setData(data);
    });
  };

  return (
    <div className="px-20 my-10">
      <div className="grid grid-cols-3 gap-4 grid-flow-row">
        <input
          type="text"
          className="rounded-md h-10 col-span-2 text-gray-700 p-2.5"
          ref={ref}
        />
        <button
          className="rounded-md h-10 col-span-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-green-500 hover:to-cyan-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {data ? (
        <div>
          <Results results={data.results} />
        </div>
      ) : null}
    </div>
  );
};

export default SearchPage;
