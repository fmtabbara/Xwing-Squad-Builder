import React from "react"
import { useTheme } from "@material-ui/styles"
import { Theme, Typography } from "@material-ui/core"
import { XIcon } from "./Icon"

const maneuverMap: any = {
  F: "straight",
  B: "bankleft",
  N: "bankright",
  T: "turnleft",
  Y: "turnright",
  K: "kturn",
  L: "sloopleft",
  P: "sloopright",
  E: "trollleft",
  R: "trollright",
  S: "reversestraight",
  A: "reversebankleft",
  D: "reversebankright",
  O: "stop",
}

export const Manuevers = ({ dial }: { dial: string[] }) => {
  const theme: Theme = useTheme()

  const translateDials: any = {}

  dial.forEach((d) =>
    translateDials[d[0]]
      ? translateDials[d[0]].push(`${d[1]}${d[2]}`)
      : (translateDials[d[0]] = [`${d[1]}${d[2]}`])
  )

  const colorMap: any = {
    B: theme.palette.info.light,
    R: theme.palette.error.main,
    W: "#fff",
  }

  return (
    <div>
      {Object.keys(translateDials).map((k: string) => {
        return (
          <div style={{ display: "flex" }}>
            <Typography>{k}</Typography>
            {translateDials[k].map((d: string) => {
              return (
                <XIcon
                  type="font"
                  icon={maneuverMap[d[0]]}
                  color={colorMap[d[1]]}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
