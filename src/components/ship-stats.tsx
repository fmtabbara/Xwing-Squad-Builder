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
    [EnumShipStatsTypes.hull]: "yellow",
    [EnumShipStatsTypes.shields]: theme.palette.info.main,
  }

  return (
    <List dense disablePadding>
      {stats.map((a) => (
        <ListItem>
          <ListItemIcon>
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
