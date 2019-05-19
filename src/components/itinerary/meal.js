import React from "react"
import Day from "./day.module.scss"

function Meal(props) {
  const { label, icon, description } = props
  return (
    <div className={`${Day.section} ${Day.meal} ${Day[icon]}`}>
      <div className={Day.timeline}>
        <div className={Day.path_before}/>
        <div className={Day.icon}/>
        <div className={Day.path_after}/>
      </div>
      <div className={Day.body}>
        <div className={Day.label}>{label}</div>
        <div className={Day.meta}>{description}</div>
      </div>
    </div>
  )
}

export default Meal
