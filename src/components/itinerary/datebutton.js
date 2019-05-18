import React from "react"
import CalendarStyles from "./calendar.module.scss"

class CalendarButton extends React.Component {
  handleClick = () => {
    this.props.setActiveDate(this.props.date, this.props.label)
  }
  render() {
    const { date, label, buttonLabel, activeDate } = this.props
    const isActive = date === activeDate
    const dateClasses = isActive ? `${CalendarStyles.button} ${CalendarStyles.activeButton}` : `${CalendarStyles.button}`
    return (
      <button className={dateClasses} date={date} label={label} onClick={this.handleClick}>{buttonLabel}</button>
    )
  }
}

export default CalendarButton
