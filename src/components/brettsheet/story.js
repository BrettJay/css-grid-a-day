import React from "react"
import StoryStyles from "./story.module.scss"

function story(props) {
  return (
    <div className={StoryStyles.item}>
      { props.img &&
        <img className={StoryStyles.image} src={props.img} alt={props.title}/>
      }
      <div className={StoryStyles.caption}>
        <h2>{props.title}</h2>
        <p>
          <strong>{props.category}</strong> {" "}
          {props.children}
        </p>  
      </div>
    </div>
  )
}

export default story
