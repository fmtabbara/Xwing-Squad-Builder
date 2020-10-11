import React, { useContext, useEffect, useState } from "react"
import {
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  makeStyles,
  Theme,
} from "@material-ui/core"
import { AppContext, EnumFactionXWS, TShip } from "../../../context"
import { XIcon } from "../../../components/Icon"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

export const ShipList = ({
  faction,
  onShowList,
}: {
  faction: EnumFactionXWS
  onShowList?: () => void
}) => {
  const classes = useStyles()

  const [ships, setShips] = useState<TShip[]>([])
  const [shipsLoading, setShipsLoading] = useState(true)

  const { manifestUrls, showPilotsList } = useContext(AppContext)

  const pilots = manifestUrls.pilots.find((u: any) => u.faction === faction)

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

  if (shipsLoading) {
    return <div>Loading</div>
  }

  if (ships.length > 0) {
    return (
      <List
        className={classes.root}
        style={{
          maxHeight: 700,
          overflowX: "hidden",
        }}
        dense
      >
        {ships.map((ship) => (
          <ListItem
            key={ship.name}
            button
            onClick={() => {
              showPilotsList(ship)
              onShowList?.()
            }}
          >
            <ListItemIcon style={{ marginRight: 8 }}>
              <XIcon type="ship" icon={ship.xws} size="lg" />
            </ListItemIcon>
            <ListItemText primary={ship.name.toUpperCase()} />
          </ListItem>
        ))}
      </List>
    )
  }

  return <div />
}
