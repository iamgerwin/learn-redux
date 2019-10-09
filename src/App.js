import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
        <button onClick={() => dispatch(signIn())}>{!isLogged ? 'sign in' : 'sign out'}</button>
        {isLogged && <h3>Hello, logged user!</h3>}
        
      </header>
    </div>
  );
}

export default App;
