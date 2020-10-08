import React from "react";
import { Grid } from "@material-ui/core";
import { Logo } from "./logo";

export const Page = ({ children }: { children: any }) => {
  return (
    <Grid container direction="column">
      <Grid item style={{ height: 75, margin: 16, marginBottom: 0 }}>
        <Logo />
      </Grid>
      <Grid item style={{ padding: 8 }}>
        {children}
      </Grid>
    </Grid>
  );
};
