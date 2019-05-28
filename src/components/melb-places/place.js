import React from "react"
import Place from "./place.module.scss"

class MelbPlace extends React.Component {

  render() {
    const { name, category, summary, link, address, suburb, postcode } = this.props
    return (
      <a className={Place.container} href={link}>
        <div>
          <p className={Place.category}>{category}</p>
          <h2 className={Place.name}>{name}</h2>
          <p className={Place.summary}>{summary}</p>
        </div>
        <address className={Place.address}>
          <p>{address}</p>
          <p>{suburb} VIC {postcode}</p>
        </address>
      </a>
    )
  }
}

export default MelbPlace
