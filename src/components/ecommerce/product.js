import React from "react"
import ProductStyles from "./product.module.scss"
import { formatPrice } from "./helpers"

class Product extends React.Component {
  render() {
    const { price, name, image } = this.props
    const imgUrl = require(`../../images/ecommerce/coffee/${image}.png`)
    return (
      <div className={ProductStyles.item}>
        <img className={ProductStyles.image} src={imgUrl} alt={name}/>
        <div className={ProductStyles.caption}>
          <h3>{name}</h3>
          <h4>{formatPrice(price)}</h4>
        </div>
      </div>
    )
  }
}

export default Product
