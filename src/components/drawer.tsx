import React from "react";
import { Drawer } from "@material-ui/core";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const width = 250;
  return (
    <Drawer
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      anchor="left"
      open={true}
      onClose={() => {}}
    >
      <div style={{ width }}>{children}</div>
    </Drawer>
  );
};
