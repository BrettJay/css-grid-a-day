import React from "react"
import Message from "./list.module.scss"

class ListMessage extends React.Component {
  handleClick = () => {
    this.props.setActiveEmail(this.props.message)
  }
  render() {
    const isActiveMessage = this.props.message === this.props.activeMessage
    const { contact, date, subject, excerpt } = this.props.message
    const listContainerClasses = (isActiveMessage) ? `${Message.container} ${Message.containerisActive}` : `${Message.container}`
    return (
      <div className={listContainerClasses} onClick={this.handleClick}>
        <h2 className={Message.contact}>{contact.name}</h2>
        <time className={Message.date}>{date}</time>
        <h3 className={Message.subject}>{subject}</h3>
        <p className={Message.message}>{excerpt}</p>
      </div>
    )
  }
}

export default ListMessage
