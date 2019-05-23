import React from "react"
import Table from "./table.module.scss"

function Element(props) {
  const { abbr, title, background } = props
  return (
    <div className={Table.element} style={{backgroundColor: background }}>
      <h2 className={Table.abbreviation}>{abbr}</h2>
      <p className={Table.title}>{title}</p>  
      <div className={Table.gradient}/>
    </div>
  )
}

export default Element
