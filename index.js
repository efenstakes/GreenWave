// import external libraries
const express = require('express')

const bodyParser = require('body-parser')

// import internal libraries

// routes
const userRoutes = require('./routes/users')


// initializing the application instance
const app = express()

// setup body parser to help access json and other data from clients
// parse application/x-www-form-urlencoded and json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// setup passport authentication



// hook up routes with controllers
app.use('/api/user', userRoutes)


// start app on
app.listen(9000, function() {
    console.log('server started')
})