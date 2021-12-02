import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSearchResult = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 7px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
