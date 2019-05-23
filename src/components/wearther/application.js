import React from "react"

import App from "./application.module.scss"

class Wearther extends React.Component {
  render() {
    return (
      <div className={App.container}>
        <div className={App.today}>
          <div className={App.temperatures}>
            <div className={App.now}>24°</div>
            <div className={App.lowhi}>
              <span className={App.low}>19</span> –{" "}
              <span className={App.high}>26°</span>
            </div>
          </div>
        </div>

        <div className={App.d1}>
          Tomorrow 23°/17°
        </div>
        <div className={App.d2}>
          Sunday 23°/17°
        </div>
        <div className={App.d3}>
          Monday 23°/17°
        </div>
        <div className={App.d4}>
          Tuesday 23°/17°
        </div>
        <div className={App.d5}>
          Wednesday 23°/17°
        </div>
      </div>
    )
  }
}

export default Wearther
