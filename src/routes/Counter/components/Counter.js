import React from 'react'
import PropTypes from 'prop-types'

// Dumb counter component --- As it has no business logic.
const Counter = (props) => (
  <div>
    <h1>{props.value}</h1>
    <button className="btn btn-primary" onClick={props.onIncrement}>+</button>
    <button className="btn btn-warning" onClick={props.onDecrement}>-</button>
  </div>
);

Counter.propTypes = {
  value : PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
