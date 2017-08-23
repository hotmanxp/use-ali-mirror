import React, { Component } from 'react'
import Footer from './footer'
import Header from './header'
import List from '../containers/list'
import mirror from 'mirrorx'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
        <input ref={ref => { this.input = ref }} />
          <botton onClick={() => {
            mirror.actions.todos.add(this.input.value)
          }}>Add</botton>
        </div>
        <List />
        <Footer />
      </div>
    )
  }
}

export default App
