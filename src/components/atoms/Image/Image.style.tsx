import styled from "styled-components";

interface StyledImageProps {
  src: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: cover;
  background-image: url({src});
  background-color: ${({ theme }) => theme.colors.gray};
  width: 50px;
  height: 80px;
  margin-right: 20px;
`;
