import React from 'react';
import Todo from './Todo';

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

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(state.todos, state.visibilityFilter)
        }
        onTodoClick={(id) => {
          store.dispatch({
            type : 'TOGGLE_TODO',
            id : id
          })
        }}
      />
    )
  }
}

const TodoList = ({
  todos, onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        onClick={onTodoClick.call(this, todo.id)}
        {...todo}
      />)}
  </ul>
);

export default VisibleTodoList;
