import Record from './record.js'
import { actions, connect, model } from 'mirrorx'
import api from '@/lib/api'

model({
  name: 'records',
  initialState: {
    list: []
  },
  reducers: {
    updateList (state, list) {
      return {
        list
      }
    }
  },
  effects: {
    async getRecords (url) {
      let list = await api.fetch(url)
      actions.records.updateList(list)
    } 
  }
})

export default connect(({records}) => ({list: records.list}))(Record)
