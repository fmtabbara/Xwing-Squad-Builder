import React, { useContext, useState } from "react";
import {
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Grid,
  Theme,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { TextWithButton } from "../../../components/text-with-button";
import { UpdateText } from "../../../components/update-text";
import { AppContext } from "../../../context";
import { PilotCard } from "./pilot-card";

const useBuilderCardStyle = makeStyles((theme: Theme) => ({
  root: {
    maxHeight: 700,
    overflow: "auto",
  },
  header: { padding: 0, background: theme.palette.grey[200] },
}));

export const BuilderCard = () => {
  const { squad } = useContext(AppContext);
  const classes = useBuilderCardStyle();
  return (
    <Card variant="outlined">
      <CardHeader
        className={classes.header}
        title={
          <BuilderCardHeader
            squadPoints={squad
              .map((s) => s.cost || 0)
              .reduce((a, c) => a + c, 0)}
          />
        }
      />
      <CardContent className={classes.root}>
        <Grid container direction="column" spacing={2}>
          {squad.map((s) => (
            <Grid item>
              <PilotCard pilot={s} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const BuilderCardHeader = ({ squadPoints }: { squadPoints: number }) => {
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
        <span
          style={{
            fontWeight: 700,
            color: squadPoints >= total ? "red" : undefined,
          }}
        >
          {squadPoints}/{total}
        </span>
      </Typography>
    </div>
  );
};
