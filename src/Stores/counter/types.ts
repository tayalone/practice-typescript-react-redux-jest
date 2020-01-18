// Describing the shape of the chat's slice of state
export interface counterStateInterface {
  counter: number
}

// Describing the different ACTION NAMES available
export const COUNTER_ADD = 'COUTER/ADD'
export const COUNTER_SUB = 'COUTER/SUB'

interface couterAddAction {
  type: typeof COUNTER_ADD
  payload: {
    counter: number
  }
}

interface counrerSubAction {
  type: typeof COUNTER_SUB
  payload: {
    counter: number
  }
}

export type counterActionTypes = couterAddAction | counrerSubAction
