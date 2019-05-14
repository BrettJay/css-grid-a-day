import React from "react"
import Application from "./application.module.scss"
import Progress from "./progress.module.scss"
import SeatStyles from "./seat.module.scss"
import Seat from "./seat"
import Ailse from "./ailse"
import PlaneBG from "../../images/flightbooking/plane.svg"
class FlightBooking extends React.Component {
  state = { seat: 'Please select' }

  setSeat = new_seat => {
    this.setState(state => ({
      seat: new_seat
    }))
  }

  render() {
    const isNotSelected = this.state.seat === 'Please select'
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
        <div className={Application.footer}>
          <div className={Application.summary}>
            <h3>Selected seat:</h3>
            {isNotSelected ? (
              <p>&nbsp;</p>
            ) : (
              <p>{this.state.seat}</p>
            )}
          </div>
          <button disabled={isNotSelected}>Continue</button>
        </div>
        <div className={Application.seatpicker}>
          <div className={Application.plane}>
            <div className={SeatStyles.container}>  
              <div className={SeatStyles.business}>
                <Seat setSeat={this.setSeat} seat="A1" available={true} />
                <Seat setSeat={this.setSeat} seat="A2" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="A3" available={false} />
                <Seat setSeat={this.setSeat} seat="A4" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="A5" available={false} />
                <Seat setSeat={this.setSeat} seat="A6" available={true} />
                <Seat setSeat={this.setSeat} seat="B1" available={false} />
                <Seat setSeat={this.setSeat} seat="B2" available={false} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="B3" available={true} />
                <Seat setSeat={this.setSeat} seat="B4" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="B5" available={false} />
                <Seat setSeat={this.setSeat} seat="B6" available={true} />
                <Seat setSeat={this.setSeat} seat="C1" available={false} />
                <Seat setSeat={this.setSeat} seat="C2" available={false} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="C3" available={false} />
                <Seat setSeat={this.setSeat} seat="C4" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="C5" available={false} />
                <Seat setSeat={this.setSeat} seat="C6" available={true} />
              </div>
              <div className={SeatStyles.economy}>
                <Seat setSeat={this.setSeat} seat="D1" available={false} />
                <Seat setSeat={this.setSeat} seat="D2" available={false} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="D3" available={false} />
                <Seat setSeat={this.setSeat} seat="D4" available={false} />
                <Seat setSeat={this.setSeat} seat="D5" available={false} />
                <Seat setSeat={this.setSeat} seat="D6" available={false} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="D7" available={false} />
                <Seat setSeat={this.setSeat} seat="D8" available={false} />

                <Seat setSeat={this.setSeat} seat="E1" available={false} />
                <Seat setSeat={this.setSeat} seat="E2" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="E3" available={true} />
                <Seat setSeat={this.setSeat} seat="E4" available={false} />
                <Seat setSeat={this.setSeat} seat="E5" available={true} />
                <Seat setSeat={this.setSeat} seat="E6" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="E7" available={true} />
                <Seat setSeat={this.setSeat} seat="E8" available={false} />

                <Seat setSeat={this.setSeat} seat="F1" available={true} />
                <Seat setSeat={this.setSeat} seat="F2" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="F3" available={false} />
                <Seat setSeat={this.setSeat} seat="F4" available={true} />
                <Seat setSeat={this.setSeat} seat="F5" available={false} />
                <Seat setSeat={this.setSeat} seat="F6" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="F7" available={true} />
                <Seat setSeat={this.setSeat} seat="F8" available={false} />

                <Seat setSeat={this.setSeat} seat="G1" available={true} />
                <Seat setSeat={this.setSeat} seat="G2" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="G3" available={true} />
                <Seat setSeat={this.setSeat} seat="G4" available={true} />
                <Seat setSeat={this.setSeat} seat="G5" available={false} />
                <Seat setSeat={this.setSeat} seat="G6" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="G7" available={true} />
                <Seat setSeat={this.setSeat} seat="G8" available={true} />

                <Seat setSeat={this.setSeat} seat="H1" available={false} />
                <Seat setSeat={this.setSeat} seat="H2" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="H3" available={true} />
                <Seat setSeat={this.setSeat} seat="H4" available={false} />
                <Seat setSeat={this.setSeat} seat="H5" available={false} />
                <Seat setSeat={this.setSeat} seat="H6" available={false} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="H7" available={true} />
                <Seat setSeat={this.setSeat} seat="H8" available={true} />
              </div>
              <div className={SeatStyles.economy}>
                <Seat setSeat={this.setSeat} seat="I1" available={false} />
                <Seat setSeat={this.setSeat} seat="I2" available={false} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="I3" available={false} />
                <Seat setSeat={this.setSeat} seat="I4" available={true} />
                <Seat setSeat={this.setSeat} seat="I5" available={true} />
                <Seat setSeat={this.setSeat} seat="I6" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="I7" available={false} />
                <Seat setSeat={this.setSeat} seat="I8" available={false} />

                <Seat setSeat={this.setSeat} seat="J1" available={true} />
                <Seat setSeat={this.setSeat} seat="J2" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="J3" available={false} />
                <Seat setSeat={this.setSeat} seat="J4" available={true} />
                <Seat setSeat={this.setSeat} seat="J5" available={false} />
                <Seat setSeat={this.setSeat} seat="J6" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="K7" available={true} />
                <Seat setSeat={this.setSeat} seat="K8" available={true} />
                <Seat setSeat={this.setSeat} seat="K1" available={false} />
                <Seat setSeat={this.setSeat} seat="K2" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="K3" available={true} />
                <Seat setSeat={this.setSeat} seat="K4" available={false} />
                <Seat setSeat={this.setSeat} seat="K5" available={true} />
                <Seat setSeat={this.setSeat} seat="K6" available={true} />
                <Ailse/>
                <Seat setSeat={this.setSeat} seat="K7" available={false} />
                <Seat setSeat={this.setSeat} seat="K8" available={false} />
              </div>
            </div>
            <img src={PlaneBG} alt="Plane" className={Application.plane_bg}/>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightBooking
