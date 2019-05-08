import React from "react"
import Collage from "./collage.module.scss"

class Talk extends React.Component {
  render() {
    const { filename, speaker, title, link } = this.props
    const imgUrl = require(`../../images/mixin-collage/talks/${filename}.jpg`)
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${Collage.item} ${Collage.talkItem}`}
        title={`Watch ${title} by ${speaker}`}>
        <div className={Collage.talk}>
          <div className={Collage.playIcon}>
            <svg height="37" viewBox="0 0 37 37" width="37" xmlns="http://www.w3.org/2000/svg"> <g fillRule="evenodd" fill="none" transform="translate(1 1)"> <circle cx="17.5" cy="17.5" r="17.5" strokeWidth="2" stroke="#FFFFFF"></circle> <polygon fill="#FFFFFF" points="24.555 17.426 13.051 24.721 13.051 10.13"></polygon></g></svg>
          </div>
          <p className={Collage.speaker}>{speaker}</p>
          <h2 className={Collage.talkTitle}>{title}</h2>
        </div>
        <img src={imgUrl} alt={`Watch ${title} by ${speaker}`} />
      </a>
    )
  }
}

export default Talk
