import React from "react"
import CalendarStyles from "./calendar.module.scss"

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

class Calendar extends React.Component {
  render() {
    return (
      <div className={CalendarStyles.container}>
        <div className={CalendarStyles.calendar}>
          <div className={CalendarStyles.header}>
            Hi
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar
