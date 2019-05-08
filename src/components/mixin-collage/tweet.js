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
            </a>
          </cite>
        </div>
      </div>
    )
  }
}

export default Talk
