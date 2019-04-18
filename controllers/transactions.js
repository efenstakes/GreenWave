// import external libraries
const bcrypt = require('bcrypt')


// import internal libraries
var db = require('../config/database')


// save a transaction 
module.exports.save = async function(req, res) {
    let response = { saved: false, id: null, errors: [] }
    let made_by = null

    if( req.user && req.user.id ) {
       made_by = req.user.id
    }
    
    let query = 'insert into transactions ( content_creator, made_by, ammount ) values( ?, ?, ? )'
    let { content_creator, ammount } = req.body

    let [ result ] = await db.execute(query, [ content_creator, made_by, ammount ])

    if( result.affectedRows == 1 ) {
        response.saved = true 
        response.id = result.insertId
    }
    res.json(response)

}


// delete a transaction
module.exports.delete = async function(req, res) {
    let response = { deleted: false }
    let { id } = req.body 
    let user_id = req.user.id

    let query = 'delete from transactions where id = ? and content_creator = ?'
    let [ result ] = db.execute(query, [ id, user_id ])

    if( result.affectedRows == 1 ) {
        response.deleted = true 
    }
    res.json(response)
}


// get transaction details
module.exports.get_details = async function(req, res) {
    let response = { transaction: {} }
    let { id } = req.params 

    let transactionQuery = 'select * from transactions where id = ?'
    let [ transactionResult ] = await db.query(transactionQuery, [ id ])

    if( transactionResult && transactionResult[0] ) {
        response.transaction = transactionResult[0]
    }
    res.json(response)

}

