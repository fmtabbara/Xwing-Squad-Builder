import React from "react"
import { Button, SwipeableDrawer, Theme } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"

export const SideBar = ({
  open,
  children,
  onClose,
}: {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}) => {
  const width = 300
  const theme: Theme = useTheme()
  return (
    <SwipeableDrawer
      ModalProps={{
        keepMounted: true,
      }}
      onOpen={() => {}}
      disableSwipeToOpen
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <div style={{ width }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            background: theme.palette.grey[200],
            borderBottom: `1px solid ${theme.palette.grey[300]}`,
          }}
        >
          <Button onClick={onClose}>Close</Button>
        </div>
        {children}
      </div>
    </SwipeableDrawer>
  )
}
