import React, { useContext } from "react";
import { Page } from "../../components/page";
import { Button, Grid } from "@material-ui/core";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useRequest } from "../../hooks/useRequest";
import { AppContext, TFaction } from "../../context";
import { useHistory, useLocation } from "react-router-dom";

export const FactionSelect = () => {
  const {
    data: factions = [],
    isLoading,
  }: { data: TFaction[] | undefined; isLoading: boolean } = useRequest(
    "data/factions/factions.json"
  );

  const history = useHistory();
  const location = useLocation();

  const { setFaction } = useContext(AppContext);

  const handleSelect = (faction: TFaction) => {
    setFaction(faction);
    history.push(`${location.search}/squad-build`);
  };

  return (
    <Page>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        {isLoading && <div>Loading..</div>}
        {factions.map((f, index: number) => (
          <Grid item>
            <Faction key={index} faction={f} onSelect={handleSelect} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

const Faction = ({
  faction,
  onSelect,
}: {
  faction: TFaction;
  onSelect: (faction: TFaction) => void;
}) => {
  const isMobile = useIsMobile();
  const fIcon = <img src={faction.icon} height={30} />;

  return (
    <Button
      variant="contained"
      style={{ width: 225 }}
      startIcon={!isMobile ? fIcon : undefined}
      onClick={() => onSelect(faction)}
    >
      {!isMobile ? faction.name : fIcon}
    </Button>
  );
};
