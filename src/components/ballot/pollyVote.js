import React from "react"
import Senate from "./senate.module.scss"

class PollyVote extends React.Component {
  render() {
    const {surname, name, party} = this.props
    return (
      <div className={Senate.polly}>
        <div className={Senate.checkbox}/>
        <div className={Senate.pollyDetails}>
          <h4 className={Senate.pollySurname}>{surname}</h4>
          <h4 className={Senate.pollyName}>{name}</h4>
          <h5 className={Senate.pollyParty}>{party}</h5>
        </div>
      </div>
    )
  }
}

export default PollyVote
