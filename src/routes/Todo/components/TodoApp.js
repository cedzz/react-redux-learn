
import React from 'react';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  addTodo () {
    this.props.addTodo(this.input);
  }

  render() {
    return (
      <div>
        <input ref={node => { this.input = node } } />
        <button onClick={this.addTodo.bind(this)}>
          Add Todo
        </button>
        <ul>
          { this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default TodoApp;
