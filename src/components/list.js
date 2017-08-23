import React from 'react'
import { actions } from 'mirrorx'

const List = ({list = []}) => {
  return <div>
    {list.map((item, idx) => <li key={idx}>
      {`${idx} ${item.text}`}
      <button onClick={() => {
        actions.todos.delete(idx)
      }}>Delete</button>
    </li>)}
  </div>
}
export default List

