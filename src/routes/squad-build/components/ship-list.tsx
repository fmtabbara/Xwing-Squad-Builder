import React, { useContext, useEffect, useState } from "react";
import { ListItem, ListItemText, List, ListItemIcon } from "@material-ui/core";
import { AppContext, EnumFactionXWS, TShip } from "../../../context";
import { XIcon } from "../../../components/Icon";

export const ShipList = ({ faction }: { faction: EnumFactionXWS }) => {
  const [ships, setShips] = useState<TShip[]>([]);
  const [shipsLoading, setShipsLoading] = useState(true);

  const { manifestUrls, showPilotsList } = useContext(AppContext);

  const pilots = manifestUrls.pilots.find((u: any) => u.faction === faction);

  useEffect(() => {
    const promises = pilots.ships.map((s: string) => fetch(s));

    Promise.all(promises).then((rs: any) => {
      const data = rs.map((r: any) => r.json().then((r: any) => r));
      Promise.all(data).then((d: any) => {
        setShips(d);
        setShipsLoading(false);
      });
    });
  }, [pilots]);

  if (shipsLoading) {
    return <div>Loading</div>;
  }

  if (ships.length > 0) {
    return (
      <List
        style={{
          background: "#123456",
          borderTopLeftRadius: 8,
          WebkitBorderBottomLeftRadius: 8,
          maxHeight: 700,
          overflow: "auto",
        }}
        dense
      >
        {ships.map((ship) => (
          <ListItem
            key={ship.name}
            button
            onClick={() => showPilotsList(ship)}
            style={{ color: "white", margin: 8 }}
          >
            <ListItemIcon>
              <XIcon type="ship" icon={ship.xws} size="md" color="white" />
            </ListItemIcon>
            <ListItemText>{ship.name.toUpperCase()}</ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }

  return <div />;
};
