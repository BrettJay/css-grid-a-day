import React from "react"
import DayStyles from "./day.module.scss"
import Activities from "./activities"
import Meal from "./meal"


class Day extends React.Component {
  render() {
    const { schedule } = this.props
    return (
      <div className={DayStyles.container}>
        <Activities
          time="morning"
          label={schedule.morning.label}
          activities={schedule.morning.activities}
          />
        <Meal
          label={schedule.lunch.label}
          icon={schedule.lunch.iconn}/>
        <Activities
          time="afternoon"
          label={schedule.afternoon.label}
          activities={schedule.afternoon.activities}
          />
        <Meal
          label={schedule.dinner.label}
          icon={schedule.dinner.iconn}/>
        <Activities
          time="evening"
          label={schedule.evening.label}
          activities={schedule.evening.activities}
          />
      </div>
    )
  }
}

export default Day
