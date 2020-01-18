// Describing the shape of the chat's slice of state
export interface couterStateInterface {
  couter: number
}

// Describing the different ACTION NAMES available
export const COUTER_ADD = 'COUTER/ADD'
export const COUTER_SUB = 'COUTER/SUB'

interface couterAddAction {
  type: typeof COUTER_ADD
  payload: {
    couter: number
  }
}

interface counrerSubAction {
  type: typeof COUTER_SUB
  payload: {
    couter: number
  }
}

export type couterActionTypes = couterAddAction | counrerSubAction
