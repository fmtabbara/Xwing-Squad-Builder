import React from "react"
import { useTheme } from "@material-ui/styles"
import { Theme } from "@material-ui/core"
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

  const colourMap: any = {
    B: theme.palette.info.light,
    R: theme.palette.error.main,
    W: "#fff",
  }

  return (
    <div>
      {dial.map((m) => (
        <>
          <XIcon type="font" icon={maneuverMap[m[1]]} color={colourMap[m[2]]} />
        </>
      ))}
    </div>
  )
}
