import React, { useContext, useState } from "react";
import {
  Typography,
  IconButton,
  OutlinedInput,
  ClickAwayListener,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import { AppContext } from "../../../context";

export const BuilderCard = () => {
  const points = 0;
  const total = 200;
  const [squadName, setSquadName] = useState("Squad Name");
  const [showSquadNameInput, setShowSquadNameInput] = useState(false);

  const { faction } = useContext(AppContext);

  return (
    <>
      <Typography variant="h3">{faction?.name}</Typography>
      {showSquadNameInput ? (
        <UpdateText
          text={squadName}
          onClose={(currentSquadName) => {
            setSquadName(currentSquadName);
            setShowSquadNameInput(false);
          }}
          onUpdate={(updatedValue) => {
            setSquadName(updatedValue);
            setShowSquadNameInput(false);
          }}
        />
      ) : (
        <TextWithButton>
          <Typography variant="h4" style={{ margin: 16, marginRight: 4 }}>
            {squadName}
          </Typography>
          <IconButton onClick={() => setShowSquadNameInput(true)}>
            <EditIcon />
          </IconButton>
        </TextWithButton>
      )}

      <Typography variant="body1" color="primary" style={{ margin: 16 }}>
        Squad points{" "}
        <span style={{ fontWeight: 700 }}>
          {points}/{total}
        </span>
      </Typography>
    </>
  );
};

const TextWithButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
  );
};

const UpdateText = ({
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
