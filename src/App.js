import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { increment, decrement, multiply, divide } from './store/actions/countAction';

// mapeia meu estado para dentro das props do componentes
const mapState = (state) => ({
  count: state.count.count,
});

const App = ({ count, increment, decrement, multiply, divide }) => {
  const [arg, setArg] = useState(0);

  const setArgByInput = (e) => {
    setArg(e.target.value);
  }

  return (
    <div className="App">
      <input type="number" value={arg} onChange={setArgByInput}/>
      <p>MULTIPLY: {count.count}</p>
      <p>DIVIDE: {count.count}</p>
      <button onClick={() => {
        multiply(arg)
      }}>multiply</button>
      <button onClick={() => {
        divide(arg)
      }}>divide</button>
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
 
export default connect(mapState, { increment, decrement, multiply, divide })(App);


// teste
