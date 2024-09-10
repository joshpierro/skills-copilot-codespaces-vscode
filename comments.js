    // Create web server
        var http = require('http');

    // Import comment module
    var comments = require('./comments');

    // Create server
    http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write(comments.getComments());
        res.end();
    }).listen(8000);

    console.log('Server running at http://localhost:8000/');
