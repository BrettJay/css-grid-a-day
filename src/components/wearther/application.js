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

        <div className={App.next}>Foo</div>
      </div>
    )
  }
}

export default Wearther
