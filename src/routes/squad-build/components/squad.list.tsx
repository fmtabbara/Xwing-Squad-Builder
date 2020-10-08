import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { PilotCard } from "./pilot-card";
import { AppContext, TPilot } from "../../../context";

export const SquadList = ({ squad }: { squad: TPilot[] }) => {
  const { removeSquadPilot } = useContext(AppContext);
  return (
    <Grid container spacing={2}>
      {squad.map((s) => (
        <Grid item sm={12}>
          <PilotCard pilot={s} onRemovePilot={removeSquadPilot} />
        </Grid>
      ))}
    </Grid>
  );
};
