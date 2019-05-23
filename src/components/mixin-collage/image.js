import React from "react"
import Collage from "./collage.module.scss"

class Image extends React.Component {
  render() {
    const { filename, description, size } = this.props
    const imgUrl = require(`../../images/mixin-collage/${filename}.jpg`)
    return (
      <div className={`${Collage.item} ${Collage[size]}`}>
        <img src={imgUrl} alt={description}/>
      </div>
    )
  }
}

export default Image
