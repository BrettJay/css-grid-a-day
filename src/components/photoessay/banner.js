import React from "react"
import BannerStyles from "./banner.module.scss"
class Banner extends React.Component {
  render() {
    const { title, subtitle, file } = this.props
    const imgUrl = require(`../../images/photoessay/${file}.jpg`)
    return (
      <div className={BannerStyles.container}>
        <div className={BannerStyles.caption}>
          <h1 className={BannerStyles.title}>{title}</h1>
          <h2 className={BannerStyles.subtitle}>{subtitle}</h2>
        </div>
        <img src={imgUrl} alt={title} className={BannerStyles.image}/>
      </div>
    )
  }
}

export default Banner
