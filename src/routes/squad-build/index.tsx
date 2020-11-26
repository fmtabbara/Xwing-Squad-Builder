import React, { useContext, useState } from "react"
import { Redirect, useHistory, useLocation } from "react-router-dom"
import { useTheme } from "@material-ui/styles"
import { Button, Grid, Theme } from "@material-ui/core"
import { ShipList } from "./components/ship-list"
import { Page } from "../../components/page"
import { BuilderCard } from "./components/builder-card"
import { PilotList } from "./components/pilot-list"
import { AppContext } from "../../context"
import { UpgradeList } from "../../components/upgrades"

export const SquadBuild = () => {
  const { faction, ship, resetSquad, upgrade } = useContext(AppContext)

  const location = useLocation()
  const history = useHistory()

  const theme: Theme = useTheme()

  const [displayShipList, setDisplayShipList] = useState(false)

  if (!faction && location.pathname !== "/faction-select") {
    return <Redirect to="/faction-select" />
  }

  if (faction) {
    return (
      <Page>
        <ShipList
          open={displayShipList}
          onClose={() => setDisplayShipList(false)}
        />
        <PilotList
          open={ship ? true : false}
          ship={ship}
          closeShipList={() => setDisplayShipList(false)}
        />
        {upgrade && (
          <UpgradeList open={upgrade ? true : false} upgrade={upgrade} />
        )}
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          wrap="nowrap"
          style={{ height: "100%" }}
        >
          <Grid item>
            <div style={{ display: "flex", marginBottom: theme.spacing(0.5) }}>
              <Button
                onClick={() => {
                  resetSquad()
                  history.push("/faction-select")
                }}
              >
                Factions
              </Button>
              <Button onClick={() => setDisplayShipList(true)}>Ships</Button>
            </div>
          </Grid>
          <BuilderCard />
        </Grid>
      </Page>
    )
  }
}
