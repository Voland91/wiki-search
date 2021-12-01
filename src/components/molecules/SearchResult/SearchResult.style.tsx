import styled from "styled-components";

export const StyledSearchResult = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 7px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledDescriptionWrapper = styled.div``;
