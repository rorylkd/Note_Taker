const express = require('express');
const path = require('path');

const app = express()

const port = 9000;

app.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, 'public' ,'/notes.html'));
});

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'public' , '/index.html'));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})