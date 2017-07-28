// import { combineReducers } from 'redux';

// --------------------------------------------
// ACTION HANDLERS
// --------------------------------------------

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


// --------------------------------------------
// combineReducers -- Simplified version
// --------------------------------------------
//
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
    });
  }
};


// --------------------------------------------
// REDUCERS
// --------------------------------------------

// REDUCER acting on single todoitem
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'TOGGLE_TODO':
       return state.id == action.id ? toggleTodo(todo) : todo;
    default:
      return state
  }
};

// Reducer acting on multiple todoitems. It uses todoReducer to manage the state of
// a single object other that the list of todoitems
// THIS iS CALLED REDUCER COMPOSITION
export const todosReducer = (state= [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return todoReducer(state, action);

    case 'TOGGLE_TODO':
      return state.map(t => todoReducer(t, action));

    default:
      return state
  }


};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
};


// Another example of Reducer Composition pattern
// const todoAppReducer = (state = {}, action) => {
//   return {
//     todos : todos(state.todos, action),
//     visibilityFilter : visibilityFilter(state.visibilityFilter, action)
//   }
// };

// Redux provide a combineReducers utility to generate a root reducer and
// avoid the above code to write by hand.
const todoAppReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter : visibilityFilter
});


export default todoAppReducer;
