import React from "react"
import CalendarStyles from "./calendar.module.scss"

export default ({children}) => (
  <div className={CalendarStyles.calendar}>
    <div className={CalendarStyles.h}>Mon</div>
    <div className={CalendarStyles.h}>Tue</div>
    <div className={CalendarStyles.h}>Wed</div>
    <div className={CalendarStyles.h}>Thu</div>
    <div className={CalendarStyles.h}>Fri</div>
    <div className={CalendarStyles.h}>Sat</div>
    <div className={CalendarStyles.h}>Sun</div>
    {children}
  </div>
)
