import React, { useContext } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import { AppContext } from "../context"
import Slide from "@material-ui/core/Slide"
import { TransitionProps } from "@material-ui/core/transitions"
import { useRequest } from "../hooks/useRequest"
import { XIcon } from "./Icon"
import { useIsMobile } from "../hooks/useIsMobile"
import { TPilot, TUpgrade } from "../types"
import { UpgradeCard } from "../routes/squad-build/components/upgrade-card"

export const Upgrades = ({ upgrades }: { upgrades: TPilot["slots"] }) => {
  const { setUpgrade } = useContext(AppContext)
  return (
    <>
      {upgrades?.map((u, index) => (
        <div onClick={() => setUpgrade(u)} key={index}>
          <XIcon
            type="font"
            icon={u.split(" ").join("").toLowerCase()}
            size="md"
          />
        </div>
      ))}
    </>
  )
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />
})

export const UpgradeList = ({
  open,
  upgrade,
}: {
  open: boolean
  upgrade: string
}) => {
  const { setUpgrade } = useContext(AppContext)

  const { data: upgrades }: { data: TUpgrade[] | undefined } = useRequest(
    `data/upgrades/${upgrade.toLowerCase()}.json`
  )

  const isMobile = useIsMobile()
  return (
    <Dialog
      open={open}
      onClose={() => setUpgrade(undefined)}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="lg"
      fullWidth
      fullScreen={isMobile}
    >
      <DialogTitle>{upgrade}</DialogTitle>
      <DialogContent dividers>
        <List>
          {upgrades?.map((u, index) => (
            <ListItem button onClick={() => console.log(u)} key={index}>
              <UpgradeCard name={u.name} cost={u.cost} />
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <DialogActions>
        <Button variant="text" onClick={() => setUpgrade(undefined)}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  )
}
