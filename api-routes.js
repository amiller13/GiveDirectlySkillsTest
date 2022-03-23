let router = require('express').Router()

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Book Request Service!'
    })
})

// Import book request controller
var bookRequestController = require('./bookRequestController')
// book request routes
router.route('/bookRequest')
    .get(bookRequestController.index)
    .post(bookRequestController.createBookRequest)
router.route('/bookRequest/:bookRequest_id')
    .get(bookRequestController.viewBookRequest)
    .delete(bookRequestController.delete)

module.exports = router
