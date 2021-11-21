import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme/mainTheme";

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <h1>Siemanko!</h1>
    </ThemeProvider>
  </>
);

export default Root;
