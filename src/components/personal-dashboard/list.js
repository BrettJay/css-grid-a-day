import React from "react"
import ListStyles from "./list.module.scss"

function ListItem(props) {
  return (
    <ul className={ListStyles.container}>
      {props.children}
    </ul>
  )
}

export default ListItem
