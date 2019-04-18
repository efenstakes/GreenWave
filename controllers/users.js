// import external libraries
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// import internal libraries
var db = require('../config/database')
var AppVars = require('../config/vars')

// create a user account
module.exports.save = async function(req, res) {
    let response = { saved: false, id: null, errors: [] }
    
    let query = 'insert into users (username, passcode, email, city, user_type, dob) values( ?, ?, ?, ?, ? )'
    let { username, password, passwordConfirmation, email, city, type, dob } = req.body

    if( password !== passwordConfirmation ) {
        response.errors.push({ password: 'Passwords must match' })
        return response
    }    
    let passwordHash = bcrypt.hashSync(password, 10)

    let [ result ] = await db.execute(query, [ username, passwordHash, email, city, type, dob ])

    if( result.affectedRows == 1 ) {
        response.saved = true 
        response.id = result.insertId
    }
    res.json(response)

}


// to delete a user
module.exports.delete = async function(req, res) {
    let response = { deleted: false }
    let { id } = req.body 

    let query = 'delete from users where id = ?'
    let [ result ] = db.execute(query, [ id ])

    if( result.affectedRows == 1 ) {
        response.deleted = true 
    }
    res.json(response)
}


module.exports.update = async function(req, res) {
    let response = { updated: false }
    let { username, dob, city, email, id } = req.body 

    let query = 'update users set username = ?, email = ?, dob = ?, city = ? where id = ?'
    let [ result ] = await db.execute(query, [ username, email, dob, city, id ])

    if( result.affectedRows == 1 ) {
        response.updated = true 
    }
    res.json(response)

}


module.exports.get_details = async function(req, res) {
    let response = { user: {} }
    let { id } = req.params 

    let userQuery = 'select * from users where id = ?'
    let [ userResult ] = await db.query(userQuery, [ id ])

    if( userResult && userResult[0] ) {
        response.user = userResult[0]
    }
    res.json(response)

}

module.exports.get_tips = async function(req, res) {
    let response = { tips: {} }
    let { id } = req.params 

    let tipQuery = 'select * from transactions where content_creator = ?'
    let [ tipResult ] = await db.query(tipQuery, [ id ])
    response.tips = tipResult

    let userQuery = 'select * from users where id = ?'
    response.tips = tipResult.map( async (tip)=> {
        let [ userResult ] = await db.query(userQuery, [ tip.made_by ])
        let made_by = {}
        
        if( userResult && userResult[0] ) {
           made_by = userResult[0]
        }
        return { tip, made_by }
    })

    res.json(response)

}


module.exports.login = async function(req, res) {
    let response = { token: null, user: {} }

    if( req.user && req.user.id ) {

        let token_data = { id: req.user.id, timestamp: Date.now() }
        let token = jwt.sign({ data: token_data }, AppVars.jwt.secret)
        response.token = token 
        response.user = req.user 

    }
    res.json(response)
}