const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const app = express();

const port = 9000;


app.use(express.json());


app.get("/notes", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "/notes.html"));
});

app.get("/api/notes", (request, response) => {
    // Reads our db.json file with readFileSync and then turns it into a usable object with json.parse
  const dbString = fs.readFileSync("./Develop/db/db.json", "utf8");
  const db = JSON.parse(dbString);

    // Sending the db data using response.json
    response.json(db);

});





app.post("/api/notes", (request, response) => {
    
    // Grabbing the new note title and text from the request object
const newNote = request.body

newNote.id = uuid.v4();
console.log("newNote", newNote);
 // Opening the db.json file and making it an object
const dbString = fs.readFileSync("./Develop/db/db.json", "utf8");
const db = JSON.parse(dbString);

// Adding the new note info to the db array
db.push(newNote);

console.log("db:", db)
 // Converting it back to a string
backToStringdb = JSON.stringify(db);

// Writing the db array to the db.json file
fs.writeFileSync("./Develop/db/db.json", backToStringdb, "utf8", {'flags': 'w+'})

});


app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
