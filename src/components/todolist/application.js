import React from "react"
import BoardStyles from "./board.module.scss"
import CardStyles from "./card.module.scss"
import Card from "./card"
import Item from "./item"

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { name: 'home', colour: '#488600'},
        { name: 'CSS Grid a day', colour: '#3F51B5' },
        { name: 'Side Projects', colour: '#e05f00' },
        { name: 'work', colour: '#cc113b' },
        { name: 'Backlog', colour: '#3c1d46' },
      ],
      todos: [
        { text: 'Pay rent', complete: true, list: 'home'},
        { text: 'Go to gym', complete: true, list: 'home'},
        { text: 'Wash dishes', complete: false, list: 'home'},
        { text: 'Do laundry', complete: false, list: 'home'},
        { text: 'Plan week', complete: false, list: 'home'},
        { text: 'Landing page', complete: false, list: 'work'},
        { text: 'Video production', complete: false, list: 'work'},
        { text: 'Complete operations', complete: false, list: 'work'},
        { text: 'Grid systems', complete: true, list: 'CSS Grid a day'},
        { text: 'Signup form', complete: true, list: 'CSS Grid a day'},
        { text: 'Frontend-opoly', complete: true, list: 'CSS Grid a day'},
        { text: 'Weekly schedule', complete: true, list: 'CSS Grid a day'},
        { text: 'Van de Graaf', complete: true, list: 'CSS Grid a day'},
        { text: 'Broadsheet', complete: true, list: 'CSS Grid a day'},
        { text: 'Blog Composer', complete: true, list: 'CSS Grid a day'},
        { text: 'Mixin Collage', complete: true, list: 'CSS Grid a day'},
        { text: 'Milligram feed', complete: true, list: 'CSS Grid a day'},
        { text: 'Dashboard', complete: true, list: 'CSS Grid a day'},
        { text: 'Review cards', complete: true, list: 'CSS Grid a day'},
        { text: 'Todo list', complete: true, list: 'CSS Grid a day'},
        { text: 'Email application', complete: false, list: 'CSS Grid a day'},
        { text: 'Ingrid', complete: true, list: 'Side Projects'},
        { text: 'CSS Grid a Day', complete: false, list: 'Side Projects'},
        { text: 'Suitup', complete: false, list: 'Side Projects'},
        { text: 'Go<Figure>', complete: false, list: 'Side Projects'},
        { text: 'Watch Detective Pikachu', complete: true, list: 'Backlog'},
        { text: 'Watch Avengers Endgame', complete: true, list: 'Backlog'},
        { text: 'Read ‘The Death of Truth’', complete: false, list: 'Backlog'},
        { text: 'Watch You Were Never Really Here', complete: true, list: 'Backlog'},
      ]
    };
  }

  render() {
    return (
      <div className={BoardStyles.container}>
        <div className={BoardStyles.header}>
          <h1>Todo</h1>
        </div>
        <div className={BoardStyles.board}>
          {this.state.lists.map(list => (
            <Card name={list.name} key={list.name} colour={list.colour}>
              {this.state.todos.filter(todo => todo.list === list.name).map(todo => (
                <Item key={`${list.name}${todo.text}`} text={todo.text} complete={todo.complete}/>
              ))}
            </Card>
          ))}
          <div className={CardStyles.empty}>
            <button>+ New List</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Application
