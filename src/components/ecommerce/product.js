import React from "react"
import ProductStyles from "./product.module.scss"
import { formatPrice } from "./helpers"

class Product extends React.Component {
  render() {
    const { price, name, image, color } = this.props
    const imgUrl = require(`../../images/ecommerce/coffee/${image}.png`)
    return (
      <div className={ProductStyles.item}>
        <img className={ProductStyles.image} src={imgUrl} alt={name}/>
        <div className={ProductStyles.caption}>
          <h3 className={ProductStyles.name} style={{ color: color }}>{name}</h3>
          <h4 className={ProductStyles.price}>{formatPrice(price)}</h4>
        </div>
        <div className={ProductStyles.actions}>
          <div style={{ backgroundColor: color, borderColor: color }} className={ProductStyles.primaryAction}>Add to cart</div>
          <div style={{ color: color }} className={ProductStyles.action}>Check out</div>
        </div>
      </div>
    )
  }
}

export default Product
