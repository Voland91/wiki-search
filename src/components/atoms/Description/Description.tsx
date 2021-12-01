import { StyledDescription } from "./Description.style";

interface DescriptionProps {
  child: string;
  result?: boolean;
}

export const Description: React.FC<DescriptionProps> = ({ child, result }) => (
  <StyledDescription result={result}>{child}</StyledDescription>
);
