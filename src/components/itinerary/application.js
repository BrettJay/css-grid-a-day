import React from "react"

import Calendar from "./calendar"
import Day from "./day"
import Detail from "./detail"

import ItineraryStyles from "./itinerary.module.scss"

class Itinerary extends React.Component {
  render() {
    return (
      <div className={ItineraryStyles.container}>
        <div className={ItineraryStyles.header}>Itinerary</div>
        <Calendar/>
        <Day/>
        <Detail/>
      </div>
    )
  }
}

export default Itinerary
