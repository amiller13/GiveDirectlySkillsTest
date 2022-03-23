BookRequest = require('./bookRequestModel')
Book = require('./booksModel')

// gets book requests
exports.index = function (req, res) {
    BookRequest.get(function (err, bookRequests) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "Here are the book requests",
            data: bookRequests
        })
    })
}

// helper function to check if book request for book already exists
async function getBookRequestByTitle(bookTitle){
    // using query.clone() because of mongoose error "Query was already executed"
    const titleQuery = await BookRequest.find({title: bookTitle})
    const book = await titleQuery || await titleQuery.clone()
   
    return book.length > 0
}

// create book requests
exports.createBookRequest = function (req, res) {
    // TODO: add more in depth checking to see if the email format is correct
    if(!req.body.email || !req.body.title){
        res.json({
            message: 'Invalid book request',
            data: req
        })
    }
    return getBookRequestByTitle(req.body.title).then((doesBookRequestExist) => {
        if(doesBookRequestExist){
            console.log('why')
            res.json({
                message: 'Cannot request that book, it is already requested',
                data: req.body.title
            })
            return 
        }
        var bookRequest = new BookRequest()
    
        bookRequest.email = req.body.email
        bookRequest.title = req.body.title 
    
        bookRequest.save(function (err) {
          if (err){
            res.json(err)
          }
        //TODO: update date timestamp so its a string 
        var responseData = {
              id: bookRequest._id,
              available: true,
              title: bookRequest.title,
              timestamp: Date.now()
    
          }
          res.json({
            message: 'Book request created',
            data: responseData
            })    
        })
    })
}

// Handle view BookRequest by id
exports.viewBookRequest = function (req, res) {
    BookRequest.findById(req.params.bookRequest_id, function (err, bookRequest) {
        if (err){
            res.send(err)
        }
        res.json({
            message: 'Request details loading..',
            data: bookRequest
        })
    })
}

// Handle delete bookRequest
exports.delete = function (req, res) {
   BookRequest.remove({
        _id: req.params.bookRequest_id
    }, function (err, bookRequest) {
        if (err){
            res.send(err)
        }
    res.json({
            status: "success",
            message: 'Book request deleted'
        })
    })
}
