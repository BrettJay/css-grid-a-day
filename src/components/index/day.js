import React from "react"
import CalendarStyles from "./calendar.module.scss"

import { Link } from "gatsby"

function Day(props) {
  const isComplete = props.complete
  const isPlaceholder = props.placeholder
  if (isComplete) {
    return (
      <Link
        to={`/may-${props.date}`}
        className={CalendarStyles.day}>
        {props.date}
        <div className={CalendarStyles.label} style={{backgroundColor: props.color }}>
          {props.label}
        </div>
      </Link>
    )
  }
  return (
    <div
      className={isPlaceholder ? `${CalendarStyles.day} ${CalendarStyles.placeholder}` : `${CalendarStyles.day}` }>
      {props.date}
    </div>
  )
}

export default Day
