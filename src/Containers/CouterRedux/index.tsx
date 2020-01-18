import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCounter, subCounter } from '../../Stores/counter/reducers'
interface Props {
  counter: number
  handlerClickAddBtn: (oldCounter: number) => void
  handerClickSubBtn: (oldCounter: number) => void
}
interface State {}

class index extends Component<Props, State> {
  render() {
    const { counter, handlerClickAddBtn, handerClickSubBtn } = this.props
    return (
      <div>
        <h1>{`React Counter: ${counter}`} Counter</h1>
        <button onClick={() => handlerClickAddBtn(counter)}>Add</button>
        <button onClick={() => handerClickSubBtn(counter)}>Sub</button>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { counterState } = state
  const { counter } = counterState
  return { counter }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      handlerClickAddBtn: (oldCounter: number) => addCounter(oldCounter),
      handerClickSubBtn: (oldCounter: number) => subCounter(oldCounter)
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
