var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

app.use(bodyParser())
app.use(cors())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')