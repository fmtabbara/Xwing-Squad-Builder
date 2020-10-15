import React, { useContext, useEffect, useState } from "react"

import Slide from "@material-ui/core/Slide"
import { TransitionProps } from "@material-ui/core/transitions"

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Grid,
  Theme,
  Typography,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"
import { AppContext, TShip } from "../../../context"
import { ShipCard } from "./ship-card"

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
    padding: theme.spacing(3),
    fontWeight: 900,
    textTransform: "uppercase",
  },
}))

export const ShipList = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const classes = useDialogStyles()

  const [ships, setShips] = useState<TShip[]>([])
  const [shipsLoading, setShipsLoading] = useState(true)

  const { manifestUrls, faction } = useContext(AppContext)

  const pilots =
    manifestUrls?.pilots.find((u: any) => u.faction === faction?.xws) || []

  useEffect(() => {
    const promises = pilots.ships.map((s: string) =>
      fetch(s, { headers: { Accept: "application/json" } })
    )
    Promise.all(promises).then((rs: any) => {
      const data = rs.map((r: any) => r.json().then((r: any) => r))
      Promise.all(data).then((d: any) => {
        setShips(d)
        setShipsLoading(false)
      })
    })
  }, [pilots])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle className={classes.title}>Select Ship</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} direction="column">
          {ships.map((s) => {
            return (
              <Grid item xs={12}>
                <ShipCard ship={s} onSelect={onClose} />
              </Grid>
            )
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  )
}
