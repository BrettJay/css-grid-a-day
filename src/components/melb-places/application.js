import React from "react"
import App from "./application.module.scss"
import Map from "./map.js"
import Place from "./place.js"

class MelbApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 144.9616,
      lat: -37.811,
      zoom: 13
    };
  }

  mapPlace = (lat, lng) => {
    this.setState(state => ({
      lat: lat,
      lng: lng
    }))
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
            mapPlace={this.mapPlace}
            name="Smiths and Daughter"
            category="brunch"
            summary="A good vegan brunch option, and who can say no to cocktails at brunch? (Unless you just happen to be supremely hungover)."
            lat={-37.80221421077744}
            lng={144.97760832309723}/>
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
