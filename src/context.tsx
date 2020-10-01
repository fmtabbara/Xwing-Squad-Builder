import React, { createContext, SetStateAction, useState } from "react";

export type TFaction = {
  name: string;
  ffg: number;
  icon: string;
  xws: string;
};

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
