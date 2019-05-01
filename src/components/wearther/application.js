import React from "react"

import App from "./application.module.scss"

class Wearther extends React.Component {
  render() {
    return (
      <div className={App.container}>
        <div className={App.today}>
          <div>24°</div>
          <div>H: 26°</div>
          <div>L: 19°</div>
        </div>

        <div className={App.next}>Foo</div>
      </div>
    )
  }
}

export default Wearther
