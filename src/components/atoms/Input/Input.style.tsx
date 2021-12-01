import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const StyledInput = styled(DebounceInput)`
  width: 100%;
  height: 60px;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes?.L};
  outline: none;
  margin: 20px 0;
  caret-color: ${({ theme }) => theme.colors.black};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:active,
  :focus {
    border-bottom: 2px solid transparent;
  }
`;
