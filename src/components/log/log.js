import React from "react"
import Remarkable from "remarkable"
import LogStyles from "./log.module.scss"
import Calendar from "./calendar"
import DayImage from "./image"

import May27 from "./may27"
import May28 from "./may28"
import May29 from "./may29"
import May30 from "./may30"

class Log extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      day: May30,
      days: [May27, May28, May29, May30]
    }
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.day.entry) };
  }

  setActiveDay = (day) => {
    this.setState(state => ({
      day: day
    }))
  }

  render() {
    return (
      <div className={LogStyles.container}>
        <Calendar setActiveDay={this.setActiveDay} dates={this.state.days} activeDay={this.state.day} setActiveDay={this.setActiveDay}/>
        <div className={LogStyles.entryHead}>
          <div className={LogStyles.entryCal}>
            <div className={LogStyles.entryCalMonth}>{this.state.day.month}</div>
            <div className={LogStyles.entryCalDate}>{this.state.day.date}</div>
          </div>
          <h1>{this.state.day.name}</h1>
        </div>
        <div className={LogStyles.entryImage}>
          {this.state.day.img &&
            <DayImage filename={this.state.day.img}/>
          }
        </div>
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
