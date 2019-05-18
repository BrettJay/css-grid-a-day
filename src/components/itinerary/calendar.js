import React from "react"
import CalendarStyles from "./calendar.module.scss"

import DateButton from "./datebutton"

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

class Calendar extends React.Component {
  render() {
    return (
      <div className={CalendarStyles.container}>
        <div className={CalendarStyles.calendar}>
          <div className={CalendarStyles.header}>
            {days.map(day => (
              <div key={day} className={CalendarStyles.dayHeader}>{day}</div>
            ))}
          </div>
          <div className={CalendarStyles.body}>
            <div className={CalendarStyles.button}>4</div>
            <div className={CalendarStyles.button}>5</div>
            <DateButton activeDate={this.props.activeDate} date="feb-6" buttonLabel="6" label="Feb 6" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-7" buttonLabel="7" label="Feb 7" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-8" buttonLabel="8" label="Feb 8" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-9" buttonLabel="9" label="Feb 9" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-10" buttonLabel="10" label="Feb 10" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-11" buttonLabel="11" label="Feb 11" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-12" buttonLabel="12" label="Feb 12" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-13" buttonLabel="13" label="Feb 13" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-14" buttonLabel="14" label="Feb 14" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-15" buttonLabel="15" label="Feb 15" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-16" buttonLabel="16" label="Feb 16" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-17" buttonLabel="17" label="Feb 17" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-18" buttonLabel="18" label="Feb 18" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="feb-19" buttonLabel="19" label="Feb 19" setActiveDate={this.props.setActiveDate}/>
            <div className={CalendarStyles.button}>20</div>
            <div className={CalendarStyles.button}>21</div>
            <div className={CalendarStyles.button}>22</div>
            <div className={CalendarStyles.button}>23</div>
            <div className={CalendarStyles.button}>24</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar
