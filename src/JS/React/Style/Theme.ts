import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import createMuiTheme, {
  ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";
import React from "react";

declare module "@material-ui/core/styles/createMuiTheme" {
  //custom theme options typings
  interface Theme extends ThemeOptions {}
  interface ThemeOptions {
    colors?: {
      green: React.CSSProperties["color"];
      orange: React.CSSProperties["color"];
      red?: React.CSSProperties["color"];
      redDark?: React.CSSProperties["color"];
      darkGrey?: React.CSSProperties["color"];
      yellow?: React.CSSProperties["color"];
    };
    drawer?: {
      breakpoint: Breakpoint;
      width: React.CSSProperties["width"];
      titleFontSize: React.CSSProperties["fontSize"];
      color: React.CSSProperties["color"];
      activeItemColor: React.CSSProperties["color"];
      logoSize: React.CSSProperties["width"];
    };
    header?: {
      height: React.CSSProperties["height"];
      color: React.CSSProperties["color"];
      titleFontSize: React.CSSProperties["fontSize"];
      background: React.CSSProperties["background"];
    };
    footer?: {
      height: React.CSSProperties["height"];
      zIndex: React.CSSProperties["zIndex"];
      aboveFooter: React.CSSProperties["zIndex"];
      zIndexOnModal: React.CSSProperties["zIndex"];
    };
    custom?: {
      sectionTopMargin: React.CSSProperties["marginTop"];
    };
    infoPanel?: {
      background: React.CSSProperties["background"];
      breakpoint: Breakpoint;
      width: React.CSSProperties["width"];
    };
    navbar?: {
      background: React.CSSProperties["background"];
      breakpoint: Breakpoint;
      height: React.CSSProperties["width"];
    };
  }
}

function createAppTheme(options: ThemeOptions) {
  const primaryMain = "#1F51FF",
    primaryDark = "#000080",
    secondaryMain = "#4b72ff";
  const theme = createMuiTheme({
    typography: {
      ...({
        useNextVariants: true,
      } as any),
    },
  });
  return createMuiTheme({
    typography: {
      ...({
        useNextVariants: true,
      } as any),
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      h3: {
        [theme.breakpoints.down("sm")]: {
          fontSize: "2.5rem",
        },
      },
      h6: {
        [theme.breakpoints.down("sm")]: {
          fontSize: "1rem",
        },
      },
    },
    infoPanel: {
      breakpoint: "sm",
      background: "#edf1f4",
      width: "400px",
    },
    navbar: {
      breakpoint: "sm",
      background: "#edf1f4",
      height: "60px",
    },
    drawer: {
      breakpoint: "md",
      width: "260px",
      titleFontSize: "28px",
      color: "#43425d",
      activeItemColor: "#3c3b54",
      logoSize: "45px",
    },
    header: {
      height: "70px",
      color: "#fff",
      background: `linear-gradient(to right, ${primaryMain}, ${primaryDark})`,
      titleFontSize: "20px",
    },
    footer: {
      height: "42px",
      zIndex: 1202,
      aboveFooter: 1304,
      zIndexOnModal: 1301,
    },
    palette: {
      primary: {
        main: primaryMain,
        dark: primaryDark,
        contrastText: "#fff",
        "900": "#5A23D9",
      },
      secondary: {
        main: secondaryMain,
        contrastText: "#fff",
      },
      success: {
        main: "#28A745",
        contrastText: "#fff",
      },
      error: {
        main: "#DC3545",
        contrastText: "#fff",
      },
      text: {
        // primary: "#4D4F5C",
        primary: "#000000",
        secondary: "#a1a0ae",
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
      common: {
        black: "#000",
        white: "#fff",
      },
      grey: {
        "200": "#f5f6fa",
        "300": "#f2f2f2",
        "400": "#e4e4e4",
        "500": "#C6C7CA",
        "600": "#b9babf",
        "700": "#afafaf",
        "800": "#707070",
        "900": "#191919",
      },
    },
    colors: {
      green: "#6eb072",
      orange: "#ffa000",
      red: "#f65c5c",
      redDark: "#e35454",
      darkGrey: "#25263e",
      yellow: "#ebe30e",
    },
    zIndex: {},
    overrides: {
      MuiInputBase: {
        root: {
          minHeight: 40,
        },
      },
    },
    ...options,
  });
}

const theme = createAppTheme({});

export default theme;
