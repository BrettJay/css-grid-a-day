import React from "react"
import Application from "./application.module.scss"

class FlightBooking extends React.Component {
  render() {
    return (
      <div className={Application.container}>
        <div className={Application.logo}/>
        <div className={Application.progress}/>
        <div className={Application.main}>
          <h1>Seat selection</h1>
        </div>
        <div className={Application.footer}/>
        <div className={Application.seatpicker}>
          <div className={Application.plane}>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightBooking
