import React from "react"
import Cal from "./calendar.module.scss"
import Day from "./day"

const headings = ['M','T','W','T','F','S','S']
const bplaceholders = [29,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
const aplaceholders = [31,1,2]
class LogCalendar extends React.Component {
  
  render() {
    const { dates, activeDay } = this.props
    return (
      <div className={Cal.container}>
        {headings.map(heading => (
          <div className={Cal.heading}>{heading}</div>
        ))}
        {bplaceholders.map(date => (
          <div className={Cal.placeholder}>{date}</div>
        ))}
        {dates.map(day => (
          <Day key={`${day.date}${day.month}`} day={day} activeDay={activeDay} setActiveDay={this.props.setActiveDay}/>          
        ))}
        {aplaceholders.map(date => (
          <div className={Cal.placeholder}>{date}</div>
        ))}
      </div>
    )
  }
}

export default LogCalendar
