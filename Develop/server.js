const express = require('express');
const PORT = process.env.PORT || 3001;
const uuid = require('./helper/uuid');
const database = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a review`);
});



app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);