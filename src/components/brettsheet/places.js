import React from "react"
import Styles from "./place.module.scss"


export default ({children}) => (
  <div className={Styles.container}>
    {children}
  </div>
)
