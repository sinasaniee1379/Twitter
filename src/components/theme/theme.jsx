import { createMuiTheme } from "@material-ui/core";
import tinycolor from "tinycolor2";

const colorPrimery = "#5ea9dd";
const colorGray = "#e0e0e0";
const Theme = createMuiTheme({
  color: {
    gray: {
      main: colorGray,
    },
  },
  palette: {
    primary: {
      main: colorPrimery,
      light: tinycolor(colorPrimery).lighten().toHexString(),
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "Shabnam !important",
      },
    },
    MuiTab: {
      wrapper: {
        fontFamily: "Shabnam !important",
      },
    },
    MuiButton: {
      label: {
        color: "#fff",
        fontFamily: "Shabnam !important",
      },
    },
  },
});

export default Theme;
