import React, { createContext, SetStateAction, useState } from "react";
import { useRequest } from "./hooks/useRequest";

enum EnumShipSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

enum EnumActionDifficulty {
  White = "White",
  Red = "Red",
}

enum EnumActionType {
  Focus = "Focus",
  Reinforce = "Reinforce",
  Lock = "Lock",
  "Barrel Roll" = "Barrel Roll",
  Evade = "Evade",
  Cloak = "Cloak",
  Coordinate = "Coordinate",
  Calculate = "Calculate",
  Jam = "Jam",
  Reload = "Reload",
  Slam = "Slam",
  "Rotate Arc" = "Rotate Arc",
}

export type TShip = {
  actions: Array<{ difficulty: EnumActionDifficulty; type: EnumActionType }>;
  faction: EnumFactionNames;
  ffg: number;
  icon: string;
  name: string;
  pilots: Array<TPilot>;
  size: EnumShipSize;
  stats: any[]; // Needs populating
  xws: string;
};

export type TPilot = {
  artwork: string;
  ability: string;
  caption: string;
  cost: number | undefined;
  ffg: number;
  hyperspace: boolean;
  image: string;
  initiative: number;
  limited: number;
  name: string;
  shipAbility: { name: string; text: string } | undefined;
  slots: string[];
  xws: string;
};

export type TFaction = {
  name: string;
  ffg: number;
  icon: string;
  xws: EnumFactionXWS;
};

export enum EnumFactionXWS {
  rebelalliance = "rebelalliance",
  galacticempire = "galacticempire",
  scumandvillainy = "scumandvillainy",
  resistance = "resistance",
  firstorder = "firstorder",
  galacticrepublic = "galacticrepublic",
  separatistalliance = "separatistalliance",
}

enum EnumFactionNames {
  "Rebel Alliance" = "Rebel Alliance",
  "Galactic Empire" = "Galactic Empire",
  "Scum and Villainy" = "Scum and Villainy",
  "Resistance" = "Resistance",
  "First Order" = "First Order",
  "Galactic Republic" = "Galactic Republic",
  "Separatist Alliance" = "Separatist Alliance",
}

interface IAppContext {
  manifestUrlsLoading: boolean;
  manifestUrls: any;
  faction: TFaction | undefined;
  setFaction: React.Dispatch<SetStateAction<TFaction | undefined>>;
  ship: any;
  showPilotsList: (ship: any) => void;
  closePilotsList: () => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [faction, setFaction] = useState<TFaction | undefined>();
  const [ship, setShip] = useState<TShip>();

  const { data: manifestUrls, isLoading: manifestUrlsLoading } = useRequest(
    "/manifest.json"
  );

  const showPilotsList = (ship: any) => setShip(ship);
  const closePilotsList = () => setShip(undefined);

  return (
    <AppContext.Provider
      value={{
        faction,
        ship,
        setFaction,
        manifestUrls,
        manifestUrlsLoading,
        showPilotsList,
        closePilotsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
