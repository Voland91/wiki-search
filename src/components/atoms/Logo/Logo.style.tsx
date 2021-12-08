import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  padding: 20px 0 20px 0;
  position: relative;
  z-index: 999;
  max-width: 120px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledLogoType = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.mobileFontSizes.m};
  }
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

  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`;
