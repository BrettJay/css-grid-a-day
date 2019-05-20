import React from "react"
import CalendarStyles from "./calendar.module.scss"
import Feb6 from "./feb-6"
import Feb7 from "./feb-7"
import Feb8 from "./feb-8"
import Feb9 from "./feb-9"
import Feb10 from "./feb-10"
import Feb11 from "./feb-11"
import Feb12 from "./feb-12"
import Feb13 from "./feb-13"
import Feb14 from "./feb-14"
import Feb15 from "./feb-15"
import Feb16 from "./feb-16"
import Feb17 from "./feb-17"
import Feb18 from "./feb-18"
import Feb19 from "./feb-19"

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
            <DateButton activeDate={this.props.activeDate} date="Feb6" schedule={Feb6} buttonLabel="6" label="Feb 6" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb7" schedule={Feb7} buttonLabel="7" label="Feb 7" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb8" schedule={Feb8} buttonLabel="8" label="Feb 8" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb9" schedule={Feb9} buttonLabel="9" label="Feb 9" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb10" schedule={Feb10} buttonLabel="10" label="Feb 10" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb11" schedule={Feb11} buttonLabel="11" label="Feb 11" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb12" schedule={Feb12} buttonLabel="12" label="Feb 12" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb13" schedule={Feb13} buttonLabel="13" label="Feb 13" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb14" schedule={Feb14} buttonLabel="14" label="Feb 14" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb15" schedule={Feb15} buttonLabel="15" label="Feb 15" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb16" schedule={Feb16} buttonLabel="16" label="Feb 16" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb17" schedule={Feb17} buttonLabel="17" label="Feb 17" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb18" schedule={Feb18} buttonLabel="18" label="Feb 18" setActiveDate={this.props.setActiveDate}/>
            <DateButton activeDate={this.props.activeDate} date="Feb19" schedule={Feb19} buttonLabel="19" label="Feb 19" setActiveDate={this.props.setActiveDate}/>
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
