import React from "react"
import CardStyles from "./card.module.scss"

class Card extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={CardStyles.container}>
        {children}
      </div>
    )
  }
}

export default Card
