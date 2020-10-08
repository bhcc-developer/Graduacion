const router = require('express').Router()
const { login, signup }  = require('../controllers/auth.controller')


router.post('/signin', login)
router.post('/signup', signup)

module.exports = router