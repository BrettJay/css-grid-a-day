import React from "react"
import Place from "./place.module.scss"

class MapPlace extends React.Component {
  render() {
    const { name, category, lat, lng } = this.props
    return (
      <div className={Place.container}>
        <p className={Place.category}>{category}</p>
        <h2 className={Place.name}>{name}</h2>
      </div>
    )
  }
}

export default MapPlace
