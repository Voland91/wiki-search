import styled from "styled-components";

export const StyledDetailsPage = styled.div`
  padding: 200px 50px 50px 50px;
  position: relative;
  z-index: 999;
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 22px;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 999;
`;
