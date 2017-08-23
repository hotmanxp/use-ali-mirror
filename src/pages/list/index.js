import React, { Component } from 'react'
import ListContainer from '@/containers/list'
import { actions } from 'mirrorx'

class ListPage extends Component {
  render() {
    return (
      <div className='list-page'>
        <div className='add-part'>
          <input ref={ref => { this.input = ref }} />
          <button onClick={() => {
            actions.todos.add(this.input.value)
          }}>Add</button>
        </div>
        <ListContainer />
      </div>
    )
  }
}

export default ListPage

