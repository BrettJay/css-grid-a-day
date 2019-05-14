import React from "react"
import Application from "./application.module.scss"
import Progress from "./progress.module.scss"

class FlightBooking extends React.Component {
  render() {
    return (
      <div className={Application.container}>
        <div className={Application.logo}/>
        <div className={Application.progress}>
          <ol className={Progress.steps}>
            <li className={Progress.complete}>
              <div className={Progress.label}>Choose Dates</div>
            </li>
            <li className={Progress.complete}>
              <div className={Progress.label}>Passenger Details</div>
            </li>
            <li className={Progress.current}>
              <div className={Progress.label}>Seat selection</div>
            </li>
            <li>
              <div className={Progress.label}>Payment confirmation</div>
            </li>
            <li>
              <div className={Progress.label}>Booking confirmation</div>
            </li>
          </ol>
        </div>
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
