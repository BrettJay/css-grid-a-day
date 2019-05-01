import React from "react"
import Selection from "./selection.module.scss"

export default () => (
  <React.Fragment>
    <span className={`${Selection.handle} ${Selection.top_left}`} />
    <span className={`${Selection.handle} ${Selection.top_center}`} />
    <span className={`${Selection.handle} ${Selection.top_right}`} />
    <span className={`${Selection.handle} ${Selection.middle_left}`} />
    <span className={`${Selection.handle} ${Selection.middle_right}`} />
    <span className={`${Selection.handle} ${Selection.bottom_left}`} />
    <span className={`${Selection.handle} ${Selection.bottom_center}`} />
    <span className={`${Selection.handle} ${Selection.bottom_right}`} />
  </React.Fragment>
)
