import React from "react";
import "../assets/xwing-miniatures.css";

export const Icon = ({
  type,
  icon,
  size,
  color,
  style = {},
}: {
  type: "ship" | "font";
  icon: string;
  size?: "md" | "lg";
  color?: string;
  style?: {};
}) => {
  const iconSize = size === "md" ? "3.5em" : size === "lg" ? "5em" : "1.5em";
  return (
    <i
      style={{ ...style, fontSize: iconSize, color }}
      className={`xwing-miniatures-${type} xwing-miniatures-${type}-${icon}`}
    ></i>
  );
};
