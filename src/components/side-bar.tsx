import React from "react";
import { Button, Drawer } from "@material-ui/core";

export const SideBar = ({
  open,
  children,
  onClose,
}: {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const width = 300;
  return (
    <Drawer
      PaperProps={{ style: { top: "unset" } }}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <div style={{ width }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose}>Close</Button>
        </div>
        {children}
      </div>
    </Drawer>
  );
};
