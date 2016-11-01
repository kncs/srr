import { combineReducers } from 'redux'
import counter from './counter.reducer'

const reduceApp = combineReducers({
  counter
})

export default reduceApp
