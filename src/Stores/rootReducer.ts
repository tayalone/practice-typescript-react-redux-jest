import { combineReducers } from 'redux'
import counterReducer from './counter/reducers'
const RootReducer = combineReducers({ counterState: counterReducer })

export default RootReducer
