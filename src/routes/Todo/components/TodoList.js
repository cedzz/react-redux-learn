import React from 'react';
import Todo from './Todo';
import {connect } from 'react-redux';


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

const mapStateToProps = (state) => {
  return {
    todos : getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : (id) => {
      dispatch({
        type : 'TOGGLE_TODO',
        id : id
      })
    }
  }
};


// -------------------------------------------------
// Explanation of how connects work implicitly as an HOC component
// -------------------------------------------------
// class VisibleTodoList extends React.Component {
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() => {
//       this.forceUpdate();
//     })
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     const { store } = this.context;
//     const state = store.getState();
//
//     return (
//       <TodoList
//         todos={
//           getVisibleTodos(state.todos, state.visibilityFilter)
//         }
//         onTodoClick={(id) => {
//           store.dispatch({
//             type : 'TOGGLE_TODO',
//             id : id
//           })
//         }}
//       />
//     )
//   }
// }
//
// VisibleTodoList.contextTypes = {
//   store : React.PropTypes.object
// };

// -------------------------------------------------



const TodoList = ({
  todos, onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        {...todo}
      />)}
  </ul>
);

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


export default VisibleTodoList;
