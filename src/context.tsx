import React, { createContext, SetStateAction, useState } from "react";

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

interface IAppContext {
  faction: TFaction | undefined;
  setFaction: React.Dispatch<SetStateAction<TFaction | undefined>>;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [faction, setFaction] = useState<TFaction | undefined>();

  return (
    <AppContext.Provider value={{ faction, setFaction }}>
      {children}
    </AppContext.Provider>
  );
};
