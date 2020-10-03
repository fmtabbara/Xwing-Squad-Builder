import React from "react";
import { Route, Switch } from "react-router-dom";
import { FactionSelect } from "./routes/faction-select";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { SquadBuild } from "./routes/squad-build";
import { AppContextProvider } from "./context";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseLine />
      <AppContextProvider>
        <Switch>
          <Route path="/faction-select">
            <FactionSelect />
          </Route>
          <Route path="/squad-build">
            <SquadBuild />
          </Route>
        </Switch>
      </AppContextProvider>
    </>
  );
}

export default App;
