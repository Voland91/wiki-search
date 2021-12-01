import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes?.m};
`;
