import React from "react"
import Cal from "./calendar.module.scss"

class LogDay extends React.Component {
  handleClick = () => {
    this.props.setActiveDay(this.props.day)
  }
  render() {
    const { date } = this.props.day
    const isActive = this.props.day == this.props.activeDay
    const dayClasses = (isActive) ? `${Cal.day} ${Cal.active}` : `${Cal.day}`
    return (
      <div className={dayClasses} onClick={this.handleClick}>{date}</div>
    )
  }
}

export default LogDay
