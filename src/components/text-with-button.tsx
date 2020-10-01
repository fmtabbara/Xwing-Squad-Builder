import React from "react";

export const TextWithButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
  );
};
