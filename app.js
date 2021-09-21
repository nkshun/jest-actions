const express = require('express')
const app = express()
const router = express.Router()
const { Get } = require('./root')

router.get('/', Get)

app.use('/', router)



module.exports = app;