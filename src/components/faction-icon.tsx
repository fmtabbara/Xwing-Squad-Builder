import { Typography } from "@material-ui/core"
import React, { useContext } from "react"
import { AppContext } from "../context"
import { EnumFactionXWS } from "../types"
import { TextWithButton } from "./text-with-button"

const withBlackBg = [
  EnumFactionXWS.scumandvillainy,
  EnumFactionXWS.galacticempire,
  EnumFactionXWS.galacticrepublic,
]

export const FactionIcon = ({
  icon,
  xws,
  small,
}: {
  icon: string
  xws: EnumFactionXWS
  small?: boolean
}) => {
  const blackBg = withBlackBg.includes(xws)
  return (
    <img
      src={icon}
      alt="faction-icon"
      style={{
        width: small ? 25 : 35,
        background: blackBg ? "black" : "#ddd",
        marginRight: 8,
        padding: 4,
        borderRadius: 30,
      }}
    />
  )
}

export const FactionLabel = ({ small }: { small?: boolean }) => {
  const { faction } = useContext(AppContext)
  if (faction) {
    return (
      <TextWithButton>
        <FactionIcon icon={faction.icon} xws={faction.xws} small={small} />
        <Typography
          component="div"
          style={{
            fontWeight: small ? 500 : 700,
          }}
        >
          {faction.name.toUpperCase()}
        </Typography>
      </TextWithButton>
    )
  }
  return <></>
}
