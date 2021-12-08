import styled, { css } from "styled-components";

interface StyledTitleProps {
  error?: boolean;
}

export const StyledTitle = styled.h2<StyledTitleProps>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.mobileFontSizes.m};
  }

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.gray};
      font-size: ${({ theme }) => theme.fontSizes.xl};
      letter-spacing: 10px;

      @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.mobileFontSizes.xl};
      }
    `}
`;
