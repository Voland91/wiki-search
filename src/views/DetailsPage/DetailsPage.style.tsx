import styled from "styled-components";
import Loader from "react-loader-spinner";

export const StyledDetailsPage = styled.iframe`
  width: 100%;
  height: 57vh;
  padding: 0 20px;
  border: none;
  position: relative;
  z-index: 999;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  top: 0;
`;

export const StyledSelectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLoader = styled(Loader)`
  margin: 0 auto;
  width: 0;
  padding-top: 150px;
`;
