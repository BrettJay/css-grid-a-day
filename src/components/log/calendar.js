import React from "react"
import Cal from "./calendar.module.scss"
import Day from "./day"

class LogCalendar extends React.Component {
  render() {
    const { dates, activeDay } = this.props
    return (
      <div className={Cal.container}>
        {dates.map(day => (
          <Day key={`${day.date}${day.month}`} day={day} activeDay={activeDay} setActiveDay={this.props.setActiveDay}/>          
        ))}
      </div>
    )
  }
}

export default LogCalendar
