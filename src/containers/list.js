import List from '../components/list'
import mirror, { connect } from 'mirrorx'

mirror.model({
  name: 'todos',
  initialState: {
    list: [{text: 'a'}, {text: 'b'}]
  },
  reducers: {
    add: (state, text) => ({
      ...state,
      list: [...state.list, {text}]
    }),
    delete: (state,idx) =>({
      ...state,
      list: [...state.list.slice(0, idx), ...state.list.slice(idx + 1, state.list.lenght)]
    })
  }
})

export default connect(({todos}) => (todos))(List)
