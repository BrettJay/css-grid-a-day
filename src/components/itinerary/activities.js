import React from "react"
import Day from "./day.module.scss"
import ActivitiesStyles from "./activities.module.scss"

function Activity(props) {
  const { activity, children } = props

  return (
    <div className={`${ActivitiesStyles.item} ${ActivitiesStyles[activity.icon]}`}>{children}</div>
  )
}

function Activities(props) {
  const { label, activities, time } = props
  return (
    <div className={`${Day.section} ${Day[time]}`}>
      <div className={Day.body}>
        <div className={Day.label}>{label}</div>
        <div className={ActivitiesStyles.container}>
          {activities.map(activity => (
            <Activity key={activity.label} activity={activity}>{activity.label}</Activity>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Activities
