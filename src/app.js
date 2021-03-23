const express = require('express')
const { json, urlencoded, static } = require('express')
const morgan = require('morgan')
const path = require('path')
const helmet = require('helmet')
const cors = require('cors')

//initialization
const app = express()

// security request
app.use(helmet())

// allow cors
app.use(cors())

//more information request
app.use(morgan('dev'))

//json request
app.use(json)
app.use(urlencoded({extended: true}))  

// static files
app.use(static(path.join(__dirname, 'public')))

//routes
app.use('/user', require('./routes/user.routes'))

module.exports = app