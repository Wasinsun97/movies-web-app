/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useRef } from "react";
import apis, { BASE_URL } from "../../utils/request";
import Results from "../components/Results";

const SearchPage = () => {
  const ref = useRef();
  const [data, setData] = useState();
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (ref.current.value !== "") {
      setQuery(ref.current.value);
      const res = await fetch(
        `${BASE_URL}${apis.search.url}${ref.current.value}`,
        {
          cache: "no-store",
        }
      );
      res.json().then((data) => {
        if (data.results.length > 0) setData(data);
      });
    }
  };

  const handleOnKeydown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const renderEmptyContent = () => {
    if (!query) {
      return (
        <div className="flex flex-col items-center">
          <MagnifyingGlassIcon className="h-24" />
          <h1>Search movies, tv shows, peple etc.</h1>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          <QuestionMarkCircleIcon className="h-24" />
          <h1>Not found</h1>
        </div>
      );
    }
  };

  return (
    <div className="px-20 my-10">
      {query ? (
        <div className="pb-5">
          <p>Search "{query}"</p>
        </div>
      ) : null}
      <div className="grid grid-cols-3 gap-4 grid-flow-row">
        <input
          type="text"
          className="rounded-md h-10 col-span-2 text-gray-700 p-2.5"
          ref={ref}
          onKeyDown={handleOnKeydown}
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
      ) : (
        <div className="my-14">{renderEmptyContent()}</div>
      )}
      {}
    </div>
  );
};

export default SearchPage;
