import React, { PropTypes } from 'react'

const Counter = ({ value, incrementClick, decrementClick }) => (
  <div>
      <button onClick={decrementClick}>{'-'}</button>
      <div>{value}</div>
      <button onClick={incrementClick}>{'+'}</button>
  </div>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  incrementClick: PropTypes.func.isRequired,
  decrementClick: PropTypes.func.isRequired
}

export default Counter
