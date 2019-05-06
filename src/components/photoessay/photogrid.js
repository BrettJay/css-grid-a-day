import React from "react"
import PhotoessayStyles from "./photoessay.module.scss"

function Photogrid(props) {
  return (
    <div className={PhotoessayStyles.photoGrid}>
      {props.children}
    </div>
  )
}

export default Photogrid
