import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
    `;

export default GlobalStyle;
