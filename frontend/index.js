import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import appReducers from './reducers'
import CounterContainer from './containers/counter.container'

let store = createStore(appReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render((
  <Provider store={store}>
    <CounterContainer />
  </Provider>
), document.getElementById('app'))
