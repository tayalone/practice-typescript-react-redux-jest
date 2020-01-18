import { combineReducers } from 'redux'
import counterReducer from './couter/reducers'
const RootReducer = combineReducers({ couter: counterReducer })

export default RootReducer
