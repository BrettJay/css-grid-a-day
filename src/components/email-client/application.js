import React from "react"
import Application from "./application.module.scss"

class EmailApplication extends React.Component {
  render() {
    return (
      <div className={Application.container}>
        <div className={Application.header}/>
        <div className={Application.sidebar}>

        </div>
        <div className={Application.list}>

        </div>
        <div className={Application.view}>
        </div>
      </div>
    )
  }
}

export default EmailApplication
