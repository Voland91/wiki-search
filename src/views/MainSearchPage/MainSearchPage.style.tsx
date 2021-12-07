import styled from "styled-components";

export const StyledWrapper = styled.main`
  max-width: 800px;
  width: 100%;
  min-height: 570px;
  margin: 0 auto;
  padding-top: 200px;
`;

export const StyledSearchBarWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const StyledSeacrResultWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
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
  z-index: -1;
`;
