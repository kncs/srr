import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import appReducers from './reducers'
import CounterContainer from './containers/counter.container'

let store = createStore(appReducers)

ReactDOM.render((
  <Provider store={store}>
    <CounterContainer />
  </Provider>
), document.getElementById('app'))
