import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 30px;
  z-index: 999;
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

export const StyledLogoType = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes?.m};
  z-index: 999;
`;

export const StyledLogoSignet = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 251, 251, 1) 50%,
    rgba(222, 222, 222, 1) 100%
  );
  margin: 0 auto 10px auto;
`;
