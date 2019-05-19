import React from "react"
import PhotoessayStyles from "./photoessay.module.scss"

function Photogrid(props) {
  const { children, design } = props
  return (
    <div className={`${PhotoessayStyles.photoGrid} ${PhotoessayStyles[design]}`}>
      {children}
    </div>
  )
}

export default Photogrid
