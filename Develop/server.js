const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()

const port = 9000;

app.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, 'public' ,'/notes.html'));
});

app.get('/api/notes', (request, response) => {
    // Passing require with the path to a JSON file reads and parses the data into an object.
    const db = require('./db/db.json');
    console.log(db);
});

// app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, 'public' , '/index.html'));
// });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})