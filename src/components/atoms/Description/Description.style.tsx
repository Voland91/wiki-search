import styled, { css } from "styled-components";

interface StyledDescriptionProps {
  result?: boolean;
}

export const StyledDescription = styled.p<StyledDescriptionProps>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes?.m};

  ${({ result }) =>
    result &&
    css`
      color: ${({ theme }) => theme.colors.black};
      margin-top: 7px;
    `}
`;
