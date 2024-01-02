const http = require('http');

const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/' :
            res.statusCode = 200;
            res.end('Hello World');
            break;
        case '/home' :
            res.statusCode = 200;
            res.end('Home');
            break;
        case '/profile' :
            res.statusCode = 200;
            res.end('Profile');
            break;
        default :
        res.statusCode = 404;
        res.end('Not Found')
    }
});

server.listen(port, hostname, () => {
    console.log('Server running...');
});