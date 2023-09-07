const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/home') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    } else if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    } else if(req.url ==='/contact-me') {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    } else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    }
});

server.listen(8080);