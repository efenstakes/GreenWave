// export external libraries
const { check } = require('express-validator/check')

// import internal modules
const db = require('../config/database')



// validate the add transaction body parameters
module.exports.add = [
    
    check('content_creator')
       .exists().withMessage('Content Creator must be provided')
       .toInt().isInt()
       .custom( async (name, { req })=> {
            let userQuery = 'select * from users where id = ? and user_type = ?'
            let [ userResult ] = await db.query(userQuery, [ name, 'CONTENT_CREATOR' ])
        
            if( !userResult[0] ) {
                return Promise.reject('Content creator Has Already To Be Registered At GreenWave')
            }
       }),

    check('ammount')
        .exists().withMessage('Ammount tipped must be provided')
        .isCurrency().withMessage('Ammount Must Be A Currency Value')

]
