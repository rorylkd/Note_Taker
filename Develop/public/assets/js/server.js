const express = require('express');

const app = express()

const port = 9000;

app.get('/', (request, response) => {
    response.send('Test');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})