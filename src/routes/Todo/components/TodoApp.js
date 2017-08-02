import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

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

let nextTodoId = 0;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, visibilityFilter } = this.props.store.getState();

    let visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <AddTodo
          onAddClick={(input_node) => {
            this.props.store.dispatch({
              type: 'ADD_TODO', text: input_node.value, id: nextTodoId++
            });
            input_node.value = '';
          }}
        />
        <ul>
          <TodoList
            todos={visibleTodos}
            onTodoClick={(id) => {
              return () => {
                this.props.store.dispatch({
                  type : 'TOGGLE_TODO',
                  id : id
                })
              }
            }}
          />
        </ul>

        <Footer />
      </div>
    )
  }
}

export default TodoApp;
