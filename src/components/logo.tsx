import React from "react"
import logo from "../assets/SWZ01_logo.png"
import { Typography, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useTheme } from "@material-ui/styles"

const containerStyle = {
  width: 125,
}

const logoStyle = {
  width: "100%",
}

const useStyles = makeStyles({
  textStyle: {
    textAlign: "right",
    marginTop: -10,
    textTransform: "uppercase",
    fontSize: 9,
  },
})

export const Logo = ({ currentTheme }: { currentTheme: string }) => {
  const classes = useStyles()
  const theme: Theme = useTheme()
  return (
    <div style={containerStyle}>
      <img src={logo} alt="main-logo" style={logoStyle} />
      <Typography
        className={classes.textStyle}
        style={{
          color: currentTheme === "light" ? theme.palette.grey[900] : "white",
        }}
      >
        Second Edition
      </Typography>
    </div>
  )
}
