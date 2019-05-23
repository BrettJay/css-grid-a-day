import React from "react"
import CalendarStyles from "./calendar.module.scss"

function CalDay(props) {
  const isHeader = props.header
  const isPlaceholder = props.placeholder
  const isCurrent = props.current

  if (isHeader) {
    return (
      <div className={`${CalendarStyles.day} ${CalendarStyles.header}`}>{props.children}</div>
    )
  } else if (isPlaceholder) {
    return (
      <div className={`${CalendarStyles.day} ${CalendarStyles.placeholder}`}>{props.children}</div>
    )
  } else if (isCurrent) {
    return (
      <div className={`${CalendarStyles.day} ${CalendarStyles.current}`}>{props.children}</div>
    )
  } else {
    return (
      <div className={CalendarStyles.day}>{props.children}</div>
    )
  }
}

export default CalDay
