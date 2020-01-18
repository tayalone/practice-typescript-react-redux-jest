import React from 'react'
import { Route } from 'react-router-dom'
import Counter from './Containers/Counter'
import CouterRedux from './Containers/CouterRedux'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/counter" component={() => <Counter />} />
      <Route path="/counter-redux" component={() => <CouterRedux />} />
      <Route exact path="/" component={() => <h1>Home</h1>} />
    </div>
  )
}

export default App
