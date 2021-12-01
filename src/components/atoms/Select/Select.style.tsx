import styled from "styled-components";
import arrow_down from "../../../assets/arrow_down.png";

export const StyledSelect = styled.select`
  background-color: transparent;
  appearance: none;
  border: none;
  font-family: "Montserrat", sans-serif;
  background: url(${arrow_down}) 100% no-repeat;
  background-size: 13%;
  padding-right: 11px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 20px;
`;

export const StyledOption = styled.option`
  background-color: ${({ theme }) => theme.colors.white};
`;
