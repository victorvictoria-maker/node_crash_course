const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    // if(req.url === '/' || req.url === '/index' || req.url === '/index.html') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.writeHead(200, {'ContentType': 'text/html'});
    //             res.end(content);
    //         };
    //     });
    // } else if (req.url === '/about' || req.url === '/about.html') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.writeHead(200, {'ContentType': 'text/html'});
    //             res.end(content);
    //         };
    //     });
    // } else if (req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob Smith', age: 40},
    //         {name: 'Sola James', age: 26}
    //     ];

    //     res.writeHead(200, {'ContentType': 'application/json'});
    //     res.end(JSON.stringify(users));
    // } else {
    //     console.log("Page not found");
    //     res.end("Page not found");
    // };


    
    //OR [more efficient]

    // build dynamic file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // extention of file
    let fileExt = path.extname(filePath);

    // initial content type
    let contentType = 'text/html';

    // check extention and set content type
    switch (fileExt) {
        case '.js': 
            contentType = 'text/javascript';
            break;
        case '.css': 
            contentType = 'text/css';
            break;
        case '.json': 
            contentType = 'application/json';
            break;
        case '.png': 
            contentType = 'image/png';
            break;
        case '.jpg': 
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'ContentType': 'text/html'});
                    res.end(content, 'utf-8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            };
        } else {
            // success
            res.writeHead(200, {'ContentType': contentType});
            res.end(content, 'utf-8');
        }
    });

});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});