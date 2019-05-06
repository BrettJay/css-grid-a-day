import React from "react"
import LayoutStyles from "./layout.module.scss"

class Application extends React.Component {
  render() {
    return (
      <div className={LayoutStyles.container}>
        <div className={LayoutStyles.header}>CAFFIEND</div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Application
