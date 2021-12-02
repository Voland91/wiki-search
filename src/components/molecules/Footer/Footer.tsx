import { Description } from "../../atoms/Description/Description";
import { StyledFooter } from "./Footer.style";

export const Footer: React.FC = () => (
  <StyledFooter>
    <a
      href="https://www.behance.net/gallery/75870375/Wikipedia-Imagination/modules/440847641"
      target="_blank"
      rel="nofollow noreferrer"
    >
      <Description
        child={"Project by Dmitriy Kozhevnikov - Wikipedia Imagination"}
        footer
      />
    </a>
  </StyledFooter>
);
