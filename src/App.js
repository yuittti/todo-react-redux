import React, { Component } from 'react';
import { List, Map } from 'immutable';
import { createStore } from 'redux';
import TodoList from './components/TodoList';
import reducer from './reducers/todoReducer';
import { Provider } from 'react-redux';
import { TodoWrapper } from './containers/containers';

import logo from './logo.svg';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Todo List
        </header>
        
        <Provider store={store}>
          <TodoWrapper />
        </Provider>
      </div>
    );
  }
}

export default App;
