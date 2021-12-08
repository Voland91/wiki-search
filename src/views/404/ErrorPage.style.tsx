import styled from "styled-components";
import bgphoto from "../../assets/404bg.png";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;

  &::after {
    content: "";
    background-image: url(${bgphoto});
    opacity: 0.1;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 90vh;
    height: 700px;
    bottom: 0;
    position: absolute;
    z-index: 0;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;
