import styled from "styled-components";

export const StyledWrapper = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
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
  height: calc(100vw / 1.75);
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(251, 251, 251, 0.5) 50%,
    rgba(222, 222, 222, 0.5) 100%
  );
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }
`;
