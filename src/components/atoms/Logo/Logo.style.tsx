import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  text-align: center;
  padding: 50px;
  position: relative;
  z-index: 999;
`;

export const StyledLogoType = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes?.m};
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
