import React from "react"

import Calendar from "./calendar"
import Day from "./day"
import Detail from "./detail"

import ItineraryStyles from "./itinerary.module.scss"

import Feb6 from "./feb-6"

class Itinerary extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      activeDate: 'Feb6',
      activeDateLabel: 'Feb 6',
      day: Feb6
    }
  }

  componentDidMount () {
    this.setState({ day: Feb6 })
  }

  setActiveDate = (date, dateLabel, schedule) => {
    this.setState(state => ({
      activeDate: date,
      activeDateLabel: dateLabel,
      day: schedule
    }))
  }

  render() {
    return (
      <div className={ItineraryStyles.container}>
        <div className={ItineraryStyles.header}><div>Itinerary — {this.state.activeDateLabel}</div></div>
        <Calendar activeDate={this.state.activeDate} setActiveDate={this.setActiveDate} />
        <Day activeDate={this.state.activeDate} schedule={this.state.day}/>
      </div>
    )
  }
}

export default Itinerary
