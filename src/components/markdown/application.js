import React from "react"
import Remarkable from "remarkable"

import Editor from "./editor.module.scss"

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.state = { body: 'Hello, **world**!', title: 'Post Title' };
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.body) };
  }

  render() {
    return (
      <div className={Editor.container}>
        <div className={Editor.editor}>
          <label for="markdown-title">Title:</label>
          <input type="text" id="markdown-title" placeholder="Title" onChange={this.handleTitleChange} defaultValue={this.state.title}/>
          <label for="markdown-content">Article:</label>
          <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.body}
          />
        </div>
        <div className={Editor.render}>
          <h1>{this.state.title}</h1>
          <div dangerouslySetInnerHTML={this.getRawMarkup()} />
        </div>
      </div>
    );
  }
}

export default MarkdownEditor
