import React, { useContext, useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { TextWithButton } from "../../../components/text-with-button";
import { UpdateText } from "../../../components/update-text";
import { AppContext } from "../../../context";
import { FactionIcon } from "../../../components/faction-icon";

export const BuilderCard = () => {
  const points = 0;
  const total = 200;
  const [squadName, setSquadName] = useState("Squad Name");
  const [showSquadNameInput, setShowSquadNameInput] = useState(false);

  const { faction } = useContext(AppContext);

  return (
    <>
      <TextWithButton>
        {faction?.icon && <FactionIcon icon={faction.icon} xws={faction.xws} />}
        <Typography
          style={{ textTransform: "uppercase", fontWeight: 700 }}
          variant="h6"
        >
          {faction?.name}
        </Typography>
      </TextWithButton>
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
            {squadName?.toUpperCase()}
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
