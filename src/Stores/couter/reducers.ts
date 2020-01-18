import {
  couterStateInterface,
  couterActionTypes,
  COUTER_ADD,
  COUTER_SUB
} from './types'
const initialState: couterStateInterface = {
  couter: 0
}

const reduer = (
  state = initialState,
  action: couterActionTypes
): couterStateInterface => {
  switch (action.type) {
    case COUTER_ADD: {
      const { couter } = action.payload
      return { ...state, couter }
    }
    case COUTER_SUB: {
      const { couter } = action.payload
      return { ...state, couter }
    }
    default:
      return state
  }
}

export default reduer
