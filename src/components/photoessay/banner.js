import React from "react"
import BannerStyles from "./banner.module.scss"

function Banner(props) {
  return (
    <div className={BannerStyles.container}>
      <div className={BannerStyles.caption}>
        <h1 className={BannerStyles.title}>{props.title}</h1>
        <h2 className={BannerStyles.subtitle}>{props.subtitle}</h2>
      </div>
    </div>
  )
}

export default Banner;
