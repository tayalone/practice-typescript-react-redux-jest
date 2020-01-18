import { COUTER_ADD, COUTER_SUB } from './types'

export function sendMessage(oldCouter: number) {
  const newCouter = oldCouter + 1
  return {
    type: COUTER_ADD,
    payload: { couter: newCouter }
  }
}

export function deleteMessage(oldCouter: number) {
  const newCouter = oldCouter - 1
  return {
    type: COUTER_SUB,
    payload: { couter: newCouter }
  }
}
