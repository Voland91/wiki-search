import { SearchingResult } from "../../../environment/interfaces";
import { StyledSearchResult, StyledLink } from "./SearchResult.style";
import { Image } from "../../atoms/Image/Image";
import { Title } from "../../atoms/Title/Title";
import { Description } from "../../atoms/Description/Description";

interface SearchResultProps {
  result: SearchingResult;
  searchLanguage: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  result,
  searchLanguage,
}) => {
  const handleHistory = () => {
    const histCheck = localStorage.getItem("searchHistory");
    if (histCheck != null || histCheck != undefined) {
      const data = [
        ...JSON.parse(histCheck),
        { lang: searchLanguage, name: result.key },
      ];
      localStorage.setItem("searchHistory", JSON.stringify(data));
    } else {
      const searchHistory = [{ lang: searchLanguage, name: result.key }];
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  };

  return (
    <StyledLink
      to={`/details/${searchLanguage}/${result.key}`}
      onClick={handleHistory}
    >
      <StyledSearchResult defaultValue={[searchLanguage, result.key]}>
        {result.thumbnail != null && <Image src={result.thumbnail.url} />}
        <div>
          <Title child={result.title} />
          <Description child={result.description} dark />
        </div>
      </StyledSearchResult>
    </StyledLink>
  );
};
