import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    typography: {
      fontFamily: string;
    };
    colors: {
      backgroundColor: string;
      fontColor: string;
      fontSecondColor: string;
      secondBackColor: string;
      accentColor: string;
    };
  }
}
