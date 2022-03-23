var mongoose = require('mongoose')

var bookRequestSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    }
})

var BookRequest = module.exports = mongoose.model('bookRequest', bookRequestSchema)
module.exports.get = function (callback, limit) {
    BookRequest.find(callback).limit(limit)
}
