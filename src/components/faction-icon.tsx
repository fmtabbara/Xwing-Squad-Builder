import React from "react";
import { EnumFactionXWS } from "../context";

const withBlackBg = [
  EnumFactionXWS.scumandvillainy,
  EnumFactionXWS.galacticempire,
  EnumFactionXWS.galacticrepublic,
];

export const FactionIcon = ({
  icon,
  xws,
}: {
  icon: string;
  xws: EnumFactionXWS;
}) => {
  const blackBg = withBlackBg.includes(xws);
  return (
    <img
      src={icon}
      alt="faction-icon"
      style={{
        width: 35,
        background: blackBg ? "black" : "#ddd",
        margin: 10,
        padding: 5,
        borderRadius: 30,
      }}
    />
  );
};
