import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./routes/home";
import { FactionSelect } from "./routes/faction-select";
import CssBaseLine from "@material-ui/core/CssBaseline";
import "./App.css";
import { SquadBuild } from "./routes/squad-build";
import { AppContextProvider } from "./context";

function App() {
  return (
    <>
      <CssBaseLine />
      <AppContextProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/faction-select">
              <FactionSelect />
            </Route>
            <Route path="/squad-build">
              <SquadBuild />
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </>
  );
}

export default App;
