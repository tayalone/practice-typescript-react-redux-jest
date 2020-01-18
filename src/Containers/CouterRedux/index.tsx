import React, { Component } from 'react'

interface Props {}
interface State {}

export default class index extends Component<Props, State> {
  render() {
    return (
      <div>
        <h1>{`React Counter: ${0}`}Counter</h1>
      </div>
    )
  }
}
