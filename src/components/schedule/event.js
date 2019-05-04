import React from "react"
import Schedule from "./schedule.module.scss"

function Event(props) {
  return (
    <div className={`${Schedule.event} ${Schedule[props.day]} ${Schedule[props.starttime]} ${Schedule[props.duration]}`} style={{backgroundColor: props.bgcolor, color: props.color }}>{props.children}</div>
  )
}


export default Event
