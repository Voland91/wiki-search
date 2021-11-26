import { useState } from "react";
import { searchFetch } from "../data/fetching";
import { SearchResult } from "../environment/constans";

export const MainSearchPage: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [search, setSearch] = useState("");

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    searchFetch(setResults, search);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={handleSetSearch} />
        <button type="submit">search</button>
      </form>
      {results &&
        results.map((result) => (
          <>
            <a href="/details" key={result.id}>
              {result.title}
            </a>
            <br />
          </>
        ))}
    </>
  );
};
