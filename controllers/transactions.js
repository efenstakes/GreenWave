// import external libraries
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator/check')

// import internal libraries
const db = require('../config/database')
const validators = require('../validators/users')


// save a transaction 
module.exports.save = async function(req, res) {
    let response = { saved: false, id: null, errors: [] }
    let made_by = null

    let errors = validationResult(req).formatWith(validators.errorFormatter)
    if( !errors.isEmpty() ) {
        response.errors = errors.array()
        return res.json(response)
    }

    if( req.user && req.user.id ) {
       made_by = req.user.id
    }
    
    let query = 'insert into transactions ( content_creator, made_by, ammount, method, code ) values( ?, ?, ?, ?, ? )'
    let { content_creator, ammount, method, code } = req.body

    let [ result ] = await db.execute(query, [ content_creator, made_by, ammount, method, code ])

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
    let userQuery = 'select * from users where id = ?'
    let [ transactionResult ] = await db.query(transactionQuery, [ id ])

    if( transactionResult && transactionResult[0] ) {
        let transaction = transactionResult[0]
        let content_creator = {}
        let tipper = { user_type: 'Anonymous' }

        let [ contentCreatorResult ] = await db.execute(userQuery, [ transaction.content_creator ])
        let [ tipperResult ] = await db.execute(userQuery, [ transaction.made_by ])

        response.transaction = transaction

        if ( contentCreatorResult && contentCreatorResult[0] ) {
            let { passcode, ...contcre } = contentCreatorResult[0] 
            content_creator = contcre
        }
        if ( tipperResult && tipperResult[0] ) {
            let { passcode, ...tper } = tipperResult[0] 
            tipper = tper
        }
        response.transaction.meta = {
            content_creator, tipper
        }
        // response.transaction.meta.content_creator = content_creator
        // response.transaction.meta.tipper = tipper
    }

    res.json(response)
}

