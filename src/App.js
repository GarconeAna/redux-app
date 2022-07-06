import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { DECREMENT, INCREMENT } from './store/actions/types';

function App(props) {
  console.log(props)
  const handleInc = (evt) => {
    props.dispatch({
      type: INCREMENT 
    })
  }

  const handleDec = (evt) => {
    props.dispatch({
      type: DECREMENT 
    })
  }

  return (
    <div className="App">
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <p>{props.count}</p>
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    count: state.count.count
  }
}
 
export default connect(mapStateProps)(App);
