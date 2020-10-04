import React, { useState } from "react";
import {
  ClickAwayListener,
  IconButton,
  OutlinedInput,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

export const UpdateText = ({
  text,
  onClose,
  onUpdate,
}: {
  text: string;
  onClose: (currentText: string) => void;
  onUpdate: (updatedText: string) => void;
}) => {
  const [value, setValue] = useState(text);

  return (
    <ClickAwayListener onClickAway={() => onClose(text)}>
      <OutlinedInput
        style={{ background: "white" }}
        fullWidth
        autoFocus
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        onKeyDown={({ key }) => {
          if (key.toLowerCase() === "enter") {
            onUpdate(value);
          }
          if (key.toLowerCase() === "escape") {
            onClose(text);
          }
        }}
        endAdornment={
          <IconButton color="primary" onClick={() => onUpdate(value)}>
            <CheckIcon />
          </IconButton>
        }
      />
    </ClickAwayListener>
  );
};
