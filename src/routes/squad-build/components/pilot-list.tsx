import React, { useContext } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import { TransitionProps } from "@material-ui/core/transitions"
import { AppContext, TPilot, TShip } from "../../../context"
import { PilotCard } from "./pilot-card"
import {
  Button,
  DialogActions,
  Grid,
  Theme,
  Typography,
} from "@material-ui/core"
import { XIcon } from "../../../components/Icon"
import { makeStyles } from "@material-ui/styles"
import { useIsMobile } from "../../../hooks/useIsMobile"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />
})

const useDialogStyles = makeStyles((theme: Theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 3),
  },
}))

export const PilotList = ({
  ship,
  open,
  closeShipList,
}: {
  ship: TShip | undefined
  open: boolean
  closeShipList: () => void
}) => {
  const classes = useDialogStyles()
  const isMobile = useIsMobile()

  const { addSquadPilot, closePilotsList } = useContext(AppContext)

  const onAddPilot = (ship: { xws: string; dial: string[] }) => (
    pilot: TPilot
  ) => {
    addSquadPilot(pilot, ship)
    closeShipList()
  }
  const partialAddPilot = ship
    ? onAddPilot({ xws: ship.xws, dial: ship.dial })
    : undefined

  return (
    <Dialog
      open={open}
      onClose={closePilotsList}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
    >
      <DialogTitle disableTypography className={classes.title}>
        <Typography
          style={{
            fontWeight: 700,
            textTransform: "uppercase",
            marginRight: 8,
          }}
        >
          {ship?.name}
        </Typography>
        <XIcon type="ship" icon={ship?.xws || ""} size="lg" />
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} direction="column">
          {ship?.pilots.map((p) => (
            <Grid item xs={12}>
              <PilotCard pilot={p} onAddPilot={partialAddPilot} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={closePilotsList}>BACK</Button>
        <Button
          onClick={() => {
            closePilotsList()
            closeShipList()
          }}
          variant="text"
        >
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  )
}
