import React from "react"
import App from "./application.module.scss"
import Map from "./map.js"
import Place from "./place.js"

class MelbApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div className={App.layout}>
        <div className={App.header}>
          Melbourne Places
        </div>
        <div className={App.main}>
          <Place
            name="Smiths and Daughter"
            category="Brunch"
            lat="-37.80221421077744"
            lng="144.97760832309723"/>
        </div>
        <div className={App.map}>
          <Map
            zoom={zoom}
            lat={lat}
            lng={lng}/>
        </div>
      </div>
    )
  }
}

export default MelbApplication
