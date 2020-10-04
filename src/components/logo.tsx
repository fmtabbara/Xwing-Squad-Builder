import React from "react";
import logo from "../assets/SWZ01_logo.png";
import { Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const containerStyle = {
  width: 125,
};

const logoStyle = {
  width: "100%",
};

const useStyles = makeStyles((theme: Theme) => ({
  textStyle: {
    color: theme.palette.grey[900],
    textAlign: "right",
    marginTop: -10,
    textTransform: "uppercase",
    fontSize: 9,
  },
}));
export const Logo = () => {
  const classes = useStyles();
  return (
    <div style={containerStyle}>
      <img src={logo} alt="main-logo" style={logoStyle} />
      <Typography className={classes.textStyle}>Second Edition</Typography>
    </div>
  );
};
