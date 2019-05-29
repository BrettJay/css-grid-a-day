import React from "react"
import App from "./application.module.scss"
import Place from "./place.js"

class MelbApplication extends React.Component {
  render() {
    return (
      <div className={App.layout}>
        <div className={App.header}>
          Melbourne Places
        </div>
        <div className={App.main}>
          <Place
            name="Maha"
            category="restaurant"
            summary="A high-end Middle Eastern restaurant with amazing bread, and 2, 4 and 6 course degustation options."
            link="kYftsnBAw9DLLdfR9"
            address="21 Bond St"
            suburb="Melbourne"
            postcode="3000"
            />
          <Place
            name="Smith and Daughters"
            category="brunch"
            summary="A good vegan brunch option, and who can say no to cocktails at brunch? (Unless you happen to be supremely hungover)."
            link="J5MS1ZaLmFYHuHo7A"
            address="175 Brunswick St"
            suburb="Fitzroy"
            postcode="3065"
            />
          <Place
            name="Rockwell and Sons"
            category="burgers"
            summary="Great—if small—smashed pattie brugers, but not the fondest of the extra crispy bacon they used."
            link="TMQ8CBoySge1vcUa6"
            address="288 Smith St"
            suburb="Collingwood"
            postcode="3066"
            />
          <Place
            name="Bodega"
            category="bar"
            summary="Excellent Mexican cocktails, beer, and food."
            link="wNpLoaDo49n5BAXK7"
            address="55 Little Bourke St"
            suburb="Melbourne"
            postcode="3000"
            />
          <Place
            name="Slowbeer"
            category="beer"
            summary="Great—if small—smashed pattie brugers, but not the fondest of the extra crispy bacon they used."
            link="yaT5JNn4aMrEhDjM8"
            address="351 Smith St"
            suburb="Fitzroy"
            postcode="3065"
            />
          <Place
            name="Builders Arms Hotel"
            category="beer"
            summary="Great—if small—smashed pattie brugers, but not the fondest of the extra crispy bacon they used."
            link="Jf46eUi9NnRgHmfp9"
            address="211 Gertrude St"
            suburb="Fitzroy"
            postcode="3065"
            />
          <Place
            name="Seamstress"
            category="bar"
            summary="A restaurant and bar with fancy asian share plates."
            link="gaYF6k2GxpPExjqNA"
            address="113 Lonsdale St"
            suburb="Melbourne"
            postcode="3000"
            />
          <Place
            name="Lee Ho Fook"
            category="bar"
            summary="An asian bar and restaurant With some excellent savoury pancakes.."
            link="gaYF6k2GxpPExjqNA"
            address="11-15 Duckboard Pl"
            suburb="Melbourne"
            postcode="3000"
            />
          <Place
            name="Morrocan Soup Bar"
            category="restaurant"
            summary="A Melbourne institution by this point. Still slinging some of the tastiest Thai and an excellent cocktail menu."
            link="P2RfmJcs8BAGPnqD6"
            address="183 St Georges Rd"
            suburb="Fitzroy North"
            postcode="3068"
            />
          <Place
            name="The Everleigh"
            category="bar"
            summary="A fanncy cocktail bar in Fitzoy"
            link="wNpLoaDo49n5BAXK7"
            address="150-156 Gertrude St"
            suburb="Fitzroy"
            postcode="3065"
            />
        </div>
      </div>
    )
  }
}

export default MelbApplication
