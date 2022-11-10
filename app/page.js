import { useSearchParams } from "next/navigation";
import apis, { BASE_URL } from "../utils/request";
import Results from "./components/Results";

const getData = async (genre) => {
  const res = await fetch(
    `${BASE_URL}${apis[genre]?.url || apis.fetchTrending.url}`
  );

  return res.json();
};

export default async function Home({ params, searchParams }) {
  const data = await getData(searchParams);

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
