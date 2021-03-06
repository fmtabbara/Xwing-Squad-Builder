import React from "react"
import clsx from "clsx"
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { XIcon } from "../../../components/Icon"
import CloseIcon from "@material-ui/icons/Close"
import { AbilityIconMap } from "../../../utils"
import { Manuevers } from "../../../components/dial-map"
import { Upgrades } from "../../../components/upgrades"
import { TPilot } from "../../../types"

const useCardStyle = makeStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  headerStyle: {
    alignItems: "flex-start",
  },
  initiativeStyle: {
    color: "orange",
    fontWeight: 900,
  },
  costStyle: {
    fontWeight: 900,
    marginLeft: theme.spacing(1),
  },
}))

export const PilotCard = ({
  pilot,
  onAddPilot,
  onRemovePilot,
}: {
  pilot: TPilot
  onAddPilot?: (pilot: TPilot) => void
  onRemovePilot?: (pilot: string) => void
}) => {
  const classes = useCardStyle()

  return (
    <Card
      variant="outlined"
      onClick={() => onAddPilot?.(pilot)}
      className={clsx({ [classes.root]: onAddPilot })}
    >
      <CardHeader
        title={
          <>
            {pilot.name}
            {pilot.cost && (
              <Typography
                color="primary"
                variant="body1"
                component="span"
                className={classes.costStyle}
              >
                {pilot.cost}
              </Typography>
            )}
          </>
        }
        className={classes.headerStyle}
        avatar={
          <Typography variant="h6" className={classes.initiativeStyle}>
            {pilot.initiative}
          </Typography>
        }
        titleTypographyProps={{
          variant: "h6",
          style: {
            fontWeight: 700,
            textTransform: "uppercase",
          },
        }}
        subheader={pilot.caption}
        action={
          onRemovePilot && (
            <IconButton onClick={() => onRemovePilot(pilot.name)}>
              <CloseIcon />
            </IconButton>
          )
        }
      />
      <CardContent>
        {pilot.ship && <XIcon type="ship" icon={pilot.ship.xws} />}
        {pilot.ship && <Manuevers dial={pilot.ship.dial} />}
        <div>
          <Typography variant="subtitle1">{pilot.shipAbility?.name}</Typography>
          <Typography variant="caption">
            {AbilityIconMap(pilot.shipAbility?.text)}
          </Typography>
        </div>
        <div>
          <Typography variant="caption">
            {AbilityIconMap(pilot.ability)}
          </Typography>
        </div>
        <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}>
          <Upgrades upgrades={pilot.slots} />
        </div>
      </CardContent>
    </Card>
  )
}
