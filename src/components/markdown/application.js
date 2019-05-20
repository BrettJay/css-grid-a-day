import React from "react"
import Remarkable from "remarkable"

import Logo from "../../images/markdown/icon.svg"
import Menu from "../../images/markdown/menu.svg"
import Profile from "../../images/markdown/avatar.jpg"

import Editor from "./editor.module.scss"
import Theme from "./theme.module.scss"

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.state = {
      body:
`![screenshot][screen]

I’ve been meaning to properly learn CSS Grid for some time now.

Two things occurred recently. I finally got around to watching Wes Bos’ excellent (and free) [Learn Grid screencast series][lg], and my hardcover copy of Andy Clarke’s [Art Direction for the Web][a] arrived.

So late in April I thought I’d give myself a little challenge—design a layout with CSS Grid—some practical, many not-so practical—every day in May.

It’ll be a miracle if I can keep to the schedule, but so far it’s been a lot of fun. We’re only two days in though—check in with me in a week’s time![^1] 😅

You can follow my experiments in CSS grid here: [cssgrid31.brett.cool][w]

[screen]: https://brett.cool/images/blog/2019-05-02-css-grid-a-day/website.png
[lg]: https://learncssgrid.com/
[a]: https://stuffandnonsense.co.uk/artdirectionfortheweb/
[w]: https://cssgrid31.brett.cool

[^1]: Follow-up: I’m just keeping pace, barely!`,
      title: 'Introducing CSS Grid A Day'
    };
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
        <div className={Editor.header}>
          <div className={Editor.logo}>
            <img src={Logo} alt="Editor"/>
          </div>
          <div className={Editor.title}>New Post</div>
          <div className={`${Editor.avatar} ${Editor.avatar_active}`}><img src={Profile} alt="Profile"/></div>
        </div>
        <div className={Editor.menu}><img src={Menu} alt="Menu"/></div>
        <div className={Editor.editor}>
          <label htmlFor="markdown-title">Title:</label>
          <input type="text" id="markdown-title" placeholder="Title" onChange={this.handleTitleChange} defaultValue={this.state.title}/>
          <label htmlFor="markdown-content">Content:</label>
          <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.body}
          />
          <div className={Editor.actions}>
            <button>Save draft</button>
            <button>Publish</button>
          </div>
        </div>
        <div className={Editor.render}>        
          <div className={Theme.preview}>
            <div className={Theme.header}>
              <div className={Theme.logo}><svg height="23" viewBox="0 0 21 23" width="21" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd" fill="none"> <path d="M11.5334332,1.2769651 C10.8949583,0.9128639 10.1050417,0.9128639 9.46656683,1.2769651 L2.03973757,5.51224111 C1.41094377,5.87082149 1.02439024,6.52827987 1.02439024,7.23916521 L1.02439024,15.7608348 C1.02439024,16.4717201 1.41094377,17.1291785 2.03973757,17.4877589 L9.46656683,21.7230349 C10.1050417,22.0871361 10.8949583,22.0871361 11.5334332,21.7230349 L18.9602624,17.4877589 C19.5890562,17.1291785 19.9756098,16.4717201 19.9756098,15.7608348 L19.9756098,7.23916521 C19.9756098,6.52827987 19.5890562,5.87082149 18.9602624,5.51224111 L11.5334332,1.2769651 Z M19.476979,4.64877906 C20.4201697,5.18664963 21,6.1728372 21,7.23916521 L21,15.7608348 C21,16.8271628 20.4201697,17.8133504 19.476979,18.3512209 L12.0501497,22.5864969 C11.0924374,23.1326488 9.90756261,23.1326488 8.94985025,22.5864969 L1.52302098,18.3512209 C0.579830296,17.8133504 3.41082176e-14,16.8271628 3.2970916e-14,15.7608348 L2.84217094e-14,7.23916521 C2.84217094e-14,6.1728372 0.579830296,5.18664963 1.52302098,4.64877906 L8.94985025,0.413503052 C9.90756261,-0.13264875 11.0924374,-0.13264875 12.0501497,0.413503052 L19.476979,4.64877906 Z" fillRule="nonzero" fill="#000000"></path> <path d="M7.00911805,7.71341447 L6.11213053,7.23043319 L10.0515062,0.258509357 L10.9484938,0.741490643 L7.00911805,7.71341447 Z M10.3370396,6.45746853 L10.052728,5.4967551 L17.1049925,3.50792165 L17.8385521,4.3419411 L10.3370396,6.45746853 Z M14.4450081,7.90908621 L14.942187,7.03476144 L20.6952054,10.1522496 L20.5611121,11.2233259 L14.4450081,7.90908621 Z M15.8995595,11.639866 L16.8830541,11.360134 L18.8322905,17.8908904 L17.9844348,18.6250695 L15.8995595,11.639866 Z M14.2449959,15.2829009 L15.1421992,15.7655 L11.7472377,21.7801213 L11.2046992,22.7412996 L10.3074959,22.2587004 L10.4305133,22.0407589 L14.2449959,15.2829009 Z M10.4881959,16.7029595 L10.7679017,17.6649604 L4.32284121,19.4507161 L3.41181032,18.6636386 L10.4881959,16.7029595 Z M6.80907446,15.0869626 L6.31217411,15.9614383 L0.513465738,12.8214938 L0.527709111,11.6856641 L6.80907446,15.0869626 Z M5.35782907,11.3600602 L4.37437844,11.6399398 L2.32151618,4.76592583 L3.21378464,4.18072263 L5.35782907,11.3600602 Z" fillRule="nonzero" fill="#000000"></path> <path d="M10.6280488,6.34642182 L6.94418446,7.8536078 L5.41503904,11.5 L6.94418446,15.1463922 L10.6280488,16.6535782 L14.3119131,15.1463922 L15.8410585,11.5 L14.3119131,7.8536078 L10.6280488,6.34642182 Z M10.8260302,5.34314664 L14.9035344,7.01138324 C15.028813,7.06263867 15.1281041,7.1603746 15.1795667,7.28309206 L16.8685243,11.3105715 C16.9194329,11.431968 16.9194329,11.568032 16.8685243,11.6894285 L15.1795667,15.7169079 C15.1281041,15.8396254 15.028813,15.9373613 14.9035344,15.9886168 L10.8260302,17.6568534 C10.6993794,17.7086702 10.5567182,17.7086702 10.4300674,17.6568534 L6.35256312,15.9886168 C6.22728458,15.9373613 6.12799348,15.8396254 6.07653087,15.7169079 L4.3875733,11.6894285 C4.33666466,11.568032 4.33666466,11.431968 4.3875733,11.3105715 L6.07653087,7.28309206 C6.12799348,7.1603746 6.22728458,7.06263867 6.35256312,7.01138324 L10.4300674,5.34314664 C10.5567182,5.29132977 10.6993794,5.29132977 10.8260302,5.34314664 Z" fillRule="nonzero" fill="#000000"></path></g></svg></div>
              <ol>
                <li>About</li>
                <li>Photoessays</li>
                <li>Talks</li>
                <li className={Theme.active_nav}>Blog</li>
              </ol>
            </div>
            <div className={Editor.post}>
              <h1>{this.state.title}</h1>
              <div dangerouslySetInnerHTML={this.getRawMarkup()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownEditor
