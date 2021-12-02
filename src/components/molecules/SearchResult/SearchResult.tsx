import { SearchingResult } from "../../../environment/constans";

import { StyledSearchResult, StyledLink } from "./SearchResult.style";
import { Image } from "../../atoms/Image/Image";
import { Title } from "../../atoms/Title/Title";
import { Description } from "../../atoms/Description/Description";

interface SearchResultProps {
  result: SearchingResult;
  handleForwardSearch: (data: string) => void;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  result,
  handleForwardSearch,
}) => (
  <StyledLink to="/details" onClick={() => handleForwardSearch(result.title)}>
    <StyledSearchResult>
      {result.thumbnail != null && <Image src={result.thumbnail.url} />}
      <div>
        <Title child={result.title} />
        <Description child={result.description} result />
      </div>
    </StyledSearchResult>
  </StyledLink>
);