import express from 'express'
const router = express.Router()

import * as Utils from '../utils'

const productTemp = {
  prodSrc: idx => `../../static/img/p${idx + 1}.png`,
  price: idx => idx + 50
}
let products = Utils.makeList(productTemp, 6)
let recordTemp = {
  num: idx => idx,
  recordContent: '100元联通充值卡',
  userInfo: {
    nickName: '老亚平2',
    from: '山东青岛'
  },
  date: '2017/06/30',
  time: '11:49:59',
  src: idx => `../../static/img/p${idx % 6 + 1}.png`
}
let records = Utils.makeList(recordTemp, 10)

router.get('/record-list', (req, res) => {
  res.send(records)
})

router.get('/product-list', (req, res) => {
  res.send(products)
})

router.post('/del', (req, res) => {
  let { id } = req.body
  let index = records.find(i => i.id === id)
  records.splice(index, 1)
  res.send({status: 1})
})

export default router
