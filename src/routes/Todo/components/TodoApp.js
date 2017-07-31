
import React from 'react';


const FilterLink = (props) => {
  if (props.filter == props.currentFilter) {
    return <span>{props.children}</span>
  }
  return (
    <a
      href="#"
      onClick={() => {
      props.store.dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter : props.filter
      })
    }}
    >
      {props.children}
    </a>
  )
};

const getVisibleTodos = (todos, visibilityFilter) => {
  switch(visibilityFilter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
  }
};


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  addTodo () {
    this.props.addTodo(this.input);
  }

  render() {
    const { todos, visibilityFilter } = this.props;

    let visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <input ref={node => { this.input = node } } />
        <button onClick={this.addTodo.bind(this)}>
          Add Todo
        </button>
        <ul>
          { visibleTodos.map((todo) => (
            <li
              key={todo.id}
              onClick={this.props.toggleTodo.call(this, todo.id)}
              style={{ textDecoration : todo.completed ? 'line-through' : 'none'}}
            >
                {todo.text}
            </li>
            )
          )}
        </ul>
        <p>
          <FilterLink
            store={this.props.store}
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
          >
            ALL
          </FilterLink>
          {' '}
          <FilterLink
            store={this.props.store}
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
          >
            ACTIVE
          </FilterLink>
          {' '}
          <FilterLink
            store={this.props.store}
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
          >
            COMPLETED
          </FilterLink>

        </p>
      </div>
    )
  }
}

export default TodoApp;
