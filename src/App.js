import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { increment, decrement } from './store/actions/countAction';

// mapeia meu estado para dentro das props do componentes
const mapState = (state) => ({
  count: state.count.count
});

function App({ count, increment, decrement }) {
  return (
    <div className="App">
      <button onClick={() => {
        increment(count)
      }}>Increment</button>
      <button onClick={() => {
        decrement(count)
      }}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}
 
export default connect(mapState, { increment, decrement })(App);
