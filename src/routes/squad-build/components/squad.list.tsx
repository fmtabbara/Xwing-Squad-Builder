import React, { useContext } from "react"
import { Grid } from "@material-ui/core"
import { PilotCard } from "./pilot-card"
import { AppContext } from "../../../context"
import { TPilot } from "../../../types"

export const SquadList = ({ squad }: { squad: TPilot[] }) => {
  const { removeSquadPilot } = useContext(AppContext)
  return (
    <Grid container spacing={2}>
      {squad.map((s, index) => (
        <Grid item sm={12} key={index}>
          <PilotCard pilot={s} onRemovePilot={removeSquadPilot} />
        </Grid>
      ))}
    </Grid>
  )
}
