import { useEffect, useState } from "react";
import { searchFetch } from "../../data/fetching";
import { SearchingResult } from "../../environment/constans";

import { SearchResult } from "../../components/molecules/SearchResult/SearchResult";
import { SearchBar } from "../../components/molecules/SearchBar/SearchBar";
import {
  StyledWrapper,
  StyledSearchBarWrapper,
  StyledSeacrResultWrapper,
} from "./MainSearchPage.style";
import { Description } from "../../components/atoms/Description/Description";

export const MainSearchPage: React.FC = () => {
  const [results, setResults] = useState<SearchingResult[]>([]);
  const [search, setSearch] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("en");

  useEffect(() => {
    search != "" && searchFetch(setResults, search, searchLanguage);
    search === "" && setResults([]);
  }, [search]);

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
        </StyledSearchBarWrapper>
        <StyledSeacrResultWrapper>
          {results.length > 0 ? (
            results.map((result) => (
              <SearchResult key={result.id} result={result} />
            ))
          ) : (
            <Description child="Type what you are looking for..." />
          )}
        </StyledSeacrResultWrapper>
      </StyledWrapper>
    </>
  );
};
