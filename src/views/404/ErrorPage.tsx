import { Link } from "react-router-dom";
import { Title } from "../../components/atoms/Title/Title";
import { Description } from "../../components/atoms/Description/Description";
import { StyledWrapper } from "./ErrorPage.style";

export const ErrorPage: React.FC = () => (
  <StyledWrapper>
    <Title child={"CDIV"} error />
    <Description child={"404 - page not found"} />
    <Link to="/">
      <Description child={"back to homepage"} dark />
    </Link>
  </StyledWrapper>
);
