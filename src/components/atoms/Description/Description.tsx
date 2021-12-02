import { StyledDescription } from "./Description.style";

interface DescriptionProps {
  child: string;
  dark?: boolean;
  footer?: boolean;
}

export const Description: React.FC<DescriptionProps> = ({
  child,
  dark,
  footer,
}) => (
  <StyledDescription dark={dark} footer={footer}>
    {child}
  </StyledDescription>
);
