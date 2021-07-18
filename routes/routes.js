const fs = require('fs');
const path = require('path');
// const db = require('./db/db.json')


module.exports = (app) => {
    app.get('/api/notes', (req, res) => 
        res.sendFile(path.join(__dirname, '..', 'db/db.json')));
    // app.get('/api/notes', (req, res)=> res.json()






};
