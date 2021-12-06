import styled, { css } from "styled-components";

interface StyledTitleProps {
  error?: boolean;
}

export const StyledTitle = styled.h2<StyledTitleProps>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.gray};
      font-size: ${({ theme }) => theme.fontSizes.xl};
      letter-spacing: 10px;
    `}
`;
