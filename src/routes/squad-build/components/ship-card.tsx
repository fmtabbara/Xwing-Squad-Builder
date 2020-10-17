import React, { useContext } from "react"

import { AppContext, TShip } from "../../../context"
import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { XIcon } from "../../../components/Icon"
import { AbilityIconMap } from "../../../utils"
import { ShipStats } from "../../../components/ship-stats"

const useCardStyle = makeStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}))

export const ShipCard = ({ ship }: { ship: TShip }) => {
  const classes = useCardStyle()

  const { showPilotsList } = useContext(AppContext)
  return (
    <Card
      variant="outlined"
      className={classes.root}
      onClick={() => {
        showPilotsList(ship)
      }}
    >
      <CardHeader
        title={ship.name}
        titleTypographyProps={{
          variant: "h6",
          style: {
            fontWeight: 700,
            textTransform: "uppercase",
          },
        }}
      />
      <CardContent>
        <div>
          <XIcon type="ship" icon={ship.xws} size="lg" />
        </div>
        <div>
          <Typography variant="subtitle1">
            {ship.pilots[0].shipAbility?.name}
          </Typography>
          {ship.pilots[0].shipAbility && (
            <Typography variant="caption">
              {AbilityIconMap(ship.pilots[0].shipAbility?.text)}
            </Typography>
          )}
        </div>
        <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}>
          {ship.actions.map((a) => (
            <XIcon type="font" icon={a.type} />
          ))}
        </div>
        <ShipStats stats={ship.stats} />
      </CardContent>
    </Card>
  )
}
