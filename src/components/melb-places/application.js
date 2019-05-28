import React from "react"
import App from "./application.module.scss"
import Map from "./map.js"

class MelbApplication extends React.Component {
  
  render() {
    return (
      <div className={App.layout}>
        <div className={App.header}/>
        <div className={App.main}/>
        <div className={App.map}>
          <Map
            lat="0"
            lng="0"/>
        </div>
      </div>
    )
  }
}

export default MelbApplication
