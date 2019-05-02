import React from "react"
import Styles from "./header.module.scss"

import Main from "./main"

export default () => (
  <div className={Styles.header}>
    <div className={Styles.logo}>
      <h1>Brettsheet</h1>
    </div>
    <Main>
      <div className={Styles.navigation}>
        <div className={Styles.link}>Perth</div>
        <div className={Styles.link}>Melbourne</div>
        <div className={Styles.link}>Tokyo</div>
        <div className={Styles.link}>Kyoto</div>
        <div className={Styles.link}>Osaka</div>
      </div>
    </Main>
  </div>
)
