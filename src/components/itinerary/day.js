import React from "react"
import DayStyles from "./day.module.scss"
import Activities from "./activities"

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
      </div>
    )
  }
}

export default Day
