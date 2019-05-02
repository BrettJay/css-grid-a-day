import React from "react"

function story(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        <strong>{props.category}</strong> {" "}
        {props.children}
      </p>
    </div>
  )
}

export default story
