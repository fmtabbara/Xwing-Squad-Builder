import React from "react";
import stringReplace from "react-string-replace";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { TPilot } from "../../../context";
import { XIcon } from "../../../components/Icon";
import CloseIcon from "@material-ui/icons/Close";

const useCardStyle = makeStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
    },
  },
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
  stringReplace(ability, /\[(.*?)\]/, (match) => (
    <XIcon type="font" icon={`token-${match.toLowerCase()}`} />
  ));

export const PilotCard = ({
  pilot,
  onAddPilot,
  onRemovePilot,
}: {
  pilot: TPilot;
  onAddPilot?: (pilot: TPilot) => void;
  onRemovePilot?: (pilot: string) => void;
}) => {
  const classes = useCardStyle();

  return (
    <Card
      variant="outlined"
      onClick={() => onAddPilot?.(pilot)}
      className={clsx({ [classes.root]: onAddPilot })}
    >
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
        action={
          onRemovePilot && (
            <IconButton onClick={() => onRemovePilot(pilot.name)}>
              <CloseIcon />
            </IconButton>
          )
        }
      />
      <CardContent>
        {pilot.shipXWS && (
          <div>
            <XIcon type="ship" icon={pilot.shipXWS} size="lg" />
          </div>
        )}
        <Typography variant="subtitle1">{ability(pilot.ability)}</Typography>
        <div>
          {pilot.slots?.map((s) => (
            <XIcon type="font" icon={s} size="md" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
