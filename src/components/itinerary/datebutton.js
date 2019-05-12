import React from "react"
import CalendarStyles from "./calendar.module.scss"

class CalendarButton extends React.Component {
  handleClick = () => {
    this.props.setActiveDate(this.props.date, this.props.label)
  }
  render() {
    const { date, label, buttonLabel } = this.props
    return (
      <button className={`${CalendarStyles.button} ${CalendarStyles[date]}`} date={date} label={label} onClick={this.handleClick}>{buttonLabel}</button>
    )
  }
}

export default CalendarButton
