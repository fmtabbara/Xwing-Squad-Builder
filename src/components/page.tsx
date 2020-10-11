import React, { useContext } from "react"
import { Grid, Paper } from "@material-ui/core"
import { ThemeContext } from "../theme"
import { Logo } from "./logo"

export const Page = ({ children }: { children: any }) => {
  const { changeTheme } = useContext(ThemeContext)
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
          <div onClick={changeTheme}>Switch</div>
        </Grid>
        <Grid item style={{ padding: 8 }}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  )
}
