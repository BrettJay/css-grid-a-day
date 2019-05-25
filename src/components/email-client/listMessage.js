import React from "react"
import Message from "./list.module.scss"

class ListMessage extends React.Component {
  render() {
    const { contact, date, subject, message } = this.props
    return (
      <div className={Message.container}>
        <h2 className={Message.contact}>{contact}</h2>
        <time className={Message.date}>{date}</time>
        <h3 className={Message.subject}>{subject}</h3>
        <p className={Message.message}>{message}</p>
      </div>
    )
  }
}

export default ListMessage
