import React from "react"
import Todo from "./item.module.scss"

class TodoItem extends React.Component {
  
  render() {
    const { text, complete } = this.props
    const className = complete ? Todo.itemComplete : Todo.itemIncomplete
    return (
      <div className={`${Todo.item} ${className}`}>
        <input type="checkbox" defaultChecked={complete}/>
        {text}
      </div>
    )
  }
}

export default TodoItem
