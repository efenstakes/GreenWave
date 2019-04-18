/* 
 this file models config/vars.js file which should be the one to contain the variables
*/

let vars = {}

// set database variables
// replace the variables with your setup variables
vars.database = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'greenwave' 
}

vars.jwt = {
    secret: 'secret'
}


// export the variables
module.exports = vars