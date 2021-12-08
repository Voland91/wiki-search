import styled from "styled-components";
import arrow_down from "../../../assets/arrow_down.png";

export const StyledSelect = styled.select`
  background-color: transparent;
  appearance: none;
  border: none;
  font-family: "Montserrat", sans-serif;
  background: url(${arrow_down}) 100% no-repeat;
  background-size: 12px;
  padding-right: 11px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.mobileFontSizes.s};
  }
`;

export const StyledOption = styled.option`
  background-color: ${({ theme }) => theme.colors.white};
`;
