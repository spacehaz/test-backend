const express = require('express')
const router = express.Router()

router.patch('/:id', function (req, res) {
  const { subscribe } = req.body
  const { id } = req.params
  console.log({ subscribe, id })
  res.json({ success: true, subscribe })
})

module.exports = router
