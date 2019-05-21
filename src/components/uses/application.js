import React from "react"
import Card from "./card.module.scss"

function getHostName(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  }
  else {
    return null;
  }
}

function ApplicationCard(props) {
  const {title, link, description, icon} = props
  const imgUrl = require(`../../images/uses/applications/${icon}.png`)
  return (
    <a href={link} className={Card.container}>
      <div className={Card.body}>
        <img className={Card.appIcon} src={imgUrl} alt={title}/>
        <h3 className={Card.title}>{title}</h3>
        <p className={Card.summary}>{description}</p>
      </div>
      <div className={Card.link}>{getHostName(link)}<span className={Card.arrow}>→</span></div>
    </a>
  )
}

export default ApplicationCard
