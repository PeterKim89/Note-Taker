const express = require('express');
const path = require('path');
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

// Should get the json content from db.json 
app.get('/api/notes', (req, res) => 
    res.json(database)
);

// Should add note to db.json 
// Should add a unique id to each note
app.post('/api/notes', (req, res) => {
    // destructuring the note
    const {title, text} = req.body;
    // check to see if both title and text actually exist
    if (title && text) {
        // create an object with title and text
        const newNote = {
            title,
            text
        }


    }
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});