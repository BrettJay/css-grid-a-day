import React from "react"
import Application from "./application.module.scss"
import Progress from "./progress.module.scss"
import SeatStyles from "./seat.module.scss"
import Seat from "./seat"

class FlightBooking extends React.Component {
  state = { seat: 'Please select' }

  setSeat = new_seat => {
    this.setState(state => ({
      seat: new_seat
    }))
  }

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
          <table className={Application.table} cellSpacing="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Passenger</th>
                <th>Seat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mr. Brett Jones</td>
                <td>{this.state.seat}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className={Application.footer}/>
        <div className={Application.seatpicker}>
          <div className={Application.plane}>
            <div className={SeatStyles.container}>  
              <div className={SeatStyles.business}>
                <Seat setSeat={this.setSeat} seat="A1" available={true} />
                <Seat setSeat={this.setSeat} seat="A2" available={true} />
                <Seat setSeat={this.setSeat} seat="A3" available={true} />
                <Seat setSeat={this.setSeat} seat="A4" available={true} />
                <Seat setSeat={this.setSeat} seat="A5" available={true} />
                <Seat setSeat={this.setSeat} seat="A6" available={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightBooking
