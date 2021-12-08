import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray: string;
      black: string;
      lightGray: string;
    };

    fontWeights: {
      thin: number;
      regular: number;
      bold: number;
    };

    fontSizes: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };

    mobileFontSizes: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
