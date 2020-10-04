import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Theme,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { TextWithButton } from "../../../components/text-with-button";
import { UpdateText } from "../../../components/update-text";

const useBuilderCardStyle = makeStyles((theme: Theme) => ({
  header: { padding: 0, background: theme.palette.grey[200] },
}));

export const BuilderCard = () => {
  const classes = useBuilderCardStyle();
  return (
    <Card variant="outlined">
      <CardHeader className={classes.header} title={<BuilderCardHeader />} />
      <CardContent>
        <div>Content goes here</div>
      </CardContent>
    </Card>
  );
};

const BuilderCardHeader = () => {
  const points = 0;
  const total = 200;
  const [squadName, setSquadName] = useState("Squad Name");
  const [showSquadNameInput, setShowSquadNameInput] = useState(false);

  return (
    <div style={{ padding: 16 }}>
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
          <Typography variant="h5">{squadName?.toUpperCase()}</Typography>
          <IconButton onClick={() => setShowSquadNameInput(true)}>
            <EditIcon />
          </IconButton>
        </TextWithButton>
      )}

      <Typography variant="caption" color="primary">
        <span style={{ fontWeight: 700 }}>
          {points}/{total}
        </span>
      </Typography>
    </div>
  );
};
