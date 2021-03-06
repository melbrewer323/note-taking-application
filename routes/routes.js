const { v4: uuidv4 } = require("uuid");
const fs = require('fs');
const path = require('path');

let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'db/db.json'), "utf8"));


module.exports = (app) => {
    app.get('/api/notes', (req, res) => 
        res.sendFile(path.join(__dirname, '..', 'db/db.json')));
    app.get('/api/notes/:id', (req, res) => {
        res.json(notes[req.params.id]);
        res.json(true);
    });

    app.post("/api/notes", (req, res) => {
      let newNote = req.body;
      newNote.id = uuidv4();
       notes.push(newNote);
       console.log(req.body);
        fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
        });
    res.json(newNote);    
    })
};
