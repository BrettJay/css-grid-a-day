import React from "react"
import BoardStyles from "./board.module.scss"
import Card from "./card"

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { name: 'home', colour: '#417505'},
        { name: 'work', colour: '#C11' }
      ],
      todos: [
        { text: 'Pay rent', complete: false, list: 'home'},
        { text: 'Wash dishes', complete: false, list: 'home'},
        { text: 'Landing page', complete: false, list: 'work'},
      ]
    };
  }
  render() {
    return (
      <div className={BoardStyles.container}>
        <div className={BoardStyles.header}>
          Todo
        </div>
        <div className={BoardStyles.board}>
          <Card>
            Hello World
          </Card>
        </div>
      </div>
    )
  }
}

export default Application
