import {
  counterStateInterface,
  counterActionTypes,
  COUNTER_ADD,
  COUNTER_SUB
} from './types'
const initialState: counterStateInterface = {
  counter: 3
}

const reducer = (
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

export default reducer
