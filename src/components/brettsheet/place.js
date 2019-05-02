import React from "react"
import PlaceStyles from "./place.module.scss"

function place(props) {
  return (
    <div className={PlaceStyles.item}>
      { props.img &&
        <img className={PlaceStyles.image} src={props.img} alt={props.title}/>
      }
      <h2>{props.title}</h2>
      <p><strong>{props.category}</strong></p>  
    </div>
  )
}

export default place
