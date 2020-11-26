import React from "react"

type TUpgradeCard = {
  name: string
  cost: number
}

export const UpgradeCard = ({ name, cost }: TUpgradeCard) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  )
}
