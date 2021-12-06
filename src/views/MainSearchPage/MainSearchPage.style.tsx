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
  height: 30vh;
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
  margin-bottom: 50px;
`;

export const StyledLogoBackground = styled.div`
  position: absolute;
  display: block;
  left: 40%;
  top: -30%;
  width: calc(100vw / 1.75);
  min-width: 700px;
  height: calc(100vw / 1.75);
  min-height: 700px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(251, 251, 251, 0.5) 50%,
    rgba(222, 222, 222, 0.5) 100%
  );
  z-index: 1;
`;
