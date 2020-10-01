import { Grid, Typography } from "@material-ui/core";
import React from "react";

import { Page } from "../../components/page";
import { BuilderCard } from "./components/builder-card";
import { ShipList } from "./components/ship-list";

export const SquadBuild = () => {
  return (
    <Page>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item container spacing={2} wrap="nowrap">
          <Grid item>
            <ShipList />
          </Grid>
          <Grid item xs={8}>
            <BuilderCard />
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};
