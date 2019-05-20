import React from "react"
import Card from "./card.module.scss"

function ProductCard(props) {
  const {title, link, description, image} = props
  const imgUrl = require(`../../images/uses/product/${icon}.jpeg`)
  return (
    <a href={`https://${link}`} className={Card.container}>
      <div className={Card.body}>
        <img className={Card.appIcon} src={imgUrl} alt={title}/>
        <h3 className={Card.title}>{title}</h3>
        <p className={Card.summary}>{description}</p>
      </div>
      <div className={Card.link}>{link} <span className={Card.arrow}>→</span></div>
    </a>
  )
}

export default ProductCard
