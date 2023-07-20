let express = require('express');
let app = express();
const port = 5001;

const quoteList = require('./quoteList');
// Setup express.static files
app.use(express.static('server/public'));



// Get route
// When we visit localhost:5001/quotes, in our browser, express will call this function
app.get('/quotes', function(req, res) {
    console.log('Request for /quotes was made');

    // Send back the list of quotes
    // so we can see it in our browser
    res.send(quoteList)
});


app.listen(port, function() {
    console.log('listening on port', port);
});

// http://localhost:5001/quotes
// this is called  | Route | Path | URL


// 4 Types of Routes/Methods
// Get: Retrieve data from the server
// POST: save new data to the server
// PUT: update some data to the server
// DELETE: delete some data on the server
// CRUD - Create, Read, Updates, Delete

// Status Codes
// 200 OK: everything worked as expected
// 201 Created - a record was created without issue
// 400 Bad Request - something went wrong in your route
// 404 Not Found - The URL or endpoint is not available
// 500 Server Error - Something bad happened on the server