import React from "react"
import SeatStyle from "./seat.module.scss"

class Seat extends React.Component {
  seatRef = React.createRef();

  setSeat = () => {
    const seat = this.seatRef.current.value
    this.props.setSeat(seat)
  }

  render() {
    const { seat } = this.props
    return (
      <button onClick={this.setSeat} ref={this.seatRef} value={seat} className={SeatStyle.button} />
    )
  }
}

export default Seat
