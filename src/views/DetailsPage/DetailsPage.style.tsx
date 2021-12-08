import styled from "styled-components";
import Loader from "react-loader-spinner";

export const StyledDetailsPageWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

export const StyledDetailsPage = styled.iframe`
  padding-left: 10px;
  border: none;
  min-height: 500px;
  max-width: 100vw;
  overflow: hidden;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  max-height: 40px;
  margin: 20px 0;
`;

export const StyledLoader = styled(Loader)`
  align-self: center;
  padding-top: 150px;
`;
