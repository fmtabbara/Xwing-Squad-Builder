import React, { useContext, useState } from "react"
import { Redirect, useLocation } from "react-router-dom"
import { Button, Grid } from "@material-ui/core"
import { ShipList } from "./components/ship-list"
import { Page } from "../../components/page"
import { AppContext } from "../../context"
import { BuilderCard } from "./components/builder-card"
import { PilotList } from "./components/pilot-list"
import { SideBar } from "../../components/side-bar"
import { useIsMobile } from "../../hooks/useIsMobile"

export const SquadBuild = () => {
  const { faction, ship, closePilotsList } = useContext(AppContext)

  const location = useLocation()
  const isMobile = useIsMobile()

  const [showSideBar, setShowSideBar] = useState(false)

  const handleCloseSideBar = () => setShowSideBar(false)

  if (!faction && location.pathname !== "/faction-select") {
    return <Redirect to="/faction-select" />
  }

  if (faction) {
    return (
      <Page>
        <PilotList
          open={ship ? true : false}
          ship={ship}
          onAdd={() => {}}
          onClose={closePilotsList}
        />
        <Grid container wrap="nowrap" spacing={2}>
          {isMobile ? (
            <SideBar
              open={showSideBar}
              onClose={handleCloseSideBar}
              onOpen={() => setShowSideBar(true)}
            >
              {
                <ShipList
                  faction={faction.xws}
                  onShowList={handleCloseSideBar}
                />
              }
            </SideBar>
          ) : (
            <Grid item style={{ width: 275, minWidth: 275 }}>
              {<ShipList faction={faction.xws} />}
            </Grid>
          )}

          <Grid item style={{ width: "100%" }}>
            <>
              {isMobile && (
                <Button onClick={() => setShowSideBar(true)}>Ships</Button>
              )}
              <BuilderCard />
            </>
          </Grid>
        </Grid>
      </Page>
    )
  }
}
