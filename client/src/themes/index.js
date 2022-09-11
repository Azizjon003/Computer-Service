import PropsTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

//
import breakpoints from "./breakpoints";

ThemeProvider.propTypes = {
  children: PropsTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: { main: "#f3f3f3" },
    },
    breakpoints,
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
