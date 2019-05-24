import React from "react"

import App from "./application.module.scss"
import Weather from "./weather.module.scss"
import Clothes from "./clothes.module.scss"

import RainLg from "../../images/wearthere/large/rain.svg"

class Wearther extends React.Component {
  render() {
    return (
      <div className={App.container}>
        <div className={App.today}>
          <div className={App.temperatures}>
            <div className={App.now}>
              <img src={RainLg} alt="Rain"/>17°
            </div>
          </div>
          <div className={App.summary}>
            Partly cloudy with showers in the evening.
          </div>
          <div className={App.clothes}>
            <div title="Wear pants or jeans" className={Clothes.jeans}/>
            <div title="Wear a shirt" className={Clothes.shirt}/>
            <div title="Wear a sweater" className={Clothes.sweater}/>
            <div title="Bring a coat" className={Clothes.coat}/>
            <div title="Bring an umbrella" className={Clothes.umbrella}/>
          </div>
        </div>
        <div className={App.d1}>
          <h2>
            <div className={App.forecastLabel}>Today</div>
            <div className={`${App.forecastHighLow} ${Weather.overcast}`}><span className={App.forecastHigh}>20°</span><span className={App.forecastLow}> / 8°</span></div>
          </h2>
        </div>
        <div className={App.d2}>
          <h2>
            <div className={App.forecastLabel}>Tomorrow</div>
            <div className={`${App.forecastHighLow} ${Weather.rain}`}><span className={App.forecastHigh}>19°</span><span className={App.forecastLow}> / 8°</span></div>
          </h2>
        </div>
        <div className={App.d3}>
          <h2>
          <div className={App.forecastLabel}>Sunday</div>
            <div className={`${App.forecastHighLow} ${Weather.rain}`}><span className={App.forecastHigh}>16°</span><span className={App.forecastLow}> / 8°</span></div>
          </h2>
        </div>
        <div className={App.d4}>
          <h2>
            <div className={App.forecastLabel}>Monday</div>
            <div className={`${App.forecastHighLow} ${Weather.storm}`}><span className={App.forecastHigh}>13°</span><span className={App.forecastLow}> / 9°</span></div>
          </h2>
        </div>
        <div className={App.d5}>
          <h2>
            <div className={App.forecastLabel}>Tuesday</div>
            <div className={`${App.forecastHighLow} ${Weather.overcast}`}><span className={App.forecastHigh}>17°</span><span className={App.forecastLow}> / 14°</span></div>
          </h2>
        </div>
        <div className={App.d6}>
          <h2>
            <div className={App.forecastLabel}>Wednesday</div>
            <div className={`${App.forecastHighLow} ${Weather.sun}`}><span className={App.forecastHigh}>23°</span><span className={App.forecastLow}> / 17°</span></div>
          </h2>
        </div>
      </div>
    )
  }
}

export default Wearther
