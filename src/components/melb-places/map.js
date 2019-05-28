import React from "react"
import App from "./application.module.scss"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX_API_KEY

class Map extends React.Component {
  componentDidMount() {
    const { lng, lat, zoom } = this.props;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div className={App.mapContainer} ref={el => this.mapContainer = el}/>
    )
  }
}

export default Map
