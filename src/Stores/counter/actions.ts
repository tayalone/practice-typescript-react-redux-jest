import { COUNTER_ADD, COUNTER_SUB } from './types'

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
