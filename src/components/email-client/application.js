import React from "react"
import Remarkable from "remarkable"
import Application from "./application.module.scss"
import Email from "./email.module.scss"
import ListMessage from "./listMessage"
import Msg1 from "./msg1"
import Msg2 from "./msg2"

class EmailApplication extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      sidebar: false,
      view: false,
      message: Msg1,
      messages: [ Msg1, Msg2 ]
    }
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.message.body) };
  }

  setActiveEmail = (message) => {
    this.setState(state => ({
      message: message
    }))
  }
  
  render() {
    const sideBarClasses = this.state.sidebar ? `${Application.sidebar} ${Application.sidebarActive}` : `${Application.sidebar}`
    const viewClasses = this.state.view ? `${Application.view} ${Application.viewActive}` : `${Application.view}`
    return (
      <div className={Application.container}>
        <div className={Application.header}>
          <div className={Application.headmenu}>
            <button>Menu</button>
            <button>Compose</button>
          </div>
          <div className={Application.headlist}>
            <input type="text" placeholder="Search"/>
          </div>
          <div className={Application.headview}/>
        </div>
        <div className={sideBarClasses}>
          <ol className={Application.menu}>
            <li>Inbox</li>
            <li>Unread</li>
            <li>Archive</li>
            <li>All Mail</li>
            <li>Sent</li>
            <li>Drafts</li>
            <li>Trash</li>
            <li>Spam</li>
          </ol>
        </div>
        <div className={Application.list}>
          {this.state.messages.map(message => (
            <ListMessage
              key={message.subject}
              message={message}
              setActiveEmail={this.setActiveEmail}
              activeMessage={this.state.message}/>
          ))}
        </div>
        <div className={viewClasses}>
          <div className={Email.header}>
            <h1 className={Email.subject}>
              {this.state.message.subject}
            </h1>
            <h2 className={Email.contact}>
              <div className={Email.contactName}>{this.state.message.contact.name}</div>
              <div className={Email.contactEmail}>{this.state.message.contact.email}</div>
            </h2>
          </div>
          <div className={Email.body}>
            <div dangerouslySetInnerHTML={this.getRawMarkup()} />
          </div>
        </div>
      </div>
    )
  }
}

export default EmailApplication
