import React from "react"
import TileStyles from "./tile.module.scss"

class Icon extends React.Component {
  render() {
    const { filename, title } = this.props
    const imgUrl = require(`../../images/personal-dashboard/${filename}.svg`)
    return (
      <div className={TileStyles.icon}>
        <img src={imgUrl} alt={title}/>
      </div>
    )
  }
}

export default Icon
