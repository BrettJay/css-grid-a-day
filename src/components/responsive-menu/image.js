import React from "react"
import ImageStyles from "./image.module.scss"
import Profile from "../../images/markdown/avatar.jpg"

class Image extends React.Component {
  render() {
    const { filename, account, caption } = this.props
    const imgUrl = require(`../../images/responsive-menu/${filename}.jpg`)
    return (
      <div className={ImageStyles.post}>
        <div className={ImageStyles.account}>
          <img className={ImageStyles.profile} src={Profile} alt="Profile"/>
          {account}
        </div>
        <img className={ImageStyles.photo} src={imgUrl} alt={caption}/>
        <div className={ImageStyles.caption}>{caption}</div>
      </div>
    )
  }
}

export default Image
