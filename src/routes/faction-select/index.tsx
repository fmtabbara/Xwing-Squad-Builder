import React, { useContext } from "react"
import { Page } from "../../components/page"
import { Button, Grid, Typography } from "@material-ui/core"
import { useRequest } from "../../hooks/useRequest"
import { AppContext, TFaction } from "../../context"
import { useHistory, useLocation } from "react-router-dom"
import { FactionIcon } from "../../components/faction-icon"

export const FactionSelect = () => {
  const {
    data: factions = [],
    isLoading,
  }: { data: TFaction[] | undefined; isLoading: boolean } = useRequest(
    "data/factions/factions.json"
  )

  const history = useHistory()
  const location = useLocation()

  const { setFaction } = useContext(AppContext)

  const handleSelect = (faction: TFaction) => {
    setFaction(faction)
    history.push(`${location.search}/squad-build`)
  }

  return (
    <Page>
      <Grid
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
        spacing={2}
        style={{ height: "100%", overflow: "auto" }}
      >
        <Grid item>
          <Typography
            variant="h4"
            style={{ textTransform: "uppercase", margin: 36 }}
          >
            Faction Select
          </Typography>
        </Grid>
        {!isLoading &&
          factions.map((f, index: number) => (
            <Grid item key={index}>
              <Faction faction={f} onSelect={handleSelect} />
            </Grid>
          ))}
      </Grid>
    </Page>
  )
}

const Faction = ({
  faction,
  onSelect,
}: {
  faction: TFaction
  onSelect: (faction: TFaction) => void
}) => {
  return (
    <Button
      size="small"
      variant="text"
      startIcon={<FactionIcon icon={faction.icon} xws={faction.xws} small />}
      onClick={() => onSelect(faction)}
      style={{ padding: 16 }}
    >
      <Typography variant="h6" style={{ fontWeight: 700 }}>
        {faction.name}
      </Typography>
    </Button>
  )
}
