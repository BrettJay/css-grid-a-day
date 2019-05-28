import React from "react"
import LayoutStyles from "./layout.module.scss"
import Product from "./product"
class Ecommerce extends React.Component {
  render() {
    return (
      <div className={LayoutStyles.container}>
        <div className={LayoutStyles.header}>CAFFIEND</div>
        
        <div className={LayoutStyles.products}>
          <Product
            image="razzle-dazzle"
            name="Razzle Dazzle"
            style="filter"
            price={1600}/>
          <Product
            image="benedita-tavares"
            name="Benedita Tavares"
            style="espresso"
            price={1600}/>
          <Product
            image="damn-fine"
            name="This is (Damn) Fine"
            style="filter"
            price={1600}/>
          <Product
            image="dana-koprivova"
            name="Dana Kopřivová"
            style="filter"
            price={1600}/>
          <Product
            image="elsi-hansdottir"
            name="Elsi Hansdottir"
            style="filter"
            price={1600}/>
          <Product
            image="ester-bednarova"
            name="Ester Bednarova"
            style="filter"
            price={1600}/>
          <Product
            image="harsha-buksh"
            name="Harsha Buksh"
            style="filter"
            price={1600}/>
          <Product
            image="maria-paula-morterero"
            name="María Paula Monterero"
            style="filter"
            price={1600}/>
          <Product
            image="waiano-akarana"
            name="Waiano Akarana"
            style="filter"
            price={1600}/>
          <Product
            image="rafeeda-el-nouri"
            name="Rafeeda El Nouri"
            style="filter"
            price={1600}/>
        </div>        
      </div>
    )
  }
}

export default Ecommerce
