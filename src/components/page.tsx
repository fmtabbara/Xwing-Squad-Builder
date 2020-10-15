import React, { useContext } from "react"
import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core"
import LightMode from "@material-ui/icons/Brightness7"
import DarkMode from "@material-ui/icons/Brightness4"
import { ThemeContext } from "../theme"
import { Logo } from "./logo"
import { ShipList } from "../routes/squad-build/components/ship-list"
import clsx from "clsx"

const sidebarWidth = 325
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
  withSideBar: {
    gridTemplateAreas: `
    "nav nav"
    "sidebar content"
  `,
    gridTemplateColumns: `${sidebarWidth}px auto`,
  },
  nav: {
    gridArea: "nav",
  },
  sidebar: {
    gridArea: "sidebar",
    height: `calc(100vh - ${navHeight}px)`,
    overflow: "hidden auto",
  },
  content: {
    gridArea: "content",
    height: `calc(100vh - ${navHeight}px)`,
    overflow: "hidden",
    padding: theme.spacing(2),
  },
}))

export const Page = ({
  children,
  withSideBar,
}: {
  children: any
  withSideBar?: boolean
}) => {
  const { changeTheme, currentTheme } = useContext(ThemeContext)
  const classes = usePageStyle()
  return (
    <Paper square>
      <div
        className={clsx(classes.root, { [classes.withSideBar]: withSideBar })}
      >
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
        {withSideBar && (
          <div className={classes.sidebar}>
            <ShipList />
          </div>
        )}
        <div className={classes.content}>{children}</div>
      </div>
    </Paper>
  )
}
