# GiveDirectlySkillsTest

I used node.js, mongodb and express.js to build a simple REST book request service. To test this I used postman.

Downloading nodeJS: https://nodejs.org/en/download/
Downloading express: https://expressjs.com/en/starter/installing.html
Downloading mongodb: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

Right now, this service creates a book request, deletes a book request and fetches a book request. I added todo comments throughout the code about what I would add in order to tighten the code (error checking around email address etc). With more time, I would definitely build out a separate books table to store the books in the library (right now the book request assumes any non-requested title exists, is in the library and can be taken out). this is clearly a false assumption, instead I would want to create a list of books with its own endpoints to add books and check the books table to see if the book exists before making a request. 
