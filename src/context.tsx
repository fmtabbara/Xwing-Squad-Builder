import React, { createContext, SetStateAction, useState } from "react"
import { useRequest } from "./hooks/useRequest"
import { TFaction, TPilot, TShip } from "./types"

interface IAppContext {
  manifestUrlsLoading: boolean
  manifestUrls: any
  faction: TFaction | undefined
  ship: any
  squad: TPilot[]
  setFaction: React.Dispatch<SetStateAction<TFaction | undefined>>
  showPilotsList: (ship: any) => void
  closePilotsList: () => void
  addSquadPilot: (pilot: TPilot, ship: { xws: string; dial: string[] }) => void
  removeSquadPilot: (pilotName: TPilot["name"]) => void
  resetSquad: () => void
  upgrade: string | undefined
  setUpgrade: React.Dispatch<SetStateAction<string | undefined>>
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [faction, setFaction] = useState<TFaction | undefined>()
  const [ship, setShip] = useState<TShip>()
  const [squad, setSquad] = useState<TPilot[]>([])
  const [upgrade, setUpgrade] = useState<string>()

  const { data: manifestUrls, isLoading: manifestUrlsLoading } = useRequest(
    "manifest.json"
  )

  const showPilotsList = (ship: any) => setShip(ship)
  const closePilotsList = () => setShip(undefined)

  const addSquadPilot = (
    pilot: TPilot,
    ship: { xws: string; dial: string[] }
  ) => {
    setSquad((s) => [...s, { ...pilot, ship }])
    closePilotsList()
  }

  const removeSquadPilot = (pilotName: TPilot["name"]) =>
    setSquad((s) => s.filter((p) => p.name !== pilotName))

  const resetSquad = () => setSquad([])

  return (
    <AppContext.Provider
      value={{
        faction,
        ship,
        squad,
        manifestUrls,
        manifestUrlsLoading,
        setFaction,
        showPilotsList,
        closePilotsList,
        addSquadPilot,
        removeSquadPilot,
        resetSquad,
        upgrade,
        setUpgrade,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
