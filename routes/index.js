const express = require('express')
const router = express.Router()
const recipes = require('./recipes')
const subscribtions = require('./subscribtions')
const purchases = require('./purchases')
const ingredients = require('./ingredients')

// define the recipes route
router.use('/recipes', recipes)
// define the subscribtions route
router.use('/subscribtions', subscribtions)
router.use('/purchases', purchases)
router.use('/ingredients', ingredients)
module.exports = router
