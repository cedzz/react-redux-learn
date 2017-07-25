
export const toggleTodo = (todo) => {
  // return Object.assign({}, todo, {
  //   completed : !todo.completed
  // })
  //
  // OR

  return {
    ...todo ,
    completed : !todo.completed
  }
};

export const addTodo = (state, action) => {
  return [
    ...state, {
      id : action.id,
      text : action.text,
      completed : false
    }
  ];
};

const todoReducer = (state= [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);

    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id == action.id ) {
          return toggleTodo(todo)
        } else {
          return todo
        }
      });

    default:
      return state
  }


};


export default todoReducer;
