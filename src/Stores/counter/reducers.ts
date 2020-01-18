import {
  counterStateInterface,
  counterActionTypes,
  COUNTER_ADD,
  COUNTER_SUB
} from './types'

/**
 * @description -------- Action Section -------------------
 */
export function addCounter(oldCouter: number) {
  const newCouter = oldCouter + 1
  return {
    type: COUNTER_ADD,
    payload: { counter: newCouter }
  }
}

export function subCounter(oldCouter: number) {
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
  counter: 3
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
      return { ...state, counter }
    }
    case COUNTER_SUB: {
      const { counter } = action.payload
      return { ...state, counter }
    }
    default:
      return state
  }
}
