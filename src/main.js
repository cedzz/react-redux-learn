import React from 'react'
import ReactDOM from 'react-dom';
import expect from 'expect';

// import { createStore } from 'redux';


const MOUNT_NODE = document.getElementById('root');

// Rendering a React APP
// let render = () => {
//   const App = require('./components/App').default;
//
//   ReactDOM.render(
//     <App />,
//     MOUNT_NODE
//   )
// };


// let runTests = () => {
//   expect(
//     counter(0, { type : 'INCREMENT' })
//   ).toEqual(1);
//
//   expect(
//     counter(1, { type : 'INCREMENT' })
//   ).toEqual(2);
//
//   expect(
//     counter(2, { type : 'DECREMENT' })
//   ).toEqual(1);
//
//   expect(
//     counter(1, { type : 'DECREMENT' })
//   ).toEqual(0);
//
//   expect(
//     counter(undefined, {})
//   ).toEqual(0);
//   console.log("All Tests Passed!! Hurray !! ");
// };
//


// -------------------------------------

// SIMPLIFIED STORE IMPLEMENTATION
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach( listener => listener() );
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

// -------------------------------------

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT' : return state - 1;
    default : return state;
  }
};

// -------------------------------------


const store = createStore(counter);

console.log("store initial state: ", store.getState());

// Rendering via React using Redux store.
import Counter from 'routes/Counter';

let render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => (
        store.dispatch({ type : 'INCREMENT' })
      )}
      onDecrement={() => (
        store.dispatch({ type : 'DECREMENT' })
      )}
    />, MOUNT_NODE);

};

store.subscribe(render) ;

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render;

    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e);
        renderError(e);
      }
    };

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      // './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render();
