// const fs = require('fs');
// const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');
// const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// const { notes } = require('./Develop/db/db.json')
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);

// function createNewNote(body, notesArray) {
//     const note = body;
//     notessArray.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, './Develop/db/db.json'),
//       JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return note;
// }

// function validateNote(note) {
//     if (!note.title || typeof note.title !== 'string') {
//       return false;
//     }
//     if (!note.text || typeof note.text !== 'string') {
//       return false;
//     }
//     return true;
// }

// HTML Routes that need to be created:
// GET/notes should return the notes.html file
// GET * should return the index.html file

// API Routes that need to be created:
// GET/api/notes should read the db.json file and return all saved notes as JSON
// app.get('/api/notes', (req, res) => {
//     return res.json(data);
// });

// POST/api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.  You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you)
// app.post('/api/notes', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = notes.length.toString();
  
//     // if any data in req.body is incorrect, send 400 error back
//     if (!validateNote(req.body)) {
//       res.status(400).send('The note is not properly formatted.');
//     } else {
//       const note = createNewNote(req.body, notes);
//       res.json(note);
//     }
// });


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
});