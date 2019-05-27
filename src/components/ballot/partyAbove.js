import React from "react"
import Senate from "./senate.module.scss"

class Party extends React.Component {
  render() {
    const { letter, name } = this.props
    return (
      <div className={Senate.above_line}>
        <div className={Senate.letter}>{letter}</div>
        <div className={Senate.content}>
          <div className={Senate.checkbox}/>
          <h3 className={Senate.partyName}>{name}</h3>
        </div>
      </div>
    )
  }
}

export default Party
