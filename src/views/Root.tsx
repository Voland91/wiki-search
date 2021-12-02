import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Logo } from "../components/atoms/Logo/Logo";
import { MainSearchPage } from "./MainSearchPage/MainSearchPage";
import { DetailsPage } from "./DetailsPage/DetailsPage";
import { ErrorPage } from "./ErrorPage";
import { Footer } from "../components/molecules/Footer/Footer";

const Root: React.FC = () => {
  const [search, setSaerch] = useState("");

  const handleForwardSearch = (result: string) => setSaerch(result);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Logo />
        <Routes>
          <Route
            index
            element={
              <MainSearchPage handleForwardSearch={handleForwardSearch} />
            }
          />
          <Route
            path={`details/${search}`}
            element={<DetailsPage searchName={search} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Root;
