import React from "react"
import TileStyles from "./tile.module.scss"

function Tile(props) {
  return (
    <div className={`${TileStyles.container} ${TileStyles[props.type]} ${TileStyles[props.colour]}`}>
      {props.children}
    </div>
  )
}

export default Tile
