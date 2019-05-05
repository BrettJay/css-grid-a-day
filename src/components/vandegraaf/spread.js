import React from "react"
import Canon from "./canon.module.scss"

function Spread(props) {
  return (
    <div className={Canon.wrapper}>
      <div className={Canon.ratio}>
        <div className={Canon.page}>
          <div className={Canon.grid}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spread
