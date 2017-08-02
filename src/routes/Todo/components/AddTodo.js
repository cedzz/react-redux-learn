import React from 'react';

let nextTodoId = 0;

const AddTodo = () => {
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
        input_node.value = '';
      }}>
        Add Todo
      </button>
    </div>
  )
};

export default  AddTodo;
