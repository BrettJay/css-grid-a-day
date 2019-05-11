import React from "react"
import CardStyles from "./card.module.scss"
import Star from "../../images/reviews/star.svg"
import Estar from "../../images/reviews/star__outline.svg"

class Movie extends React.Component {
  render() {
    const { children, title, art, released, runtime, rating } = this.props
    const remainder = 5 - rating
    const rating_desc = `${rating} out of 5 stars`
    const coverUrl = require(`../../images/reviews/covers/${art}.jpg`)
    const artUrl = require(`../../images/reviews/profiles/${art}.jpg`)
    return (
      <div className={CardStyles.card}>
        <h2 className={CardStyles.title}>
          <div className={CardStyles.label}>{title}</div>
          <div className={CardStyles.rating}>
            { Array.apply(null, { length: rating }).map((e, i) => ( <img src={Star} alt={rating_desc} title={rating_desc}/> )) }
            { Array.apply(null, { length: remainder }).map((e, i) => ( <img src={Estar} alt={rating_desc} title={rating_desc}/> )) }
          </div>
        </h2>
        <div className={CardStyles.header}><img src={coverUrl} alt={title}/></div>
        <div className={CardStyles.metadata}>
          <img className={CardStyles.coverArt} src={artUrl} alt={title}/>
          <dl>
            <dt>Released</dt>
            <dd>{released}</dd>
            <dt>Runtime</dt>
            <dd>{runtime}</dd>
          </dl>
        </div>
        <div className={CardStyles.body}>
          {children}
        </div>
      </div>
    )
  }
}

export default Movie
