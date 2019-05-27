import React from "react"
import CalStyles from "./calendar.module.scss"

function Hour(props) {
  return (
    <div className={CalStyles.hour}>
      <div className={CalStyles.hourLabel}>{props.time}</div>
    </div>
  )
}

export default Hour
