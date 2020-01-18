import * as React from 'react'
import delay from '../../Utils/delay'

export interface IAppProps {}

export interface IAppState {
  title: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = { title: 'Loading' }
  }

  componentDidMount = async () => {
    await delay(5000)
    this.setState({ title: 'done' })
  }
  public render() {
    const { title } = this.state
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}
