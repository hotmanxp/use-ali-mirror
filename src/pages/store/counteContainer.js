import Counter from './counter'
import { model, actions, connect } from 'mirrorx'

model({
  name: 'counter',
  initialState: {
    count: 10
  },
  reducers: {
    add: ({count, ...rest}, extra) => ({
      rest,
      count: count + extra
    })
  },
  effects: {
    addSync: async () => {
      let text = await new Promise((res, rej) => {
        setTimeout(() => res(10), 2000)
      })
      actions.counter.add(text)
    }
  }
})

export default connect(({counter}) => ({count: counter.count}))(Counter)