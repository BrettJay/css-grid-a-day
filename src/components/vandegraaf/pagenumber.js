import React from "react"
import Canon from "./canon.module.scss"

function PageNumber(props) {
  return (
    <div className={`${Canon.pagenumber} ${Canon[props.side]}`}>Page {props.children}</div>
  )
}

export default PageNumber
