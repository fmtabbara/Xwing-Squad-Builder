import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontFamily: "'Kanit', consolas",
  },
});

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);