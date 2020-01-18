import delay from './delay'

describe('Test Utils/delay.ts', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  test('waits 1 second before ending the game', async () => {
    const spy = jest.fn()
    delay(1000).then(spy) // <= resolve after 100ms
    jest.advanceTimersByTime(200) // <= advance less than 100ms
    await Promise.resolve() // let any pending callbacks in PromiseJobs run
    expect(spy).not.toHaveBeenCalled() // SUCCESS
    jest.advanceTimersByTime(800) // <= advance the rest of the time
    await Promise.resolve() // let any pending callbacks in PromiseJobs run
    expect(spy).toHaveBeenCalled() // SUCCESS
  })
})
