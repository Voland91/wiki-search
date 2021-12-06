import { StyledTitle } from "./Title.style";

interface TitleProps {
  child: string;
  error?: boolean;
}

export const Title: React.FC<TitleProps> = ({ child, error }) => (
  <StyledTitle error={error}>{child}</StyledTitle>
);
