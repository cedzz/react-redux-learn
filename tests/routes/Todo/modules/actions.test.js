import Expect from 'expect';

import { toggleTodo, addTodo, todosReducer } from 'routes/Todo/modules/actions';

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


describe('( Reducer ) todosReducer', () => {
  const stateBefore = [
    {
      id : 0,
      text : "Learning Redux",
      completed : false
    }
  ];

  it('should add todo on ADD_TODO action', () => {
    const stateAfter = [
      {
        id : 0,
        text : "Learning Redux",
        completed : false
      },
      {
        id : 1,
        text : "Learn Redux-Router",
        completed : false
      }
    ];

    const action = {
      type :"ADD_TODO",
      text : 'Learn Redux-Router',
      id : 1
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    Expect(
      todosReducer(stateBefore, action)
    ).toEqual(stateAfter)

  });

  it( 'should toggle todo on TOGGLE_TODO action', () => {

  });
});
