const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const app = express();

const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/notes", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "/notes.html"));
});

app.get("/api/notes", (request, response) => {
    // Reads our db.json file with readFileSync and then turns it into a usable object with json.parse
  const dbString = fs.readFileSync("./Develop/db/db.json", "utf8");
  const db = JSON.parse(dbString);
    console.log(db);
    // Sending the db data using response.json
    response.json(db);
});

app.post("/api/notes", (request, response) => {
    
const newNote = request.body
console.log(newNote);



});

// The code below isn't needed as I've made public into a static folder...but I'm hanging onto it just in case

// app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, 'public' , '/index.html'));
// });

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
