import update from 'immutability-helper'

import {
  counterStateInterface,
  counterActionTypes,
  COUNTER_ADD,
  COUNTER_SUB
} from './types'

/**
 * @description -------- Action Section -------------------
 */
export const addCounter = (oldCouter: number) => {
  const newCouter = oldCouter + 1
  return {
    type: COUNTER_ADD,
    payload: { counter: newCouter }
  }
}

export const subCounter = (oldCouter: number) => {
  const newCouter = oldCouter - 1
  return {
    type: COUNTER_SUB,
    payload: { counter: newCouter }
  }
}

/**
 * @description -------- InitialState Section -------------------
 */
const initialState: counterStateInterface = {
  counter: 0
}

/**
 * @description -------- Reducer Section -------------------
 */
export const reducer = (
  state = initialState,
  action: counterActionTypes
): counterStateInterface => {
  switch (action.type) {
    case COUNTER_ADD: {
      const { counter } = action.payload
      return update(state, { counter: { $set: counter } })
    }
    case COUNTER_SUB: {
      const { counter } = action.payload
      return update(state, { counter: { $set: counter } })
    }
    default:
      return state
  }
}
