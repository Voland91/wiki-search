import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
`;

export const StyledSearchBarWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 50vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 20px;
`;

export const StyledSeacrResultWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
`;
