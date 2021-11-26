import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { MainSearchPage } from "./MainSearchPage";
import { DetailsPage } from "./DetailsPage";
import { ErrorPage } from "./ErrorPage";

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<MainSearchPage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default Root;
