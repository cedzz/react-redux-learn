
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

export const addTodo = (state, newTodo) => {
  return [
    ...state, newTodo
  ];
};

const todoReducer = (state= [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return addTodo(state, {
        id : action.id,
        text : action.text,
        completed : false
      });
    default:
      return state
  }


};


export default todoReducer;
