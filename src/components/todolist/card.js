import React from "react"
import CardStyles from "./card.module.scss"

class Card extends React.Component {
  render() {
    const { children, colour, name } = this.props
    return (
      <div className={CardStyles.container} style={{backgroundColor: colour}}>
        <h2 className={CardStyles.title}>{name}</h2>
        <div className={CardStyles.items}>{children}</div>
        <button className={CardStyles.new}>+ Add item</button>
      </div>
    )
  }
}

export default Card
