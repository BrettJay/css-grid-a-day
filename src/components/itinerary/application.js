import React from "react"

import Calendar from "./calendar"
import Day from "./day"
import Detail from "./detail"

import ItineraryStyles from "./itinerary.module.scss"
import CalendarStyles from "./calendar.module.scss"

class Itinerary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeDate: 'feb-6', activeDateLabel: 'Feb 6' }
  }

  setActiveDate = (date, dateLabel) => {
    this.setState(state => ({
      activeDate: date,
      activeDateLabel: dateLabel
    }))
  }

  render() {
    return (
      <div className={ItineraryStyles.container}>
        <div className={ItineraryStyles.header}><div>Itinerary — {this.state.activeDateLabel}</div></div>
        <Calendar activeDate={this.state.activeDate} setActiveDate={this.setActiveDate} />
        <Day activeDate={this.state.activeDate}/>
        <Detail/>
      </div>
    )
  }
}

export default Itinerary
