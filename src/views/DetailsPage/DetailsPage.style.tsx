import styled from "styled-components";
import Loader from "react-loader-spinner";

export const StyledDetailsPageWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

export const StyledDetailsPage = styled.iframe`
  padding-left: 10px;
  border: none;
  min-height: 550px;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  max-height: 40px;
  margin-bottom: 20px;
`;

export const StyledLoader = styled(Loader)`
  margin: 0 auto;
  width: 0;
  padding-top: 150px;
`;
