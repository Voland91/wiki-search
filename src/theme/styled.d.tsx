import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray: string;
      black: string;
    };

    fontWeights: {
      thin: number;
      regular: number;
      bold: number;
    };

    fontSizes: {
      s: string;
      m: string;
      L: string;
    };
  }
}
