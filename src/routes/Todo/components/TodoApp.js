
import React from 'react';


const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  if (filter == currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(filter)
      }}
    >
      {children}
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

const Todo = ({onClick, text, completed }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration : completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
  )
};

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

const AddTodo = ({ onAddClick }) => {
  let input;
  return (
    <div>
      <input ref={node => { input = node } } />
      <button onClick={ () => onAddClick(input) }>
        Add Todo
      </button>
    </div>
  )
};

const Footer = ({
  visibilityFilter, onFilterClick
}) => {

  return (
    <p>
      <FilterLink
        filter="SHOW_ALL"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        ALL
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_ACTIVE"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        ACTIVE
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_COMPLETED"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        COMPLETED
      </FilterLink>
    </p>
  )
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

        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={(filter) => {
            this.props.store.dispatch({
              type: "SET_VISIBILITY_FILTER",
              filter : filter
            })
          }}
        />
      </div>
    )
  }
}

export default TodoApp;
