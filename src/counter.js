import React, { Component } from 'react';
import { connect } from 'react-redux';

import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  
  increment = () => {
    this.props.dispatch({ type: "INCREMENT"})
  }
  
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT"})
  }
  
  render() {
    return(
      <div className="counter">
        <button
          className="decrement"
          onClick={this.decrement}>
          Minus
        </button>
        <span>Counter: {this.props.count}</span>
        <button
          className="increment"
          onClick={this.increment}>
          Add
        </button>
      </div>
    )
  }
}

// mapStateToProps() maps state from the redux
// store the props of this component
const mapStateToProps = (state) => ({
  count: state.count
})

export { Counter };
export default connect(mapStateToProps)(Counter);
// Calling connect() is a higher order function,
// when called, it returns another function that 
// then gets called with Counter component. This
// in turn, returns a new component that then gets
// exported. So we are now returning the connected
// Counter, not just Counter

// connect() also allows Counter to have access to 
// dispatch method, that's why it's accessed via
// this.props.dispatch()