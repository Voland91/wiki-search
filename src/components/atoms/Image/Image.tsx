import { StyledImage } from "./Image.style";

interface ImageProps {
  src: string;
}

export const Image: React.FC<ImageProps> = ({ src }) => (
  <StyledImage src={src} />
);
