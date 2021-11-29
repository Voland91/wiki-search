import { useEffect, useState } from "react";
import { searchFetch } from "../data/fetching";
import { SearchResult } from "../environment/constans";
import { Link } from "react-router-dom";

import { SearchBar } from "../components/SearchBar/SearchBar";
import { StyledWrapper, StyledSearchBarWrapper } from "./MainSearchPage.style";

interface MainSearchPageProps {
  handleForwardSearch: (data: string) => void;
}

export const MainSearchPage: React.FC<MainSearchPageProps> = ({
  handleForwardSearch,
}) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [search, setSearch] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("english");

  useEffect(() => {
    search != "" && searchFetch(setResults, search, searchLanguage);
    search === "" && setResults([]);
  }, [search]);

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleChangeSearchLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setResults([]);
    setSearch("");
    setSearchLanguage(e.target.value);
  };

  return (
    <>
      <StyledWrapper>
        <StyledSearchBarWrapper>
          <SearchBar
            handleSetSearch={handleSetSearch}
            search={search}
            handleChangeSearchLanguage={handleChangeSearchLanguage}
          />
          {results.length > 0 ? (
            results.map((result) => (
              <div key={result.id}>
                <Link
                  to="/details"
                  onClick={() => handleForwardSearch(result.title)}
                >
                  {result.title}
                </Link>
                <p>{result.description}</p>
              </div>
            ))
          ) : (
            <p>Type what you are looking for...</p>
          )}
        </StyledSearchBarWrapper>
      </StyledWrapper>
    </>
  );
};
