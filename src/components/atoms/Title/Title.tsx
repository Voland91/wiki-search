import { StyledTitle } from "./Title.style";

interface TitleProps {
  child: string;
}

export const Title: React.FC<TitleProps> = ({ child }) => (
  <StyledTitle>{child}</StyledTitle>
);
