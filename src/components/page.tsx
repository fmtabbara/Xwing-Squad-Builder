import React, { useContext } from "react"
import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core"
import LightMode from "@material-ui/icons/Brightness7"
import DarkMode from "@material-ui/icons/Brightness4"
import { ThemeContext } from "../theme"
import { Logo } from "./logo"

const navHeight = 75

const usePageStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
    display: "grid",
    gridTemplateAreas: `
      "nav"
      "content"
    `,
    gridTemplateRows: `${navHeight}px auto`,
  },
  nav: {
    gridArea: "nav",
  },
  content: {
    gridArea: "content",
    height: `calc(100vh - ${navHeight}px)`,
    overflow: "hidden",
    padding: theme.spacing(2),
  },
}))

export const Page = ({ children }: { children: any }) => {
  const { changeTheme, currentTheme } = useContext(ThemeContext)
  const classes = usePageStyle()
  return (
    <Paper square>
      <div className={classes.root}>
        <div className={classes.nav}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ padding: 16 }}
          >
            <Grid item>
              <Logo currentTheme={currentTheme} />
            </Grid>
            <Grid item>
              <IconButton onClick={changeTheme}>
                {currentTheme === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </Paper>
  )
}
