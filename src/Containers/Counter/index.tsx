import * as React from 'react'

export interface couterContainerProps {}

export interface counterContainerState {
  counter: number
}

class Conuter extends React.Component<
  couterContainerProps,
  counterContainerState
> {
  constructor(props: counterContainerState) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  handlerAddCounter = (oldValue: number) => {
    this.setState({ counter: oldValue + 1 })
  }

  handlerSubCounter = (oldValue: number) => {
    console.log(`handlerSubCounter`, oldValue)
    this.setState({ counter: oldValue - 1 })
  }

  public render() {
    const { counter } = this.state
    return (
      <div>
        <h1>{`Counter: ${counter}`}Counter</h1>
        <button onClick={() => this.handlerAddCounter(counter)}>Add</button>
        <button onClick={() => this.handlerSubCounter(counter)}>Sub</button>
      </div>
    )
  }
}

export default Conuter
