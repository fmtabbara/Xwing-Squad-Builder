import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { TShip } from "../context";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const AddPilotDialog = ({
  selectedShip,
  open,
  onAdd,
  onClose,
}: {
  selectedShip: TShip;
  open: boolean;
  onAdd: () => void;
  onClose: () => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {selectedShip?.name}
      </DialogTitle>
      <DialogContent>
        <List>
          {selectedShip?.pilots.map((p) => (
            <ListItem button key={p.name}>
              {console.log(p)}
              <ListItemText>{p.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};
