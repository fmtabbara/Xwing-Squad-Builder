import React from "react";
import { Card, CardHeader, makeStyles, Typography } from "@material-ui/core";

import { TPilot } from "../../../context";

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

export const PilotCard = ({ pilot }: { pilot: TPilot }) => {
  const classes = useCardStyle();

  return (
    <Card variant="outlined">
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
    </Card>
  );
};
