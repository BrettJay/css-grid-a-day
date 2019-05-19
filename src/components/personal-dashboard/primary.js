import React from "react"
import TileStyles from "./tile.module.scss"

function Primary(props) {
  return (
    <h2 className={TileStyles.primaryLabel}>{props.children}</h2>
  )
}

export default Primary
