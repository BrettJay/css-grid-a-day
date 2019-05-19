import React from "react"
import Senate from "./senate.module.scss"

class Party extends React.Component {
  render() {
    const { name, children } = this.props
    return (
      <div className={Senate.below_line}>
        <h3 className={Senate.partyName}>{name}</h3>
        <div className={Senate.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default Party
