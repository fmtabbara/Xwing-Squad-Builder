import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import CssBaseLine from "@material-ui/core/CssBaseline"
import { Theme } from "./theme"
import { FactionSelect } from "./routes/faction-select"
import { SquadBuild } from "./routes/squad-build"
import { AppContextProvider } from "./context"
import "./App.css"

function App() {
  return (
    <>
      <CssBaseLine />
      <AppContextProvider>
        <Theme>
          <Switch>
            <Route path="/faction-select">
              <FactionSelect />
            </Route>
            <Route path="/squad-build">
              <SquadBuild />
            </Route>
            <Route path="/">
              <Redirect to="/faction-select" />
            </Route>
          </Switch>
        </Theme>
      </AppContextProvider>
    </>
  )
}

export default App
