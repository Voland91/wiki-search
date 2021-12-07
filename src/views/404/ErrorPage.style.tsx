import styled from "styled-components";
import bgphoto from "../../assets/404bg.png";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
  min-height: 300px;

  &::after {
    content: "";
    background-image: url(${bgphoto});
    opacity: 0.2;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 90vh;
    height: 700px;
    /* left: 0; */
    bottom: 0;
    /* right: 0; */
    position: absolute;
    z-index: 0;
  }
`;
