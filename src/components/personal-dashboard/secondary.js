import React from "react"
import TileStyles from "./tile.module.scss"

function Secondary(props) {
  return (
    <p className={TileStyles.secondaryLabel}>{props.children}</p>
  )
}

export default Secondary
