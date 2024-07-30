import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  primary: {
    blue: "#8054FF",
  },
  gradient: {
    secondary: {
      green: {
        color1: "#BFC021",
        color2: "#7A7D00",
      },
      red: {
        color1: "#FF8579",
        color2: "#FF3F54",
      },
      orange: {
        color1: "#9E93FD",
        color2: "#A45AF4",
      },
    },
    primary: {
      color1: "#5c2ce8",
      color2: "#8054FF",
    },
  },
  text: {
    50: "#FAFAFA",
    0: "#FFF",
    coolGray: "#1F2937",
    primary: "#8054FF",
    black: "#000",
  },
};

const appTheme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
    SourceSansPro: {
      300: {
        normal: "SourceSansPro_300Light",
      },
      400: {
        normal: "SourceSansPro_400Regular",
      },
      600: {
        normal: "SourceSansPro_600SemiBold",
      },
      700: {
        normal: "SourceSansPro_700Bold",
      },
    },
  },
  fonts: {
    heading: "SourceSansPro",
    body: "SourceSansPro",
    mono: "SourceSansPro",
  },
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
