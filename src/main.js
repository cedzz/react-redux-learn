// import React from 'react'
import ReactDOM from 'react-dom'


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

// Rendering via Vanilla JS without react.
let render = () => {
  let h1div = document.createElement('h1');
  h1div.appendChild(document.createTextNode('Hello from vannila JS'));

  MOUNT_NODE.appendChild(h1div);
};


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
