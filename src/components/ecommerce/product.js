import React from "react"

class Product extends React.Component {
  render() {
    return (
      <div>I am Product {this.props.name} </div>
    )
  }
}

export default Product
