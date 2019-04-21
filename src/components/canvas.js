import React from "react"

import CanvasStyles from "../components/canvas.module.scss"

export default ({children}) => (
  <div className={CanvasStyles.container}>
    {children}
  </div>
)
