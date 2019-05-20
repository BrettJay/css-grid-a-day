import Menu from "./menu.module.scss"

import React from "react"

function MilligramHeader(props) {
  const { active } = props
  return (
    <React.Fragment>
      <div className={Menu.header}/>
      <nav className={Menu.navigation}>
        <a className={active === 'home' ? `${Menu.active}` : ''}>
          <div className={Menu.icon}>
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#000"><path d="m23 11h-22c-.55228475 0-1-.4477153-1-1 0-.33643382.16614033-.63406348.42085195-.81531995l10.88470315-8.90422733c.1798765-.17363969.424687-.28045272.6944449-.28045272s.5145684.10681303.6944449.28045272l6.3055551 5.158257v-1.43870972c0-.552.448-1 1-1h1c.552 0 1 .448 1 1v3.89285858l1.579148 1.29182147c.2547117.18125647.420852.47888613.420852.81531995 0 .5522847-.4477153 1-1 1z"/><path d="m2 10v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-12zm17 11h-14v-8h14z"/></g></svg>
          </div>
          <div className={Menu.label}>Feed</div>
        </a>
        <a>
          <div className={Menu.icon}>
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2" transform="translate(1 1)"><circle cx="9" cy="9" r="9"/><path d="m22 22-6.563-6.563" strokeLinecap="round"/></g></svg>
          </div>
          <div className={Menu.label}>Search</div>
        </a>
        <a>
          <div className={Menu.icon}>
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 13h-4v4c0 .553-.448 1-1 1s-1-.447-1-1v-4h-4c-.552 0-1-.447-1-1s.448-1 1-1h4v-4c0-.553.448-1 1-1s1 .447 1 1v4h4c.552 0 1 .447 1 1s-.448 1-1 1z"/></svg>
          </div>
          <div className={Menu.label}>New</div>
        </a>
        <a>
          <div className={Menu.icon}>
            <svg height="24" viewBox="0 0 26 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="m12 22c-.452 0-.865-.156-1.2-.409 0 0-10.8-8.705-10.8-15.046 0-3.615 2.93-6.545 6.545-6.545 3.455 0 5.455 3 5.455 3 .0091921-.01376088 2.0079331-3 5.455-3 3.615 0 6.545 2.93 6.545 6.545 0 6.341-10.8 15.046-10.8 15.046-.335.253-.748.409-1.2.409z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1 1)"/></svg>
          </div>
          <div className={Menu.label}>Notifications</div>
        </a>
        <a className={active === 'profile' ? `${Menu.active}` : ''}>
          <div className={Menu.icon}>
            <svg height="23" viewBox="0 0 22 23" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m17 6c0-3.314-2.686-6-6-6s-6 2.686-6 6v1c0 3.314 2.686 6 6 6s6-2.686 6-6c0-.169 0-.831 0-1zm4.625 14.09c-1.479-1.922-6.621-4.09-10.627-4.09s-9.146 2.167-10.625 4.09c-.914 1.189-.043 2.91 1.456 2.91h18.34c1.499 0 2.37-1.721 1.456-2.91z"/></svg>
          </div>
          <div className={Menu.label}>Profile</div>
        </a>
      </nav>
    </React.Fragment>
  )
}

export default MilligramHeader
