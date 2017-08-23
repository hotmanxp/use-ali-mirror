import React, { Component } from 'react'
import RecordList from './container'
import { actions } from 'mirrorx'

class Home extends Component {
  async componentDidMount() {
    actions.records.getRecords('api/home/record-list')
  }
  
  render() {
    return (
      <div className='home-page'>
        Welcome to react world!
        <RecordList />
      </div>
    )
  }
}

export default Home
