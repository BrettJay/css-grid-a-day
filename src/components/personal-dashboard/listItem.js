import React from "react"
import ListStyles from "./list.module.scss"

function ListItem(props) {
  const listType = props.type
  if (listType === "todo") {
    return (
      <li className={`${ListStyles.item} ${ListStyles[props.type]} ${ListStyles[props.complete.toString()]}`}>
        <input type="checkbox" name={`${props.children}`} defaultChecked={props.complete}/>
        <h3 className={ListStyles.itemTitle}>{props.children}</h3>
        <p className={ListStyles.itemSubTitle}>{props.list}</p>
      </li>
  )} else if (listType === "email") {
    return (
      <li className={`${ListStyles.item} ${ListStyles[props.type]}`}>
        <h3 className={ListStyles.itemTitle}>{props.children}</h3>
        <p className={ListStyles.itemSubTitle}>{props.from} · {props.date}</p>
      </li>
  )} else if (listType === "place") {
    return (
      <li className={`${ListStyles.item} ${ListStyles[props.type]}`}>
        {props.children}
      </li>
  )} else {
    return (
      <li className={`${ListStyles.item} ${ListStyles[props.type]}`}>
        {props.children}
      </li>
    )
  }
}

export default ListItem
