import { StyledDescription } from "./Description.style";

interface DescriptionProps {
  child: string;
  result?: boolean;
  footer?: boolean;
}

export const Description: React.FC<DescriptionProps> = ({
  child,
  result,
  footer,
}) => (
  <StyledDescription result={result} footer={footer}>
    {child}
  </StyledDescription>
);
