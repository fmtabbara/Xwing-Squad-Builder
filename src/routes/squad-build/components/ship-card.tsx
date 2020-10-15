import React, { useContext } from "react"

import { AppContext, TShip } from "../../../context"
import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core"
import { XIcon } from "../../../components/Icon"

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
      </CardContent>
    </Card>
  )
}
