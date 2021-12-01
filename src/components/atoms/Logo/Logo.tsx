import {
  StyledLogoWrapper,
  StyledLogoType,
  StyledLogoSignet,
  StyledLogoBackground,
} from "./Logo.style";

export const Logo: React.FC = () => (
  <>
    <StyledLogoBackground />
    <StyledLogoWrapper>
      <StyledLogoSignet />
      <StyledLogoType>wikipedia</StyledLogoType>
    </StyledLogoWrapper>
  </>
);
