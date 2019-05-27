import React from "react"
import Remarkable from "remarkable"

import Collage from "./collage.module.scss"

class Talk extends React.Component {
  constructor(props) {
    super(props);
    this.renderTweet = this.renderTweet.bind(this);
  }

  renderTweet(q) {
    const md = new Remarkable();
    return { __html: md.render(q) };
  }

  render() {
    const { account, quote, id } = this.props
    return (
      <div className={`${Collage.item} ${Collage.large}`}>
        <div className={Collage.quote}>
          <blockquote dangerouslySetInnerHTML={this.renderTweet(quote)}/>  
          <cite>
            <a href={`https://twitter.com/${account}`}>@{account}</a>
            <a href={`https://twitter.com/${account}/status/${id}`}>
              View tweet
              <svg  className={Collage.arrow} height="8" viewBox="0 0 29 8" width="29" xmlns="http//www.w3.org/2000/svg"> <g fillRule="evenodd" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="#FFFFFF" transform="translate(1)"> <path d="M0.28064343,4 L26.6666667,4"></path> <polyline points="22.667 0 26.667 4 22.667 8"></polyline> </g> </svg>
            </a>
          </cite>
        </div>
      </div>
    )
  }
}

export default Talk
