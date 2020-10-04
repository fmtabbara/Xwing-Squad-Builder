import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Page } from "../../components/page";
import { AppContext } from "../../context";
import { BuilderCard } from "./components/builder-card";
import { ShipList } from "./components/ship-list";
import { TextWithButton } from "../../components/text-with-button";
import { FactionIcon } from "../../components/faction-icon";
import { Redirect, useLocation } from "react-router-dom";
import { AddPilotDialog } from "../../components/AddPilot";

export const SquadBuild = () => {
  const { faction, selectedShip, handleCloseAddPilotDialog } = useContext(
    AppContext
  );

  const location = useLocation();

  if (!faction && location.pathname !== "/faction-select") {
    return <Redirect to="/faction-select" />;
  }

  if (faction) {
    return (
      <Page>
        <AddPilotDialog
          open={selectedShip ? true : false}
          selectedShip={selectedShip}
          onAdd={() => {}}
          onClose={handleCloseAddPilotDialog}
        />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item container xs={2}>
            <Grid item>
              <TextWithButton>
                <FactionIcon icon={faction.icon} xws={faction.xws} />
                <Typography
                  variant="body1"
                  style={{ width: 200, textAlign: "left", fontWeight: 700 }}
                >
                  {faction.name.toUpperCase()}
                </Typography>
              </TextWithButton>
            </Grid>
            <Grid item>{faction && <ShipList faction={faction.xws} />}</Grid>
          </Grid>
          <Grid item xs={10} style={{ marginTop: 56 }}>
            <BuilderCard />
          </Grid>
        </Grid>
      </Page>
    );
  }
};
