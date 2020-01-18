import { combineReducers } from 'redux'
import { reducer as counterReducer } from './counter/reducers'
const RootReducer = combineReducers({ counterState: counterReducer })

export default RootReducer
