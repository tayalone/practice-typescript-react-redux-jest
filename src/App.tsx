import React from 'react'
import { Route } from 'react-router-dom'
import Counter from './Containers/Counter'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/counter" component={() => <Counter />} />
      <Route exact path="/" component={() => <h1>Home</h1>} />
    </div>
  )
}

export default App
