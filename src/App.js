import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Counter from './counter';

// initialState will get applied if state 
// in reducer is undefined
const initialState = { count: 0 };

// reducers define initial redux state
// as well as any new state
function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

const store = createStore(reducer);  

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;

