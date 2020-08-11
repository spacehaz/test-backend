const express = require('express')
const router = express.Router()

router.post('/:id', function (req, res) {
  const { id } = req.params
  if (!id) {
    return res.json({ success: false, error: 'id needed as param' })
  }
  res.json({ success: true })
})

router.delete('/:id', function (req, res) {
  const { id } = req.params
  if (!id) {
    return res.json({ success: false, error: 'id needed as param' })
  }
  res.json({ success: true })
})

module.exports = router
