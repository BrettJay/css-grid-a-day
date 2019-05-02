import React from "react"
import Styles from "./main.module.scss"

export default ({children}) => (
  <div className={Styles.main}>
    {children}
  </div>
)
