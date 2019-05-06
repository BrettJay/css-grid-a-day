import React from "react"
import PhotoessayStyles from "./photoessay.module.scss"

export default ({ children }) => (
  <div className={PhotoessayStyles.article}>
    {children}
  </div>
)
