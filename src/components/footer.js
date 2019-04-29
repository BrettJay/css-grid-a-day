import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

import FooterStyles from "./footer.module.scss"

function Footer(props, children) {
  return (
    <div className={FooterStyles.container}>
      <div className={FooterStyles.grid}>
        <div className={FooterStyles.signoff}>
          <div className={FooterStyles.logo}>
            <Link to="/">
              <img src={Logo} alt="CSS Grid a Day" title="CSS Grid a Day" />
            </Link>
          </div>
          <div className={FooterStyles.title}>
            <h3>This is the ‘CSS Grid a day’ entry for May {props.date}.</h3>
          </div>
          <div className={FooterStyles.caption}>
            <p>
              An example of using CSS grid every day, running from
              May&nbsp;1–31st,&nbsp;2019.
            </p>
          </div>
        </div>
        <div className={FooterStyles.entry}>
          <h4>About this entry</h4>
          {props.children}
        </div>
        <div className={FooterStyles.links}>
          {props.prev ? (
            <Link
              className={FooterStyles.prevLink}
              to={`/may-${props.date - 1}`}
            >
              ← Prev
            </Link>
          ) : (
            <div className={FooterStyles.prevLink}>← Prev</div>
          )}
          <Link className={FooterStyles.indexLink} to="/">
            Index
          </Link>
          {props.next ? (
            <Link
              className={FooterStyles.nextLink}
              to={`/may-${props.date + 1}`}
            >
              Next →
            </Link>
          ) : (
            <div className={FooterStyles.nextLink}>Next →</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer
