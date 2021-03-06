import * as React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme/mainTheme";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "../components/molecules/Navigation/Navigation";
import { MainSearchPage } from "./MainSearchPage/MainSearchPage";
import { DetailsPage } from "./DetailsPage/DetailsPage";
import { ErrorPage } from "./404/ErrorPage";
import { Footer } from "../components/molecules/Footer/Footer";
import { StyledTheme } from "./Root.style";

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StyledTheme>
        <Navigation />
        <Routes>
          <Route index element={<MainSearchPage />} />
          <Route path="details/:lang/:name" element={<DetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </StyledTheme>
    </ThemeProvider>
  </>
);

export default Root;
