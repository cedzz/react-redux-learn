import Expect from 'expect';

import { toggleTodo, addTodo } from 'routes/Todo/modules/actions';

describe('(Action) Toggle Todo ' , () => {

  it('Should toggle the given todo ', () => {
    const todoBefore = {
      id : 0,
      text : 'Learn Redux',
      completed : false
    };

    const todoAfter = {
      id : 0,
      text : 'Learn Redux',
      completed : true
    };

    deepFreeze(todoBefore);

    Expect(
      toggleTodo(todoBefore)
    ).toEqual(todoAfter);
  });
});


describe('(Action) Add Todo', () => {

  it('should add todo', () => {

    const stateBefore = [];
    const action = {
      type : 'ADD_TODO',
      id : 0,
      text : "Learning Redux"
    };

    const stateAfter = [
      {
        id : 0,
        text : "Learning Redux",
        completed : false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    Expect(
      addTodo(stateBefore, action)
    ).toEqual(stateAfter)

  });
});


describe('( Reducer ) todoReducer', () => {

});
