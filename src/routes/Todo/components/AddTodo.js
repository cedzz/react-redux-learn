import React from 'react';

let nextTodoId = 0;

const AddTodo = ({ store }) => {
  let input;
  return (
    <div>
      <input ref={node => { input = node } } />
      <button onClick={ () => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++
        });
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  )
};

export default  AddTodo;
