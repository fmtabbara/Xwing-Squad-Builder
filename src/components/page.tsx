import React, { useContext } from "react"
import { Grid, IconButton, Paper } from "@material-ui/core"
import LightMode from "@material-ui/icons/Brightness7"
import DarkMode from "@material-ui/icons/Brightness4"
import { ThemeContext } from "../theme"
import { Logo } from "./logo"

export const Page = ({ children }: { children: any }) => {
  const { changeTheme, currentTheme } = useContext(ThemeContext)
  return (
    <Paper style={{ height: "100%" }}>
      <Grid container direction="column">
        <Grid
          container
          item
          justify="space-between"
          style={{ height: 75, padding: 16 }}
        >
          <Logo />
          <IconButton onClick={changeTheme}>
            {currentTheme === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Grid>
        <Grid item style={{ padding: 8 }}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  )
}
