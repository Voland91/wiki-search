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
import { Logo } from "../../components/atoms/Logo/Logo";
import { Description } from "../../components/atoms/Description/Description";

interface MainSearchPageProps {
  handleForwardSearch: (data: string) => void;
}

export const MainSearchPage: React.FC<MainSearchPageProps> = ({
  handleForwardSearch,
}) => {
  const [results, setResults] = useState<SearchingResult[]>([]);
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
      <Logo />
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
              <SearchResult
                key={result.id}
                result={result}
                handleForwardSearch={handleForwardSearch}
              />
            ))
          ) : (
            <Description child="Type what you are looking for..." />
          )}
        </StyledSeacrResultWrapper>
      </StyledWrapper>
    </>
  );
};
