import React from "react"
import Remarkable from "remarkable"
import LogStyles from "./log.module.scss"
import May30 from "./may30"

class Log extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      day: May30
    }
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.day.entry) };
  }

  render() {
    return (
      <div className={LogStyles.container}>
        <div className={LogStyles.navHead}></div>
        <div className={LogStyles.navBody}>Nav</div>
        <div className={LogStyles.entryHead}>
          <div className={LogStyles.entryCal}>
            <div className={LogStyles.entryCalMonth}>{this.state.day.month}</div>
            <div className={LogStyles.entryCalDate}>{this.state.day.date}</div>
          </div>
          <h1>{this.state.day.name}</h1>
        </div>
        <div className={LogStyles.entryImage}></div>
        <div className={LogStyles.entryBody}>
          <div className={LogStyles.entryText} dangerouslySetInnerHTML={this.getRawMarkup()} />
          <div className={LogStyles.entryMeta}>
            <dl>
              <dt>Places:</dt>
              <dd>
                {this.state.day.locations.map(place => (
                  <div key={place.label} className={LogStyles[place.type]}>{place.label}</div>
                ))}
              </dd>
            </dl>
            <dl>
              <dt>Weather:</dt>
              <dd>
                <div>{this.state.day.weather.min}/{this.state.day.weather.max}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}

export default Log
