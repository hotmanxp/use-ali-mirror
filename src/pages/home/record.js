import React from 'react'
import api from '@/lib/api'
import {actions} from 'mirrorx'

const Record = ({list}) => {
  const del = async (i) => {
        let result = await api.fetch('api/home/del', 'post', {id: i.id})
        if(result) {
          actions.records.getRecords('api/home/record-list')
        }
      }
  return <div>
    <div>{list.map((i, idx) => <div key={i.id}>
        {idx + ' : ' + i.recordContent}<span>{i.date}</span>
        <button onClick={() => del(i)}>Del</button>
      </div>)}
    </div>
  </div>
}
export default Record
