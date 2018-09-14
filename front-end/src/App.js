import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import TopBar from './components/TopBar'

import './App.css'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TopBar/>
        </div>
      </Provider>
    );
  }
}

export default App;
