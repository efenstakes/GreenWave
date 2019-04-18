// import external libraries
const router = require('express').Router()

// import internal libraries
const transactionController = require('../controllers/transactions')



/**
* @api {post} / make a new transaction
* @apiVersion  1.0.0
* @apiName  Create Transaction
* @apiGroup  Transaction
* @apiDescription  Create a User Account
*  
* @apiParam (Request body) {String} content_creator The id of the content creator
* @apiParam (Request body) {String} ammount  ammount of money that is being tipped
*
* @apiExample {js} Example usage:
* const data = {
*    "content_creator": 23,
*    "ammount": 200
* }
*
* $http.defaults.headers.common["Authorization"] = token;
* $http.post(url, data)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess (Success 201) {Boolean} saved Boolean to determine if user was saved successfully
* @apiSuccess (Success 201) {String} id The id of the saved user (id they were saved)
* @apiSuccess (Success 201) {List} errors list of errors that were found with the data (if any) 
*
* @apiSuccessExample {json} Success response:
*     HTTPS 201 OK
*     {
*      "saved": true|false,
*      "id": "id",
*       "errors": []
*    }
*
* @apiUse UnauthorizedError
*/
router.post('/', transactionController.save)



/**
* @api {delete} / Delete a Transaction  
* @apiVersion  1.0.0
* @apiName  Delete Transaction
* @apiGroup  Transaction
* @apiPermission  authenticated user
* @apiDescription  Delete a User Account 
*
* @apiExample {js} Example usage:
* const data = {
* }
*
* $http.defaults.headers.common["Authorization"] = token;
* $http.delete(url, data)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess (Success 201) {Boolean} Boolean to determine if transaction was deleted successfully
* @apiSuccessExample {json} Success response:
*     HTTPS 201 OK
*     {
*      "deleted": true|false
*    }
*
* @apiUse UnauthorizedError
*/
router.delete('/', transactionController.delete)



/**
* @api {get} /:id/ Get Transaction Details
* @apiVersion  1.0.0
* @apiName  Get  Details
* @apiGroup  Transaction
* @apiDescription  Get Transaction Details
*
* @apiParam {Number} id the id of the Transaction
*
* @apiExample {js} Example usage:
* const data = {
* }
*
* $http.get(url, data)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess (Success 201) {Object} transaction contain transaction details
* @apiSuccessExample {json} Success response:
*     HTTPS 201 OK
*     {
*      "transaction": {}
*    }
*
*/
router.get('/:id', transactionController.get_details)



// export our routes
module.exports = router