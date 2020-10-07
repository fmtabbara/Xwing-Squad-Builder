import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { TShip } from "../../../context";
import { PilotCard } from "./pilot-card";
import { Button, DialogActions, Grid } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const PilotList = ({
  ship,
  open,
  onAdd,
  onClose,
}: {
  ship: TShip | undefined;
  open: boolean;
  onAdd: () => void;
  onClose: () => void;
}) => {
  console.log(ship);
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
      <DialogTitle id="alert-dialog-slide-title">{ship?.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} direction="column">
          {ship?.pilots.map((p) => (
            <Grid item xs={12}>
              <PilotCard pilot={p} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="text">
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};
