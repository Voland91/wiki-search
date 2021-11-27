import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 80px;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes?.L};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
