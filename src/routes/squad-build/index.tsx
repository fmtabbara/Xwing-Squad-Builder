import React, { useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { ShipList } from "./components/ship-list";
import { Page } from "../../components/page";
import { AppContext } from "../../context";
import { BuilderCard } from "./components/builder-card";
import { PilotList } from "./components/pilot-list";

export const SquadBuild = () => {
  const { faction, ship, closePilotsList } = useContext(AppContext);

  const location = useLocation();

  if (!faction && location.pathname !== "/faction-select") {
    return <Redirect to="/faction-select" />;
  }

  if (faction) {
    return (
      <Page>
        <PilotList
          open={ship ? true : false}
          ship={ship}
          onAdd={() => {}}
          onClose={closePilotsList}
        />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item style={{ width: 325, minWidth: 325 }}>
            {faction && <ShipList faction={faction.xws} />}
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <BuilderCard />
          </Grid>
        </Grid>
      </Page>
    );
  }
};
