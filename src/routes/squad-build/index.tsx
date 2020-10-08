import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Page } from "../../components/page";
import { AppContext } from "../../context";
import { BuilderCard } from "./components/builder-card";
import { ShipList } from "./components/ship-list";
import { TextWithButton } from "../../components/text-with-button";
import { FactionIcon } from "../../components/faction-icon";
import { Redirect, useLocation } from "react-router-dom";
import { PilotList } from "./components/pilot-list";
import { SwipeableTemporaryDrawer } from "../../components/side-bar";

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
        <TextWithButton>
          <FactionIcon icon={faction.icon} xws={faction.xws} />
          <Typography
            variant="body1"
            style={{ width: 200, textAlign: "left", fontWeight: 700 }}
          >
            {faction.name.toUpperCase()}
          </Typography>
        </TextWithButton>
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
