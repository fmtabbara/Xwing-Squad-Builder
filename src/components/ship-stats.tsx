import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import React from "react"
import { EnumShipStatsTypes, TShip } from "../context"
import { XIcon } from "./Icon"

export const ShipStats = ({ stats }: { stats: TShip["stats"] }) => {
  const theme: Theme = useTheme()

  const colorMap: any = {
    [EnumShipStatsTypes.agility]: theme.palette.success.light,
    [EnumShipStatsTypes.attack]: theme.palette.error.main,
    [EnumShipStatsTypes.hull]: "#d4d465",
    [EnumShipStatsTypes.shields]: theme.palette.info.main,
  }

  return (
    <List dense disablePadding style={{ display: "flex" }}>
      {stats.map((a) => (
        <ListItem style={{ padding: 0, margin: theme.spacing(0, 0.5) }}>
          <ListItemIcon style={{ margin: theme.spacing(0, 0.5), minWidth: 0 }}>
            <XIcon
              type="font"
              icon={`${a.arc ? a.arc : a.type}`}
              color={colorMap[a.type]}
            />
          </ListItemIcon>
          <ListItemText style={{ color: colorMap[a.type] }}>
            {a.value}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}
