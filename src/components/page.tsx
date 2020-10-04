import React from "react";
import { Grid } from "@material-ui/core";
import { Logo } from "./logo";

export const Page = ({ children }: { children: any }) => {
  return (
    <Grid container direction="column">
      <Grid item style={{ margin: 16 }}>
        <Logo />
      </Grid>
      <Grid>
        <div style={{ padding: 8 }}>{children}</div>
      </Grid>
    </Grid>
  );
};
