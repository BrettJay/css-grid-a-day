import React from "react"
import DayStyles from "./day.module.scss"

function Activities(props) {
  const { label, activities, time } = props
  return (
    <div>
      <div>{label}</div>
      <div>{activities}</div>
    </div>
  )
}

export default Activities
