import React from "react"
import stringReplace from "react-string-replace"
import { XIcon } from "./components/Icon"

export const AbilityIconMap = (ability?: string) =>
  ability &&
  stringReplace(ability, /\[(.*?)\]/, (match, index) => {
    return <XIcon type="font" icon={`${match}`} key={index} />
  })
