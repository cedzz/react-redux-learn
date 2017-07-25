import React from 'react'
import ReactDOM from 'react-dom';
import expect from 'expect';

import { counter } from 'routes/Counter/modules/counter';


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
