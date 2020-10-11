import React, { useContext, useEffect, useState } from "react"
import { ListItem, ListItemText, List, ListItemIcon } from "@material-ui/core"
import { AppContext, EnumFactionXWS, TShip } from "../../../context"
import { XIcon } from "../../../components/Icon"

export const ShipList = ({
  faction,
  onShowList,
}: {
  faction: EnumFactionXWS
  onShowList?: () => void
}) => {
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
        style={{
          maxHeight: 700,
          overflowX: "hidden",
          border: "1px solid #eee",
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
              <XIcon type="ship" icon={ship.xws} size="lg" color="black" />
            </ListItemIcon>
            <ListItemText style={{ color: "black" }}>
              {ship.name.toUpperCase()}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    )
  }

  return <div />
}
