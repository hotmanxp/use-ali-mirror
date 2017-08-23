import React, { Component } from 'react';
import Counter from './counteContainer'
import { actions } from 'mirrorx'

class Store extends Component {
  onAdd () {
    actions.counter.addSync()
  }
  render() {
    return (
      <div>
        <Counter />
        <div>
          <button className='btn' onClick={this.onAdd}>Add</button>
        </div>
      </div>
    );
  }
}

export default Store;