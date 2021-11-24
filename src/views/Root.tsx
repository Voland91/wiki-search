import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme/mainTheme";
import { useState } from "react";
import { searchFetch } from "../data/fetching";
import { Result } from "../environment/constans";

const Root: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [search, setSearch] = useState("");

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    searchFetch(setResults, search);
    console.log(search);
  };
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSearch}>
          <input type="text" value={search} onChange={handleSetSearch} />
          <button type="submit">search</button>
        </form>
        {results &&
          results.map((result) => (
            <>
              <h1 key={result.id}>{result.title}</h1>
              <img src={result.thumbnail.url} />
            </>
          ))}
      </ThemeProvider>
    </>
  );
};
export default Root;
