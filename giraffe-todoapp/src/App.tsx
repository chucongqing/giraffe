import React from 'react';
import { Provider } from 'react-redux'
import {store}  from 'store/store';
import './App.css';
import TodoApp from 'TodoApp';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <TodoApp></TodoApp>
    </div></Provider>
  );
}

export default App;
