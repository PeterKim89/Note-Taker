const notes = require("express").Router();
const database = require("./db/db.json");
const dbPath = "../db/db.json";
const uuid = require("./helper/uuid");
const fs = require("fs");

notes.get("/api/notes", (req, res) => {
	readFromFile(database).then((data) => res.json(JSON.parse(data)));
});

notes.post("/api/notes", (req, res) => {
	const { title, text, note_id } = req.body;
	res.json(JSON.parse(data));
	if (title && text && note_id) {
		const newNote = {
			title,
			text,
			note_id: uuid(),
		};
		fs.readFile(dbPath, "utf8", (err, data) => {
			if (err) {
				console.error(err);
			} else {
				const parsedNotes = JSON.parse(data);
				parsedNotes.push(newNote);
				notes = parsedNotes;
				fs.writeFile(dbPath, JSON.stringify(parsedNotes, null, 4), (writeErr) =>
					writeErr
						? console.error(writeErr)
						: console.info("Successfully updated notes!")
				);
			}
		});
        const response = {
            status: 'success', 
            body: newNote,
        };
        console.log(response);
        res.json(response);
	}
        else {
            res.json('Error in posting note');
        }
});

// when a note is clicked, display it on the right
notes.get("/:noteId", (req, res) => {
	res.send(`Get specific note ${req.params.noteId}`);
});
