import {
  StyledLogoWrapper,
  StyledLogoType,
  StyledLogoSignet,
} from "./Logo.style";

import { StyledLink } from "../../molecules/SearchResult/SearchResult.style";

export const Logo: React.FC = () => (
  <>
    <StyledLogoWrapper>
      <StyledLink to="/">
        <StyledLogoSignet />
        <StyledLogoType>wikipedia</StyledLogoType>
      </StyledLink>
    </StyledLogoWrapper>
  </>
);
