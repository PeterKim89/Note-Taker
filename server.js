const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const database = require('./db/db.json');
const dbPath = './db/db.json';
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Routes
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// API Routes

// Should get the json content from db.json and display any notes on the left
app.get('/api/notes', (req, res) => 
    res.sendFile(path.join(__dirname, dbPath))
);

// Should add note to db.json 
// Should add a unique id to each note
app.post('/api/notes', (req, res) => {
    // destructuring the note into title and text
    const {title, text} = req.body;
    // check to see if both title and text actually exist
    if (title && text) {
        // create an object with title and text and unique id
        const newNote = {
            title,
            text,
            id: uuidv4()
        }
        
        // Add newNote to pre-existing notes in the database
        fs.readFile(dbPath, 'utf8', (err, data) => {
            // if an error, console log out error
            if (err) {
                console.error(err);
            }
            // else push the new note to the end of the notes database 
            else {
                const notes = JSON.parse(data);
                notes.push(newNote);
                fs.writeFile(dbPath, JSON.stringify(notes), (err) => err ? console.error(err) : console.info('Note has been added.')
                );
            }
        });

        // creating a response object with status and 
        const response = {
            status: 'Note added.',
            body: newNote,
        };
        
        res.json(response);
    }

    else {
        res.json("Error in adding note");
    }
});


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});