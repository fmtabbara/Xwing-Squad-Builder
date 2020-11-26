export enum EnumShipSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum EnumActionDifficulty {
  White = "White",
  Red = "Red",
}

export enum EnumActionType {
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

export enum EnumShipStatsTypes {
  attack = "attack",
  agility = "agility",
  hull = "hull",
  shields = "shields",
}

export enum EnumFactionXWS {
  rebelalliance = "rebelalliance",
  galacticempire = "galacticempire",
  scumandvillainy = "scumandvillainy",
  resistance = "resistance",
  firstorder = "firstorder",
  galacticrepublic = "galacticrepublic",
  separatistalliance = "separatistalliance",
}

export enum EnumFactionNames {
  "Rebel Alliance" = "Rebel Alliance",
  "Galactic Empire" = "Galactic Empire",
  "Scum and Villainy" = "Scum and Villainy",
  "Resistance" = "Resistance",
  "First Order" = "First Order",
  "Galactic Republic" = "Galactic Republic",
  "Separatist Alliance" = "Separatist Alliance",
}

export type TSlot =
  | "Astromech"
  | "Cannon"
  | "Cargo"
  | "Command"
  | "Configuration"
  | "Crew"
  | "Device"
  | "Force-power"
  | "Gunner"
  | "Hardpoint"
  | "Illicit"
  | "Missile"
  | "Modification"
  | "Sensor"
  | "Tactical-relay"
  | "Talent"
  | "Team"
  | "Tech"
  | "Title"
  | "Torpedo"
  | "Turret"

export type TShip = {
  actions: Array<{ difficulty: EnumActionDifficulty; type: EnumActionType }>
  dial: string[]
  faction: EnumFactionNames
  ffg: number
  icon: string
  name: string
  pilots: Array<TPilot>
  size: EnumShipSize
  stats: Array<{
    arc?: string
    type: EnumShipStatsTypes
    value: number
  }>
  xws: string
}

export type TPilot = {
  artwork: string
  ability: string
  caption: string
  cost: number | undefined
  ffg: number
  hyperspace: boolean
  image: string
  initiative: number
  limited: number
  name: string
  shipAbility: { name: string; text: string } | undefined
  slots?: TSlot[]
  xws: string
  ship?: {
    xws: string
    dial: string[]
  }
}

export type TFaction = {
  name: string
  ffg: number
  icon: string
  xws: EnumFactionXWS
}

export type TUpgrade = {
  cost: number
  hyperspace: boolean
  limited: number
  name: string
  restrictions: Array<{ [key: string]: string }>
  sides: TSide[]
}

export type TSide = {
  ability: string
  artwork: URL
  actions?: Array<{ type: string; difficulty: string }>
  attack?: {
    arc: string
    maxrange: number
    minrange: number
    ordnance: boolean
    value: number
  }
  charges?: Array<{ value: number; recovers: number }>
  ffg: number
  image: URL
  slots: TSlot[]
  title: string
}
