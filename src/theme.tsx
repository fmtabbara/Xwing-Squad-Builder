import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme();

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
