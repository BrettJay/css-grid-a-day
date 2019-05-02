import React from "react"
import Styles from "./place.module.scss"
import Main from "./main"

export default ({children}) => (
  <Main>
    <div className={Styles.container}>
      {children}
    </div>
  </Main>
)
