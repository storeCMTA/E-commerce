const express = require('express')
const userrouter = express.Router()
const usercontroller = require('../controller/usercontroller.js')

userrouter.post('/register',usercontroller.registercontroller)
userrouter.post('/login',usercontroller.logincontroller)


module.exports = userrouter