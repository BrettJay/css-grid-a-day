import React from "react"
import Hour from "./hour"

import CalStyles from "./calendar.module.scss"

function DayLine(props) {
  return (
    <div className={CalStyles.dayline}>
      <Hour time="6am"/>
      <Hour time="7am"/>
      <Hour time="8am"/>
      <Hour time="9am"/>
      <Hour time="10am"/>
      <Hour time="11am"/>
      <Hour time="12pm"/>
      <Hour time="1pm"/>
      <Hour time="2pm"/>
      <Hour time="3pm"/>
      <Hour time="4pm"/>
      <Hour time="5pm"/>
      <Hour time="6pm"/>
      <Hour time="7pm"/>
      <Hour time="8pm"/>
      <Hour time="9pm"/>
      <Hour time="10pm"/>
      <Hour time="11pm"/>
      <Hour time="12am"/>
    </div>
  )
}

export default DayLine
