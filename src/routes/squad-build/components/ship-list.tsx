import React, { useState } from "react";
import { ListItem, ListItemText, List, ListItemIcon } from "@material-ui/core";

type TShip = {
  icon: string;
  name: string;
};

export const ShipList = () => {
  const [ships, setShips] = useState<TShip[]>([]);

  return (
    <List style={{ background: "#123456" }}>
      {ships.map((ship) => (
        <ListItem
          button
          onClick={() => console.log(ship)}
          style={{ color: "white", margin: 8 }}
        >
          <ListItemIcon>
            <img src={ship.icon} alt="ship-icon" style={{ width: 48 }} />
          </ListItemIcon>
          <ListItemText>{ship.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
