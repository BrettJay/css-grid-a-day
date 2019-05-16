import Menu from "./menu.module.scss"

import React from "react"

function MilligramHeader(props) {
  return (
    <React.Fragment>
      <div className={Menu.header}/>
      <nav className={Menu.navigation}>
        <a className={Menu.active}>
          <div className={`${Menu.icon} ${Menu.home}`}/>
          <div className={Menu.label}>Feed</div>
        </a>
        <a>
          <div className={`${Menu.icon} ${Menu.search}`}/>
          <div className={Menu.label}>Search</div>
        </a>
        <a>
          <div className={`${Menu.icon} ${Menu.add}`}/>
          <div className={Menu.label}>New</div>
        </a>
        <a>
          <div className={`${Menu.icon} ${Menu.notifications}`}/>
          <div className={Menu.label}>Notifications</div>
        </a>
        <a>
          <div className={`${Menu.icon} ${Menu.profile}`}/>
          <div className={Menu.label}>Profile</div>
        </a>
      </nav>
    </React.Fragment>
  )
}

export default MilligramHeader
