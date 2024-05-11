
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
var PORT = process.env.PORT || 8000

var app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(bodyParser())
app.use(cors())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
        people: [
            {name : 'dave'},
            {name : 'jerry'},
            {name : 'dansan'}
        ]
    })
})

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}...`)
})