import React from "react"
import stringReplace from "react-string-replace"
import { XIcon } from "./components/Icon"

export const AbilityIconMap = (ability: string) =>
  stringReplace(ability, /\[(.*?)\]/, (match) => (
    <XIcon type="font" icon={`token-${match.toLowerCase()}`} />
  ))
