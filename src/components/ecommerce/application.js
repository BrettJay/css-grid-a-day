import React from "react"
import LayoutStyles from "./layout.module.scss"
import ProductStyles from "./product.module.scss"
import Product from "./product"

import FilterIcon from "../../images/ecommerce/filter.svg"
import EspressoIcon from "../../images/ecommerce/espresso.svg"
class Ecommerce extends React.Component {
  render() {
    return (
      <div className={LayoutStyles.container}>
        <div className={LayoutStyles.sidebar}>
          <div className={LayoutStyles.logo}>
          </div>
        </div>
        <div className={LayoutStyles.billboard}>
          <div className={LayoutStyles.Bcaption}>
            <h2>Shop</h2>
            <h1>Fresh ‘Cawfee</h1>
            <p>Brew the freshest beans with the freshest coffee from CAFFIEND.</p>
          </div>
        </div>
        <div id="cawfee" className={LayoutStyles.products}>
          <div className={ProductStyles.category}>
            <div className={`${ProductStyles.categoryBody} ${ProductStyles.filterCategory}`}>
              <img src={FilterIcon} alt="Filter Roast"/>
              <h3>Filter Roast</h3>
              <p>For pourover, aeropress, and chemex. Best served black.</p>
            </div>
          </div>
          <Product
            image="razzle-dazzle"
            name="Razzle Dazzle"
            color="#348992"
            style="filter"
            price={1600}/>
          <Product
            image="damn-fine"
            name="This is (Damn) Fine"
            style="filter"
            color="#A44705"
            price={1600}/>
          <Product
            image="elsi-hansdottir"
            name="Elsi Hansdottir"
            color="#903c88"
            style="filter"
            price={1600}/>
          <Product
            image="ester-bednarova"
            name="Ester Bednarova"
            color="#9e3331"
            style="filter"
            price={1600}/>
          <Product
            image="harsha-buksh"
            name="Harsha Buksh"
            color="#087324"
            style="filter"
            price={1600}/>
          <Product
            image="maria-paula-morterero"
            name="María Paula Monterero"
            color="#8e8532"
            style="filter"
            price={1600}/>
          <Product
            image="waiano-akarana"
            name="Waiano Akarana"
            color="#29618e"
            style="filter"
            price={1600}/>
          <Product
            image="rafeeda-el-nouri"
            name="Rafeeda El Nouri"
            style="filter"
            color="#a02e6a"
            price={1600}/>
          <div className={ProductStyles.category}>
            <div className={ProductStyles.categoryBody}>
              <img src={EspressoIcon} alt="Espresso Roast"/>
              <h3>Espresso Roast</h3>
              <p>For coffees brewed with an espresso machine. Served black, or with milk.</p>
            </div>
          </div>
          <Product
            image="benedita-tavares"
            name="Benedita Tavares"
            style="espresso"
            color="#222569"
            price={1600}/>
          <Product
            image="dana-koprivova"
            name="Dana Kopřivová"
            color="#821958"
            style="espresso"
            price={1600}/>
        </div>        
      </div>
    )
  }
}

export default Ecommerce
