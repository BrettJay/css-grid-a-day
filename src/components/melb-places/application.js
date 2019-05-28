import React from "react"
import App from "./application.module.scss"
import Place from "./place.js"

class MelbApplication extends React.Component {
  render() {
    return (
      <div className={App.layout}>
        <div className={App.header}>
          Melbourne Places
        </div>
        <div className={App.main}>
          <Place
            name="Smiths and Daughter"
            category="brunch"
            summary="A good vegan brunch option, and who can say no to cocktails at brunch? (Unless you just happen to be supremely hungover)."/>
        </div>
      </div>
    )
  }
}

export default MelbApplication
