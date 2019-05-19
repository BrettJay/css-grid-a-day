import React from "react"
import Day from "./day.module.scss"

function Meal(props) {
  const { label, icon } = props
  return (
    <div className={`${Day.section} ${Day.meal} ${Day[icon]}`}>
      <div className={Day.label}>{label}</div>
    </div>
  )
}

export default Meal
