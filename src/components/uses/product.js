import React from "react"
import Card from "./card.module.scss"

function ProductCard(props) {
  const { title, link, description, image } = props
  const imgUrl = require(`../../images/uses/products/${image}.jpg`)
  return (
    <a href={`https://${link}`} className={Card.container}>
      <div className={Card.cover}><img className={Card.coverImage} src={imgUrl} alt={title}/></div>
      <div className={Card.body}>
        <h3 className={Card.title}>{title}</h3>
        <p className={Card.summary}>{description}</p>
      </div>
    </a>
  )
}

export default ProductCard
