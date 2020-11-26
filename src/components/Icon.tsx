import React from "react"
import "../assets/icons/xwing-miniatures.css"

export const XIcon = ({
  type,
  icon,
  size,
  color,
  style = {},
}: {
  type: "ship" | "font"
  icon: string
  size?: "md" | "lg"
  color?: string
  style?: {}
}) => {
  const iconSize = size === "md" ? "2.5em" : size === "lg" ? "3em" : "1.25em"
  return (
    <i
      style={{ ...style, fontSize: iconSize, color }}
      className={`xwing-miniatures-${type} xwing-miniatures-${type}-${icon
        .split(" ")
        .join("")
        .toLowerCase()}`}
    ></i>
  )
}
