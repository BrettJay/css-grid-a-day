import React from "react"
import ListStyles from "./list.module.scss"

function ListItem(props) {
  return (
    <li className={`${ListStyles.item} ${ListStyles[props.type]}`}>
      {props.children}
    </li>
  )
}

export default ListItem
