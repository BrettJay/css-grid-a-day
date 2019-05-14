import React from "react"
import SeatStyle from "./seat.module.scss"

class Seat extends React.Component {
  seatRef = React.createRef();

  setSeat = () => {
    const seat = this.seatRef.current.value
    this.props.setSeat(seat)
  }

  render() {
    const { seat, available } = this.props
    const isAvailable = available
    return (
      <React.Fragment>
        { isAvailable ? (
          <button onClick={this.setSeat} ref={this.seatRef} value={seat} className={SeatStyle.button} />
        ) : (
          <div title={`Seat ${seat} is unavailable`} className={`${SeatStyle.button} ${SeatStyle.button_unavailable}`}/>
        )}
      </React.Fragment>
    )
  }
}

export default Seat
