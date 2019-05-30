import React from "react"

class DayImage extends React.Component {
  render() {
    const imgUrl = require(`../../images/log/${this.props.filename}.jpg`)
    return (
      <img src={imgUrl}/>
    )
  }
}

export default DayImage
