import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import stringReplace from "react-string-replace";
import { AppContext, TPilot } from "../../../context";
import { XIcon } from "../../../components/Icon";

const useCardStyle = makeStyles((theme) => ({
  headerStyle: {
    alignItems: "flex-start",
  },
  initiativeStyle: {
    color: "orange",
    fontWeight: 900,
  },
  costStyle: {
    fontWeight: 900,
    marginLeft: theme.spacing(1),
  },
}));

const ability = (ability: string) =>
  stringReplace(ability, /\[(.*?)\]/, (match, i) => (
    <XIcon type="font" icon={`token-${match.toLowerCase()}`} />
  ));

export const PilotCard = ({
  pilot,
  onAddPilot,
}: {
  pilot: TPilot;
  onAddPilot?: (pilot: TPilot) => void;
}) => {
  const classes = useCardStyle();

  return (
    <Card variant="outlined" onClick={() => onAddPilot?.(pilot)}>
      <CardHeader
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            {pilot.name}
            {pilot.cost && (
              <Typography
                color="primary"
                variant="body1"
                className={classes.costStyle}
              >
                {`(${pilot.cost})`}
              </Typography>
            )}
          </div>
        }
        className={classes.headerStyle}
        avatar={
          <Typography variant="h6" className={classes.initiativeStyle}>
            {pilot.initiative}
          </Typography>
        }
        titleTypographyProps={{
          variant: "h6",
          style: {
            fontWeight: 700,
            textTransform: "uppercase",
          },
        }}
        subheader={pilot.caption}
      />
      <CardContent>
        <Typography variant="caption">{ability(pilot.ability)}</Typography>
      </CardContent>
    </Card>
  );
};
