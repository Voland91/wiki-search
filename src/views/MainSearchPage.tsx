import { useEffect, useState } from "react";
import { searchFetch } from "../data/fetching";
import { SearchResult } from "../environment/constans";
import { Link } from "react-router-dom";

export const MainSearchPage: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [search, setSearch] = useState("");
  const [searchResultsLength, setSearchResultsLength] = useState(5);

  // useEffect(() => {
  //   return searchFetch(setResults, search, searchResultsLength);
  // }, [searchResultsLength]);

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    searchFetch(setResults, search, searchResultsLength);
  };

  const handleLoadMore = () => setSearchResultsLength(searchResultsLength + 5);

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={handleSetSearch} />
        <button type="submit">search</button>
      </form>
      {results.length > 0 &&
        results.map((result) => (
          <div key={result.id}>
            <Link to="/details">{result.title}</Link>
          </div>
        ))}
      {results.length > 0 && (
        <button onClick={handleLoadMore}>load more</button>
      )}
    </>
  );
};
