var express = require('express')
var router = express.Router()
let purchases = []


router.get('/', function (req, res) {
  res.json(purchases)
})

router.delete('/:id', function (req, res) {
  const { id } = req.params
  const shouldDelete = purchases.find(item => Number(item.id) === Number(id))
  if (!shouldDelete) {
    return res.status(404).send({ success: false, error: 'not found' })
  }
  purchases = purchases.filter(item => Number(item.id) !== Number(id))
  res.json({ purchases, success: true })
})

router.post('/', function (req, res) {
  const { id } = req.body
  if (!id) {
    return res.json({ error: 'id needed', success: false })
  }
  const shouldAdd = purchases.find(item => Number(item.id) === Number(id))
  if (shouldAdd) {
    return res.json({ purchases, success: true })
  }
  purchases = purchases.concat({ id: Number(id) })
  res.json({ success: true, purchases })
})

module.exports = router
