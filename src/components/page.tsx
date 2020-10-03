import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { Logo } from "./logo";

const useStyles = makeStyles((theme) => ({
  page: {
    height: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
}));

export const Page = ({ children }: { children: any }) => {
  const classes = useStyles();
  return (
    <Container className={classes.page}>
      <Grid container direction="column" spacing={1}>
        <Grid item style={{ margin: 16 }}>
          <Logo />
        </Grid>
        <Grid>
          <Container className={classes.content}>{children}</Container>
        </Grid>
      </Grid>
    </Container>
  );
};
